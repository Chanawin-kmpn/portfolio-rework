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
		<button
			onClick={toggleMode}
			style={{ position: 'relative', width: '24px', height: '24px' }}
		>
			<Image
				src={`/assets/icons/${iconName}.svg`}
				fill
				alt={`${mode === 'dark' ? 'Dark mode' : 'Light mode'} `}
			/>
		</button>
	);
};

export default Theme;
