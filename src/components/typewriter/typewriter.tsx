import React from 'react';
import { useState, useEffect } from 'react';
import style from './typewriter.module.css';

interface TypewriterProps {
	message: string,
	delay: number
}

export const Typewriter: React.FC<TypewriterProps> = ({ message, delay }) => {
	const [typedMessage, setTypedMessage] = useState("");

	const interval = React.useRef<any>(null);

	useEffect(() => {

		clearInterval(interval.current);
		setTypedMessage("");

		let builtString = "";
		let i = 0;

		interval.current = setInterval(() => {
			builtString += message[i]
			i++
			setTypedMessage(builtString);

			if (builtString === message) {
				clearInterval(interval.current);
			}
		}, delay);

		return () => {
			clearInterval(interval.current)
		}
	}, [message, delay])

	return (
		<>
			<div className={style.typewriterText}>
					{typedMessage}
			</div>
		</>
	)
}
