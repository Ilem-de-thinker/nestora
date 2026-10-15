import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'canvas' | 'dark' | 'outline';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'surface',
  interactive = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    surface: 'bg-[#F3EFE6] border border-[#E8E3D6]',
    canvas: 'bg-[#FAF8F3] border border-[#E8E3D6]',
    dark: 'bg-[#0B1F17] text-[#FAF8F3] border border-[#1B382B]',
    outline: 'bg-transparent border border-[#E8E3D6]',
  };

  const interactiveStyles = interactive
    ? 'transition-all duration-200 hover:border-[#0F6B4A]/50 hover:shadow-xs hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={`rounded-xl p-6 ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
