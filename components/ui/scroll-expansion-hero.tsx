'use client';

import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  useCallback,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title = 'Prajna Quest Research Solutions',
  date = 'Doctoral Research Platform',
  scrollToExpand = 'Scroll to explore the suite',
  textBlend = false,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
  }, []);

  const updateScrollProgress = useCallback((delta: number) => {
    setScrollProgress((prev) => {
      const newProgress = Math.min(Math.max(prev + delta, 0), 1);
      if (newProgress >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (newProgress < 0.75) {
        setShowContent(false);
        setMediaFullyExpanded(false);
      }
      return newProgress;
    });
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && window.scrollY > 0) return;
      if (e.deltaY < 0 && window.scrollY === 0) {
        updateScrollProgress(-0.05);
      } else if (e.deltaY > 0 && scrollProgress < 1) {
        updateScrollProgress(0.05);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;

      if (mediaFullyExpanded && window.scrollY > 0) return;
      if (deltaY < 0 && window.scrollY === 0) {
        updateScrollProgress(-0.05);
      } else if (deltaY > 0 && scrollProgress < 1) {
        updateScrollProgress(0.05);
      }
      setTouchStartY(touchCurrentY);
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, updateScrollProgress]);

  const mediaWidth = 300 + scrollProgress * (typeof window !== 'undefined' ? window.innerWidth - 300 : 900);
  const mediaHeight = 400 + scrollProgress * (typeof window !== 'undefined' ? window.innerHeight - 400 : 500);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-slate-950 overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${bgImageSrc})`,
          opacity: 0.35 - scrollProgress * 0.2,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 - scrollProgress * 1.5, y: 0 }}
          className="max-w-3xl mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-4">
            {date}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            {scrollToExpand}
          </p>
        </motion.div>

        <div
          ref={mediaRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 transition-all duration-150 ease-out"
          style={{
            width: `${mediaWidth}px`,
            maxWidth: '95vw',
            height: `${mediaHeight}px`,
            maxHeight: '80vh',
          }}
        >
          {mediaType === 'video' ? (
            <video
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={mediaSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <AnimatePresence>
          {showContent && children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="w-full mt-16 max-w-5xl text-left"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
