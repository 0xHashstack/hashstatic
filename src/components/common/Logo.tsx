import { IMAGES } from '@/constants/assets.constant';
import Image from 'next/image';
import React from 'react';
import { RawText } from '@/components/ui/typography/Text';

function Logo({ hideText = false }: { hideText?: boolean }) {
	return (
		<div className='flex items-center gap-1'>
			<div className='relative w-6 h-6 sm:h-9 sm:w-9'>
				<Image
					src={IMAGES.LOGOS.MAIN}
					fill
					alt='logo'
					priority
					quality={100}
					sizes='(max-width: 500px) 24px, 36px'
					className='object-contain'
				/>
			</div>
			{!hideText && (
				<RawText className='text-base sm:text-[26px] font-light'>
					Hashstack
				</RawText>
			)}
		</div>
	);
}

export default Logo;
