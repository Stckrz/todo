import React from 'react';
import { useState, useContext } from 'react';
import { TasksArray } from 'components/maincontainer/maincontainer';
import { ITask } from 'library/context';
import style from './taskview.module.css';
import { Typewriter } from 'components/typewriter/typewriter';

interface TaskViewProps {
	task: ITask,
}

export const TaskView: React.FC<TaskViewProps> = ({ task }) => {
	const { tasks, setTasks } = useContext(TasksArray)
	const [editText, setEditText] = useState(task.title)
	const [editMode, setEditMode] = useState(false);
	const [animationCssClass, setAnimationCssClass] = useState("")

	function deleteTask() {
		setTasks(
			tasks.filter(item => item.taskId !== task.taskId)
		)
	}

	function editTask() {
		setTasks(
			tasks.map((item) => {
				if (item.taskId === task.taskId) {
					return { ...item, title: editText }
				} else {
					return item
				}
			})
		)
	}

	function deleteTaskHandler() {
		setAnimationCssClass(`${style.toDoExit}`)
		setTimeout(() => {
			deleteTask()
		}, 500)
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>, setfunction: React.Dispatch<React.SetStateAction<string>>) {
		setfunction(e.target.value)
	}

	return (
		<>
					{editMode ?
						<div className={`${animationCssClass} ${style.taskContainer}`}>
							<input className={style.taskInput} placeholder={task.title} onChange={(e) => handleChange(e, setEditText)}></input>
							<button className={style.taskButton} onClick={() => { editTask(); setEditMode(!editMode) }}>confirm</button>
							<button className={style.taskButton} onClick={() => { setEditMode(!editMode) }}>cancel</button>
						</div>
						:
						<div className={`${animationCssClass} ${style.taskContainer}`}>
							<div>
								<Typewriter message={task.title} delay={100} />
							</div>
							<div className={style.buttonBox}>
								<button className={style.taskButton} onClick={() => { deleteTaskHandler() }} >delete</button>
								<button className={style.taskButton} onClick={() => { setEditMode(!editMode) }} >edit</button>
							</div>
						</div>
					}

		</>
	)
}