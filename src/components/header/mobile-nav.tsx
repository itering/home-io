'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const getScrollbarWidth = useCallback(() => {
    return window.innerWidth - document.documentElement.clientWidth;
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, getScrollbarWidth]);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="size-[34px] md:hidden">
        <Image src="/images/hamburger.svg" alt="open menu" width={34} height={34} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 flex h-full w-full flex-col items-center justify-center gap-[90px] bg-transparent p-[10px] shadow-xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                {/* <X size={24} /> */}
                <Image src="/images/close.svg" alt="close menu" width={34} height={34} />
              </button>

              <nav>
                <ul className="space-y-[90px]">
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0 }}
                    className="text-center"
                  >
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <Image src="/images/logo.svg" alt="logo" width={170.961} height={26} />
                    </Link>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                  >
                    <Link
                      href="/"
                      className="block text-[16px] font-semibold leading-[24px] tracking-[1px] text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      HOME
                    </Link>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <Link
                      href="/work"
                      className="block text-[16px] font-semibold leading-[24px] tracking-[1px] text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      WORK
                    </Link>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <Link
                      href="https://itering-io.breezy.hr/"
                      className="block text-[16px] font-semibold leading-[24px] tracking-[1px] text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      CAREERS
                    </Link>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <Link
                      href="mailto:contact@itering.io"
                      className="block text-[16px] font-semibold leading-[24px] tracking-[1px] text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      CONTACT US
                    </Link>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
