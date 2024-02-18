import { useState, createContext } from 'react';
import './App.css';
import { MainContainer } from 'components/maincontainer/maincontainer';
import { themeInitial } from 'library/context';

export const ThemeContext = createContext(themeInitial);

function App() {
	const [darkmode, setDarkMode] = useState("light");
	return (
		<ThemeContext.Provider value={{
			darkmode,
			setTheme: () => darkmode === "dark" ? setDarkMode("light") : setDarkMode("dark") }}>
			<div className="App" id={darkmode}>
				<MainContainer />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
