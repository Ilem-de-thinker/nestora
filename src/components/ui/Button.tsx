import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'cream';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.99]';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 h-8',
    md: 'text-sm px-4 py-2 gap-2 h-10',
    lg: 'text-base px-5 py-2.5 gap-2.5 h-12',
  };

  const variantClasses = {
    primary:
      'bg-[#0F6B4A] hover:bg-[#0B5339] text-[#FAF8F3] shadow-xs focus-visible:ring-2 focus-visible:ring-[#0F6B4A]/50',
    secondary:
      'bg-[#E6F2EA] hover:bg-[#D7ECE0] text-[#0F6B4A] focus-visible:ring-2 focus-visible:ring-[#0F6B4A]/40',
    outline:
      'border border-[#D4CDBC] hover:border-[#0F6B4A] hover:bg-[#F3EFE6] text-[#0B1F17] bg-transparent focus-visible:ring-2 focus-visible:ring-[#0F6B4A]/40',
    ghost:
      'text-[#2D3A34] hover:bg-[#F3EFE6] hover:text-[#0B1F17] bg-transparent',
    dark:
      'bg-[#0B1F17] hover:bg-[#143327] text-[#FAF8F3] shadow-xs focus-visible:ring-2 focus-visible:ring-[#0B1F17]/50',
    cream:
      'bg-[#FAF8F3] hover:bg-[#F3EFE6] text-[#0B1F17] border border-[#E8E3D6]',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
