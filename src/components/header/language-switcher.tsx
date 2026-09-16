'use client';

import { useState } from 'react';
import { languages, useLanguage, type Language } from '@/lib/language';
import { cn } from '@/lib/utils';

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.6 13.6 0 0 1 0 18" />
      <path d="M12 3a13.6 13.6 0 0 0 0 18" />
    </svg>
  );
}

export default function LanguageSwitcher({
  variant = 'desktop'
}: {
  variant?: 'desktop' | 'mobile';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, copy } = useLanguage();

  const handleSelect = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={copy.nav.language}
        aria-expanded={isOpen}
        className={cn(
          'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] text-white/80 transition duration-300 hover:border-white/45 hover:text-white',
          variant === 'desktop' ? 'size-[42px]' : 'size-[52px]'
        )}
        onClick={() => setIsOpen((current) => !current)}
      >
        <GlobeIcon className={variant === 'desktop' ? 'size-[20px]' : 'size-[24px]'} />
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 min-w-[150px] overflow-hidden rounded-[8px] border border-white/15 bg-black/95 p-[6px] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md',
            variant === 'desktop' ? 'right-0 mt-[12px]' : 'left-1/2 mt-[16px] -translate-x-1/2'
          )}
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              aria-current={language === item.code ? 'true' : undefined}
              className={cn(
                'flex w-full items-center justify-between rounded-[6px] px-[12px] py-[10px] text-left text-[14px] leading-[20px] tracking-[0.6px] transition duration-200',
                language === item.code
                  ? 'bg-white text-black'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              )}
              onClick={() => handleSelect(item.code)}
            >
              <span>{item.label}</span>
              <span className="text-[12px] opacity-70">{item.shortLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
