import React from 'react';
import { useState, useContext, useRef } from 'react';
import style from './newtask.module.css';
import { TasksArray, } from 'components/maincontainer/maincontainer';
import { ThemeContext } from 'App';

export const NewTask: React.FC = () => {
	const { tasks, setTasks } = useContext(TasksArray);
	const { darkmode } = useContext(ThemeContext);
	const [title, setTitle] = useState("");
	const [emptyInputShake, setEmptyInputShake] = useState(false);

	const inputref = useRef<HTMLInputElement>(null);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>, setfunction: React.Dispatch<React.SetStateAction<string>>) {
		setfunction(e.target.value);
	}

	const createTaskHandler = () => {
		if(title !== ""){
			setTasks([...tasks,
			{
				title: `${title}`,
				taskId: tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 1
			}
			])
				setTitle("")
			if (inputref.current) {
				inputref.current.value = '';
			}
		}else{
			setEmptyInputShake(true)
		}
	}

	const inputStyles = [style.taskInput]
		if(emptyInputShake){
			inputStyles.push(style.taskInputShake)
		}

	return (
		<>
			<div className={style.newtaskcontainer}>
				<div className={style.inputContainer}>
					Task Name
					<input ref={inputref} className={inputStyles.join(" ")} onClick={()=>{setEmptyInputShake(false)}} onChange={(e) => handleChange(e, setTitle)}></input>
					<button id={darkmode} className={style.taskButton} onClick={createTaskHandler}>Create</button>
				</div>
			</div>
		</>
	)
}
