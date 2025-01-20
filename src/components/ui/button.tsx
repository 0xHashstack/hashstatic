/* eslint-disable react/display-name */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary:
					'bg-btn-primary text-primary-foreground shadow hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline:
					'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
				icon: 'bg-transparent',
			},
			size: {
				xl: 'h-12',
				lg: 'h-10 px-4',
				icon: 'h-6 w-6',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'xl',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

const createButtonComponent =
	(variant: ButtonProps['variant'], size: ButtonProps['size']) =>
	({ ...props }: ButtonProps) => (
		<Button
			variant={variant}
			size={size}
			{...props}
		/>
	);

export const Btn = {
	PrimaryXL: createButtonComponent('primary', 'xl'),
	PrimaryLG: createButtonComponent('primary', 'lg'),
	SecondaryXL: createButtonComponent('secondary', 'xl'),
	SecondaryLG: createButtonComponent('secondary', 'lg'),
	Icon: createButtonComponent('icon', 'icon'),
};

export { Button, buttonVariants };
