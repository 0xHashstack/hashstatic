import { cn } from '@/utils/css.utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface DrawerProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	position?: 'left' | 'right';
}

const overlayVariants = {
	closed: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
	open: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
};

const drawerVariants = {
	closed: (position: 'left' | 'right') => ({
		x: position === 'left' ? '-100%' : '100%',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	}),
	open: {
		x: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

export function Drawer({
	isOpen,
	onClose,
	children,
	position = 'right',
}: DrawerProps) {
	// Handle escape key press
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, onClose]);

	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Overlay */}
					<motion.div
						className='fixed inset-0 bg-black/40 z-50'
						variants={overlayVariants}
						initial='closed'
						animate='open'
						exit='closed'
						onClick={onClose}
					/>

					{/* Drawer */}
					<motion.div
						className={cn(
							'fixed top-0 bottom-0 w-full  bg-black z-50',
							position === 'left' ? 'left-0' : 'right-0'
						)}
						custom={position}
						variants={drawerVariants}
						initial='closed'
						animate='open'
						exit='closed'>
						{children}
					</motion.div>
				</>
			)}
		</AnimatePresence>,
		document.body
	);
}
