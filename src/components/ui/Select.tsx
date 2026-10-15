import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  helperText?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  helperText,
  id,
  className = '',
  required,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={selectId} className="block text-xs font-semibold text-[#0B1F17] tracking-tight">
          {label} {required && <span className="text-[#0F6B4A]">*</span>}
        </label>
      )}
      <select
        id={selectId}
        required={required}
        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#0B1F17] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B4A]/30 focus:border-[#0F6B4A] cursor-pointer ${
          error ? 'border-red-500 bg-red-50/20' : 'border-[#D4CDBC]'
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#64736B]">{helperText}</p>
      ) : null}
    </div>
  );
};
