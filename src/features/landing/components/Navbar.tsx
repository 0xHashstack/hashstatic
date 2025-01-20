import React, { useState } from 'react';
import Logo from '../../../components/common/Logo';
import Image from 'next/image';
import { IMAGES } from '@/constants/assets.constant';
import { EXTERNAL_URLS } from '@/constants/config.constant';
import { Btn } from '../../../components/ui/button';
import { MobileMenu } from '../../../components/ui/drawer/MobileMenu';
import { Drawer } from '../../../components/ui/drawer/Drawer';

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen((prevState) => !prevState);
	};

	const launchApp = () => {
		window.open(EXTERNAL_URLS.APP, '_blank');
	};

	return (
		<nav className='flex items-center justify-between w-full px-4 py-8 sm:px-8 sm:py-4'>
			<Logo />
			<div className='flex gap-2 items-center flex-shrink-0'>
				<div className='hidden sm:block'>
					<Btn.PrimaryLG onClick={launchApp}>
						Launch App
					</Btn.PrimaryLG>
				</div>

				<Image
					onClick={toggleDrawer}
					className='cursor-pointer lg:hidden'
					src={IMAGES.CTA.HAMBURGER}
					alt='picture of author'
					width={40}
					height={40}
				/>

				<Drawer
					isOpen={isDrawerOpen}
					onClose={toggleDrawer}>
					<MobileMenu onClose={toggleDrawer} />
				</Drawer>
			</div>
		</nav>
	);
};

export default Navbar;
