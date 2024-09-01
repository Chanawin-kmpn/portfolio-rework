import { socialLink } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	direction: string;
}

const SocialLink = ({ direction }: Props) => {
	const { mode } = useTheme();

	return (
		<div
			className={clsx(
				'flex w-full items-center gap-5 self-end xl:justify-end',
				{
					'xl:flex-column': direction === 'column',
				}
			)}
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
			<div
				className={clsx('invert-bg max-xl:flex-1', {
					'w-[176px] h-[2px]': direction === 'row',
					'w-[176px] h-[2px] xl:h-[176px] xl:w-[2px]': direction === 'column',
				})}
			></div>
		</div>
	);
};

export default SocialLink;
