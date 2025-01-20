/* eslint-disable react/display-name */
import { cn } from '@/utils/css.utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const paragraphVariants = cva('text-text-primary-700', {
	variants: {
		variant: {
			default: 'text-text-primary-700',
			light: '!text-text-primary-300',
		},
		textWeight: {
			regular: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},

		size: {
			10: 'text-[10px]',
			12: 'text-xs',
			14: 'text-sm',
			16: 'text-base',
			20: 'text-xl',
			24: 'text-2xl',
			32: 'text-[32px]',
			36: 'text-4xl',
			40: 'text-[40px]',
			48: 'text-5xl',
		},
		textColor: {
			50: 'text-text-primary-50',
			100: 'text-text-primary-100',
			200: 'text-text-primary-200',
			300: 'text-text-primary-300',
			400: 'text-text-primary-400',
			500: 'text-text-primary-500',
			600: 'text-text-primary-600',
			700: 'text-text-primary-700',
			800: 'text-text-primary-800',
			900: 'text-text-primary-900',
			info: 'text-highlight-information-text',
			error: 'text-highlight-error-text',
			success: 'text-highlight-success-text',
			primary: 'text-primary',
			inherit: 'text-inherit',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 16,
		textWeight: 'regular',
		textColor: 700,
	},
});

export interface HTMLParagraphProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof paragraphVariants> {
	readonly asChild?: boolean;
}

const RawText = React.forwardRef<HTMLParagraphElement, HTMLParagraphProps>(
	(
		{
			className,
			variant,
			size,
			textColor,
			textWeight,
			asChild = false,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'p';
		return (
			<Comp
				className={cn(
					paragraphVariants({
						variant,
						size,
						textColor,
						textWeight,
						className,
					})
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

RawText.displayName = 'Text';

const createTextComponent =
	(size: number, weight: string) =>
	({ ...props }: HTMLParagraphProps) => (
		<RawText
			size={size as HTMLParagraphProps['size']}
			textWeight={weight as HTMLParagraphProps['textWeight']}
			{...props}
		/>
	);

export const Text = {
	Regular10: createTextComponent(10, 'regular'),
	Regular12: createTextComponent(12, 'regular'),
	Regular14: createTextComponent(14, 'regular'),
	Regular16: createTextComponent(16, 'regular'),
	Regular20: createTextComponent(20, 'regular'),
	Regular24: createTextComponent(24, 'regular'),
	Regular32: createTextComponent(32, 'regular'),
	Regular36: createTextComponent(36, 'regular'),
	Regular40: createTextComponent(40, 'regular'),
	Regular48: createTextComponent(48, 'regular'),
	Medium10: createTextComponent(10, 'medium'),
	Medium12: createTextComponent(12, 'medium'),
	Medium14: createTextComponent(14, 'medium'),
	Medium16: createTextComponent(16, 'medium'),
	Medium20: createTextComponent(20, 'medium'),
	Medium24: createTextComponent(24, 'medium'),
	Medium32: createTextComponent(32, 'medium'),
	Medium36: createTextComponent(36, 'medium'),
	Medium40: createTextComponent(40, 'medium'),
	Medium48: createTextComponent(48, 'medium'),
	Semibold10: createTextComponent(10, 'semibold'),
	Semibold12: createTextComponent(12, 'semibold'),
	Semibold14: createTextComponent(14, 'semibold'),
	Semibold16: createTextComponent(16, 'semibold'),
	Semibold20: createTextComponent(20, 'semibold'),
	Semibold24: createTextComponent(24, 'semibold'),
	Semibold32: createTextComponent(32, 'semibold'),
	Semibold36: createTextComponent(36, 'semibold'),
	Semibold40: createTextComponent(40, 'semibold'),
	Semibold48: createTextComponent(48, 'semibold'),
	Bold10: createTextComponent(10, 'bold'),
	Bold12: createTextComponent(12, 'bold'),
	Bold14: createTextComponent(14, 'bold'),
	Bold16: createTextComponent(16, 'bold'),
	Bold20: createTextComponent(20, 'bold'),
	Bold24: createTextComponent(24, 'bold'),
	Bold32: createTextComponent(32, 'bold'),
	Bold36: createTextComponent(36, 'bold'),
	Bold40: createTextComponent(40, 'bold'),
	Bold48: createTextComponent(48, 'bold'),
};

export { RawText as RawText, paragraphVariants };
