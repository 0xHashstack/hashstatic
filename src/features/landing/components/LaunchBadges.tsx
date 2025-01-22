import Image from 'next/image';
import Link from 'next/link';

export const LaunchBadges = () => {
	const badges = [
		{ text: 'Launched' },
		{
			text: 'Content creators program',
			link: 'https://hashstack.medium.com/introducing-hashstacks-content-creator-program-ccp-435aea9c9d83',
			icon: '🎉',
		},
		{
			text: 'Degen mode',
			link: 'https://hashstack.medium.com/execute-optimal-strategies-with-degen-mode-eb63c6f23322',
			icon: '🕺',
		},
	];

	return (
		<div className='flex items-center gap-2 text-base md:text-[20px] font-medium mb-8 flex-wrap justify-center md:justify-start'>
			{badges.map((badge) => (
				<LaunchBadge
					key={badge.text}
					{...badge}
				/>
			))}
		</div>
	);
};

interface LaunchBadgeProps {
	text: string;
	link?: string;
	icon?: string;
}

const LaunchBadge = ({ text, link, icon }: LaunchBadgeProps) => {
	const content = (
		<div className='flex items-center gap-1'>
			{text} {icon || null}
		</div>
	);

	if (link) {
		return (
			<Link
				href={link}
				target='_blank'
				className='hover:text-badge-hover bg-badge-bg px-4 py-2 rounded-[10px] whitespace-nowrap'>
				{content}
			</Link>
		);
	}

	return (
		<span className='text-badge-success bg-badge-bg px-4 py-2 rounded-[10px]'>
			{text}
		</span>
	);
};
