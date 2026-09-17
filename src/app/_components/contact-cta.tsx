'use client';

import { useLanguage } from '@/lib/language';

export default function ContactCta() {
  const { copy } = useLanguage();

  return (
    <section className="container pb-[100px] text-center">
      <a
        href="mailto:contact@itering.com"
        className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-gradient-to-r from-[#0000C8] to-[#6AC6FF] px-[38px] text-[18px] font-medium tracking-[2px] text-white uppercase shadow-[0_0_42px_rgba(45,122,255,0.45)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_58px_rgba(106,198,255,0.55)]"
      >
        {copy.contact.cta}
      </a>
    </section>
  );
}
