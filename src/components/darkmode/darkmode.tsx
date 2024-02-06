import style from './darkmode.module.css';
import { useContext } from 'react';

import { ThemeContext } from 'App';


export const DarkMode: React.FC = () => {
	const { darkmode, setDarkMode } = useContext(ThemeContext)

	return (
		<label className={style.switch}>
			<input type='checkbox' onChange={() => { setDarkMode() }}></input>
			<span className={style.sliderRound}></span>
		</label>
	)
}
