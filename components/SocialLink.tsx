import { socialLink } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	direction: string;
}

const SocialLink = ({ direction }: Props) => {
	const { mode } = useTheme();
	const lineDirection =
		direction === 'row'
			? 'w-[176px] h-[2px]'
			: 'w-[176px] h-[2px] md:h-[176px] md:w-[2px]';
	const flexDirection = direction === 'row' ? 'flex' : 'md:flex-column flex';
	return (
		<div
			className={`${flexDirection} w-full items-center gap-5 self-end md:justify-end`}
		>
			{socialLink.map((link) => (
				<Link key={link.label} href={link.href} target="_blank">
					<Image
						src={`/assets/icons/${mode}-${link.socialImg}`}
						width={24}
						height={24}
						alt={`${link.label} link`}
					/>
				</Link>
			))}
			<div className={`${lineDirection} invert-bg max-md:flex-1`}></div>
		</div>
	);
};

export default SocialLink;
