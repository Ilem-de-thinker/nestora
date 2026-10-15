import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  required,
  rows = 4,
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={textareaId} className="block text-xs font-semibold text-[#0B1F17] tracking-tight">
          {label} {required && <span className="text-[#0F6B4A]">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        required={required}
        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#0B1F17] placeholder:text-[#8E9B93] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B4A]/30 focus:border-[#0F6B4A] ${
          error ? 'border-red-500 bg-red-50/20' : 'border-[#D4CDBC]'
        } ${className}`}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#64736B]">{helperText}</p>
      ) : null}
    </div>
  );
};
