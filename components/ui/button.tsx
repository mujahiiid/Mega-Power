import {cva, type VariantProps} from 'class-variance-authority';
import type {ButtonHTMLAttributes} from 'react';
import {cn} from '@/lib/utils';
const buttonVariants = cva('inline-flex items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50', {variants: {variant: {primary: 'bg-primary text-white hover:bg-primary-dark', secondary: 'bg-accent text-white hover:bg-[#c62828]', outline: 'border border-primary bg-white text-primary hover:bg-blue-50', ghost: 'text-primary hover:bg-blue-50'}}, defaultVariants: {variant: 'primary'}});
export function Button({className, variant, ...props}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) { return <button className={cn(buttonVariants({variant}), className)} {...props} />; }
