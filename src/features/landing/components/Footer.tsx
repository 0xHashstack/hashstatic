'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Text } from '@/components/ui/typography/Text';
import DicordLogo from '@/assets/Icons/dicordLogo';
import TwitterIcon from '@/assets/Icons/twitterIcon';
import GithubIcon from '@/assets/Icons/githubIcon';
import FileIcon from '@/assets/Icons/fileIcon';
import QueryIcon from '@/assets/Icons/queryIcon';
import TwitterIconWhite from '@/assets/Icons/twitterIconWhite';
import DiscordLogoWhite from '@/assets/Icons/discordLogoWhite';
import GithubIconWhite from '@/assets/Icons/githubIconWhite';
import FileIconWhite from '@/assets/Icons/fileIconWhite';
import QueryIconWhite from '@/assets/Icons/queryIconWhite';
import { EXTERNAL_URLS } from '@/constants/urls';

const footerLinks = [
	{ text: 'Home', href: '/', isActive: true },
	{ text: 'Docs', href: 'https://docs.hashstack.finance/' },
	{ text: 'Developers', href: 'https://docs.hashstack.finance/developers' },
	{
		text: 'Use-cases',
		href: 'https://docs.hashstack.finance/developers/supply-and-borrow/borrow/use-cases',
	},
	{ text: 'HASH token', href: 'https://token.hashstack.finance/provisions/' },
	{
		text: 'Airdrop Leaderboard',
		href: 'https://app.hashstack.finance/v1/airdrop_leaderboard',
	},
	{ text: 'Contribute-2-Earn', href: 'https://hashstack.finance/c2e' },
];

const socialLinks = [
	{
		href: 'https://x.com/0xhashstack',
		Icon: TwitterIcon,
		IconWhite: TwitterIconWhite,
	},
	{
		href: EXTERNAL_URLS.DISCORD,
		Icon: DicordLogo,
		IconWhite: DiscordLogoWhite,
	},
	{
		href: 'https://github.com/0xHashstack/',
		Icon: GithubIcon,
		IconWhite: GithubIconWhite,
	},
	{
		href: 'https://drive.google.com/drive/folders/1ysun5L45Ib4MZAOGr8v9BK-CpZuMpXJr',
		Icon: FileIcon,
		IconWhite: FileIconWhite,
	},
	{
		href: 'https://docs.hashstack.finance/hub/faqs',
		Icon: QueryIcon,
		IconWhite: QueryIconWhite,
	},
];

const Footer = () => {
	const [hoverIndex, setHoverIndex] = useState(0);

	return (
		<footer className=''>
			<div className='w-full px-4 sm:px-8 py-4'>
				<div className='flex flex-col-reverse md:flex-row justify-between items-center gap-6'>
					{/* Navigation Links */}
					<nav className='hidden md:flex flex-wrap gap-4 md:gap-6 xl:gap-10'>
						{footerLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								target={
									link.href.startsWith('http') ?
										'_blank'
									:	undefined
								}>
								<Text.Regular14
									className={`cursor-pointer transition-colors duration-200 ${
										link.isActive ? 'text-[#00D395]' : (
											'text-[#8C8C9B] hover:text-[#00D395]'
										)
									}`}>
									{link.text}
								</Text.Regular14>
							</Link>
						))}
					</nav>

					{/* Social Icons */}
					<div className='flex gap-4 sm:gap-6 xl:gap-10 justify-center'>
						{socialLinks.map((social, index) => (
							<Link
								key={index}
								href={social.href}
								target='_blank'
								className='cursor-pointer'
								onMouseEnter={() => setHoverIndex(index + 1)}
								onMouseLeave={() => setHoverIndex(0)}>
								<div
									className={`flex items-center justify-center w-10 h-10 p-2 rounded-md transition-all duration-200 ${
										hoverIndex === index + 1 ?
											'bg-[#4D59E8] border border-[#2B2F35]'
										:	'bg-[#161B22] hover:bg-[#4D59E8] hover:border hover:border-[#2B2F35]'
									}`}>
									{hoverIndex === index + 1 ?
										<social.IconWhite />
									:	<social.Icon />}
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
