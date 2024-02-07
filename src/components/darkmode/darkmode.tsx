import style from './darkmode.module.css';
import { useContext } from 'react';
import { ThemeContext } from 'App';

export const DarkMode: React.FC = () => {
	const { darkmode, setTheme } = useContext(ThemeContext);

	return (
		<>
			<div>ass</div>
			<label id={darkmode === 'light' ? style.light : style.dark} className={style.switch}>
				<input type='checkbox' onChange={() => { setTheme() }}></input>
				<span className={style.slider}></span>
			</label>
		</>
	)
}
