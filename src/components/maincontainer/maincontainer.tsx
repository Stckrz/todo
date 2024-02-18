import React from 'react';
import { useState, createContext } from 'react';
import style from './maincontainer.module.css';
import { NewTask } from 'components/newtask/newtask';
import { TaskContainer } from 'components/taskcontainer/taskcontainer';
import { DarkMode } from 'components/darkmode/darkmode';
import { ITask, tasksInitial } from 'library/context';

export const TasksArray = createContext(tasksInitial);

export const MainContainer: React.FC = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	return (
		<>
				<TasksArray.Provider value={{ tasks, setTasks }}>
					<div className={style.mainWrapper}>
						<DarkMode />
						<NewTask />
						<TaskContainer />
					</div>
				</TasksArray.Provider>
		</>
	)
}
