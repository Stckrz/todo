import React from 'react';
import { useContext } from 'react';
import style from './taskContainer.module.css';
import { TasksArray } from 'components/maincontainer/maincontainer';
import { TaskView } from 'components/taskview/taskview';

export const TaskContainer: React.FC = () => {
	const { tasks } = useContext(TasksArray)
	return (
		<>
			<div className={style.taskContainer}>
				{
					tasks.map((task) => {
						return (
							<TaskView key={task.taskId} task={task} />
						)
					})
				}
			</div>
		</>
	)
}
