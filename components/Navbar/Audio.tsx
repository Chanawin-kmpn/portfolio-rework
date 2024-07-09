'use client';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import React, { useState } from 'react';

const Audio = () => {
	const { mode } = useTheme();
	const [sound, setSound] = useState(false);

	const toggleSound = () => {
		setSound(!sound);
	};

	const soundSetting = sound ? 'max' : 'mute';
	return (
		<button onClick={toggleSound}>
			<Image
				src={`/assets/icons/${mode}-sound-${soundSetting}.svg`}
				width={24}
				height={24}
				alt="Audio"
			/>
		</button>
	);
};

export default Audio;
