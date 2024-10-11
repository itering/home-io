'use client';
import React, { useCallback, useEffect, forwardRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

import { cn } from '@/lib/utils';

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  style?: React.CSSProperties;
}

export const MagicCard = forwardRef<HTMLDivElement, MagicCardProps>(
  (
    {
      children,
      className,
      gradientSize = 200,
      gradientColor = '#262626',
      gradientOpacity = 0.8,
      style
    }: MagicCardProps,
    ref
  ) => {
    const mouseX = useMotionValue(-gradientSize);
    const mouseY = useMotionValue(-gradientSize);

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      },
      [mouseX, mouseY]
    );

    const handleMouseLeave = useCallback(() => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }, [mouseX, mouseY, gradientSize]);

    useEffect(() => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }, [mouseX, mouseY, gradientSize]);

    return (
      <div
        onMouseMove={handleMouseMove}
        ref={ref}
        onMouseLeave={handleMouseLeave}
        className={cn('group relative', className)}
        style={style}
      >
        <div className="relative z-10">{children}</div>
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
            opacity: gradientOpacity
          }}
        />
      </div>
    );
  }
);

MagicCard.displayName = 'MagicCard';
