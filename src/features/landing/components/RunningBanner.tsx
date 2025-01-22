'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

import DicordLogo from '@/assets/Icons/dicordLogo';
import DiscordLogoWhite from '@/assets/Icons/discordLogoWhite';
import FileIcon from '@/assets/Icons/fileIcon';
import FileIconWhite from '@/assets/Icons/fileIconWhite';
import GithubIcon from '@/assets/Icons/githubIcon';
import GithubIconWhite from '@/assets/Icons/githubIconWhite';
import QueryIcon from '@/assets/Icons/queryIcon';
import QueryIconWhite from '@/assets/Icons/queryIconWhite';
import TwitterIcon from '@/assets/Icons/twitterIcon';
import TwitterIconWhite from '@/assets/Icons/twitterIconWhite';
import { Text } from '@/components/ui/typography/Text';
import { BANNER_URL } from '@/constants/urls';

const RunningBanner = () => {
	const [hoverIndex, setHoverIndex] = useState(0);

	const partners = [
		{
			href: BANNER_URL.JediSwap,
			activeSrc: '/logos/jediSwapLogoActive.svg',
			inactiveSrc: '/logos/jediSwapLogo.svg',
			alt: 'JediSwap Logo',
		},
		{
			href: BANNER_URL.MySwap,
			activeSrc: '/logos/mySwapLogoActive.svg',
			inactiveSrc: '/logos/mySwapLogo.svg',
			alt: 'MySwap Logo',
		},
		{
			href: BANNER_URL.Yagi,
			activeSrc: '/logos/yagiLogoActive.svg',
			inactiveSrc: '/logos/yagiLogo.svg',
			alt: 'Yagi Logo',
		},
		{
			href: BANNER_URL.Pragma,
			activeSrc: '/logos/pragmaLogoActive.svg',
			inactiveSrc: '/logos/pragmaLogo.svg',
			alt: 'Pragma Logo',
		},
	];

	const socials = [
		{
			href: 'https://x.com/0xhashstack',
			Icon: TwitterIcon,
			IconWhite: TwitterIconWhite,
		},
		{
			href: 'https://discord.gg/aPAH4mkT',
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

	return (
		<div className='flex flex-col mt-10 gap-5 w-screen overflow-clip'>
			<div className='flex sm:hidden justify-center'>
				<Text.Semibold14>We work with</Text.Semibold14>
			</div>
			<div className='flex w-full '>
				{/* Partner logos section */}

				<div className='flex flex-1 bg-[rgba(217,217,217,0.06)] h-[61px]'>
					<div className='hidden sm:flex items-center bg-black px-8'>
						<p className='font-inter text-sm font-semibold text-white'>
							We work with
						</p>
					</div>
					<div className='flex-1 overflow-hidden py-5'>
						<Marquee
							gradientColor={[12, 8, 34]}
							pauseOnHover={true}
							speed={40}>
							<div className='flex items-center'>
								{[...partners, ...partners, ...partners].map(
									(partner, index) => (
										<Link
											key={index}
											href={partner.href}
											target='_blank'
											className='cursor-pointer'>
											<div
												className='mx-8 transition-opacity duration-200 opacity-70 hover:opacity-100 xl:mx-12'
												onMouseEnter={() =>
													setHoverIndex(index + 1)
												}
												onMouseLeave={() =>
													setHoverIndex(0)
												}>
												<Image
													src={
														(
															hoverIndex ===
															index + 1
														) ?
															partner.activeSrc
														:	partner.inactiveSrc
													}
													alt={partner.alt}
													width={100}
													height={40}
													className='h-auto w-auto'
												/>
											</div>
										</Link>
									)
								)}
							</div>
						</Marquee>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RunningBanner;
