export interface ITask {
	title: string,
	taskId: number,
}

export const tasksInitial: ITasksInterface = {
	tasks: [
		{
			title: "",
			taskId: 0,
		}],
	setTasks: () => { },
}

export interface ITasksInterface {
	tasks: ITask[],
	setTasks: (data: ITask[]) => void,
}



export interface Theme {
	darkmode: string,
	setTheme: () => void
}

export const themeInitial: Theme = {
	darkmode: "",
	setTheme: () => { },
}
