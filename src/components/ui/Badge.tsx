import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'neutral' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'green',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    green: 'bg-[#E6F2EA] text-[#0F6B4A] border border-[#D0E6D8]',
    neutral: 'bg-[#F3EFE6] text-[#2D3A34] border border-[#E8E3D6]',
    dark: 'bg-[#0B1F17] text-[#FAF8F3] border border-[#1B382B]',
    outline: 'bg-transparent text-[#0F6B4A] border border-[#0F6B4A]/30',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-md font-medium',
    md: 'text-sm px-3 py-1 rounded-md font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap leading-tight tracking-tight ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
