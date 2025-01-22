'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StarknetLogo from '@/assets/Icons/starknetLogo';
import AlchemyLogo from '@/assets/Icons/alchemyLogo';
import { server } from '@/services/data.service';
import { Btn } from '@/components/ui/button';
import { EXTERNAL_URLS } from '@/constants/config.constant';
import { numberFormatter } from '@/utils/number.utils';

interface StatItemProps {
	label: string;
	value: string | number | null;
	isLoading?: boolean;
}

const StatItem = ({ label, value, isLoading }: StatItemProps) => (
	<div className='flex flex-col items-center md:items-start'>
		<p className='text-text-secondary text-sm font-medium font-inter whitespace-nowrap'>
			{label}
		</p>
		<div className='text-badge-success text-center font-inter text-4xl font-semibold mt-1.5 whitespace-nowrap'>
			{isLoading ?
				<div className='h-10 w-[120px] bg-gradient-to-r from-[#101216] to-[#2B2F35] rounded-md animate-pulse' />
			:	value}
		</div>
	</div>
);

const PoweredBy = () => (
	<div className='flex flex-col items-center flex-1'>
		<p className='text-text-secondary mb-4'>Powered by</p>
		<div className='flex gap-8 flex-wrap justify-center md:justify-start'>
			<Link
				href='https://www.starknet.io/en'
				target='_blank'
				className='cursor-pointer'>
				<StarknetLogo />
			</Link>
			<Link
				href='https://www.alchemy.com'
				target='_blank'
				className='cursor-pointer'>
				<AlchemyLogo />
			</Link>
		</div>
	</div>
);

const MarketStats = () => {
	const [utilRate, setUtilRate] = useState<number | null>(null);
	const [tvl, setTvl] = useState<number | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [metricsRes, tvlRes] = await Promise.all([
					server.getUtilRate(),
					server.getTvl(),
				]);

				const latestMetric = metricsRes.pop();
				setUtilRate(Number(latestMetric?.totalPlatformURM / 100));
				setTvl(tvlRes?.tvl);
			} catch (err) {
				console.error('Failed to fetch market stats:', err);
				setUtilRate(9);
				setTvl(9000);
			}
		};

		fetchData();
	}, []);

	const launchApp = () => {
		window.open(EXTERNAL_URLS.APP, '_blank');
	};

	return (
		<div className='mt-10 md:mt-20 px-8'>
			<div className='flex justify-center sm:hidden mb-10'>
				<Btn.PrimaryLG onClick={launchApp}>Launch App</Btn.PrimaryLG>
			</div>
			<div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16'>
				<div className='flex gap-12 flex-1 flex-wrap justify-center md:justify-start'>
					<StatItem
						label='Utilization'
						value={utilRate ? `${utilRate}%` : null}
						isLoading={!utilRate}
					/>
					<StatItem
						label='Liquidity Locked'
						value={tvl ? `$${numberFormatter(tvl)}+` : null}
						isLoading={!tvl}
					/>
				</div>
				<PoweredBy />
			</div>
		</div>
	);
};

export default MarketStats;
