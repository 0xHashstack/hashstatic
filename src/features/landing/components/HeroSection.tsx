'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { LaunchBadges } from './LaunchBadges';

const HeroText = () => {
	return (
		<div className='flex flex-col items-center md:items-start'>
			<p
				className={cn(
					'text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAFD] to-[#737BD0] font-bold font-inter text-center md:text-left',
					'text-[10vw] sm:text-[70px] lg:text-[110px]  leading-none'
				)}>
				Borrow 500%
			</p>
			<p
				className={cn(
					'text-text-secondary font-inter font-light mt-3',
					'text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[46px] lg:max-w-[600px] leading-tight text-center md:text-left max-w-[400px]'
				)}>
				of your collateral for liquidity mining & trading needs.
			</p>
		</div>
	);
};

const HeroIllustration = () => {
	return (
		<div className='mb-8  md:mb-0 md:mt-10 2xl:mt-24 md:ml-20 xl:ml-32 2xl:ml-40'>
			<Image
				src='/illustration.gif'
				alt='Provider-Borrower Illustration animation'
				width={730}
				height={730}
				className='max-w-full w-auto'
				priority
			/>
		</div>
	);
};

const HeroSection = () => {
	return (
		<div className='mt-4 md:mt-24'>
			<div className='flex flex-col-reverse items-center md:flex-row md:px-8'>
				<div className='px-8 md:px-0 flex flex-col items-center md:items-start'>
					<LaunchBadges />
					<HeroText />
				</div>
				<div className='md:flex-1 px-8 md:px-0'>
					<HeroIllustration />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
