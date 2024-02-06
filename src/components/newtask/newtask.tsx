import React from 'react';
import { useState, useContext, useRef } from 'react';
import style from './newtask.module.css';
import { TasksArray } from 'components/maincontainer/maincontainer';

export const NewTask: React.FC = () => {
	const { tasks, setTasks } = useContext(TasksArray)
	const [title, setTitle] = useState("")

	const inputref = useRef<HTMLInputElement>(null);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>, setfunction: React.Dispatch<React.SetStateAction<string>>) {
		setfunction(e.target.value)
	}

	const createTaskHandler = () => {
		setTasks([...tasks,
		{
			title: `${title}`,
			taskId: tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 1
		}
		])
		if (inputref.current) {
			inputref.current.value = '';
		}
	}


	return (
		<>
			<div className={style.newtaskcontainer}>
				<div className={style.inputContainer}>
					Task Name
					<input ref={inputref} className={style.taskInput} onChange={(e) => handleChange(e, setTitle)}></input>
				<button className={style.taskButton} onClick={createTaskHandler}>Create</button>
				</div>
				{/* <button className={style.taskButton} onClick={createTaskHandler}>Create</button> */}
			</div>
		</>
	)
}
