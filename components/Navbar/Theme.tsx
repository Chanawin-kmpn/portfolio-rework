import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import React from 'react';

const Theme = () => {
	const { mode, setMode } = useTheme();
	const toggleMode = () => {
		const newMode = mode === 'dark' ? 'light' : 'dark';
		setMode(newMode);
		localStorage.theme = newMode;
	};
	const iconName = mode === 'dark' ? 'moon' : 'sun';
	return (
		<button onClick={toggleMode}>
			<Image
				src={`/assets/icons/${iconName}.svg`}
				width={24}
				height={24}
				alt={`${mode === 'dark' ? 'Dark mode' : 'Light mode'} `}
			/>
		</button>
	);
};

export default Theme;
