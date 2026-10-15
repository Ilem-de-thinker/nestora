import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return items.filter((item) => item.defaultOpen).map((item) => item.id);
  });

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-[#E8E3D6] border-y border-[#E8E3D6] ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left group cursor-pointer"
            >
              <div className="pr-4">
                <span className="text-base font-semibold text-[#0B1F17] group-hover:text-[#0F6B4A] transition-colors">
                  {item.title}
                </span>
                {item.subtitle && (
                  <p className="text-xs text-[#64736B] mt-0.5">{item.subtitle}</p>
                )}
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#64736B] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#0F6B4A]' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="mt-3 text-sm text-[#2D3A34] leading-relaxed pr-6 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
