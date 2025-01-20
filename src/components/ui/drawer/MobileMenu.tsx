import { EXTERNAL_URLS } from '@/constants/config.constant';
import { cn } from '@/utils/css.utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import Logo from '../../common/Logo';
import { Btn } from '../button';
import { X } from 'lucide-react';

interface MenuItem {
	label: string;
	href: string;
	isActive?: boolean;
}

interface MobileMenuProps {
	onClose: () => void;
}

const MENU_ITEMS: MenuItem[] = [
	{ label: 'Home', href: '/', isActive: true },
	{ label: 'Docs', href: 'https://docs.hashstack.finance/' },
	{
		label: 'Developers',
		href: 'https://docs.hashstack.finance/developers/',
	},
	{
		label: 'Use-cases',
		href: 'https://docs.hashstack.finance/developers/supply-and-borrow/borrow/use-cases',
	},
	{ label: 'HASH token', href: '#' },
	{
		label: 'Airdrop Leaderboard',
		href: 'https://app.hashstack.finance/v1/airdrop_leaderboard',
	},
	{
		label: 'Contribute-2-Earn',
		href: 'https://hashstack.finance/c2e',
	},
];

export function MobileMenu({ onClose }: MobileMenuProps) {
	const router = useRouter();

	const handleNavigation = (href: string) => {
		if (href.startsWith('http')) {
			window.open(href, '_blank');
		} else {
			router.push(href);
		}
		onClose();
	};

	return (
		<div className='flex flex-col items-center min-h-screen p-8'>
			<div className='mb-8'>
				<Logo />
			</div>

			<nav className='w-full '>
				<ul className='space-y-1'>
					{MENU_ITEMS.map((item) => (
						<li key={item.label}>
							<button
								onClick={() => handleNavigation(item.href)}
								className={cn(
									'w-full h-16 flex items-center justify-center',
									'text-sm font-medium border border-[#1A1A1F]',
									'transition-colors duration-200',
									item.isActive ? 'text-[#00D395]' : (
										'text-white hover:text-[#00D395]'
									)
								)}>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			</nav>

			<Btn.Icon
				onClick={onClose}
				className='mt-8 '>
				<X size={24} />
			</Btn.Icon>
		</div>
	);
}
