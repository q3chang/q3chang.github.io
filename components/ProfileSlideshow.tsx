'use client';

import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const photos = [
  { src: '/me1.JPG', position: '50% 45%' },
  { src: '/me2.jpeg', position: '35% 50%' },
  { src: '/me3.jpeg', position: '60% 50%' },
  { src: '/me4.jpeg', position: '50% 50%' },
];

export default function ProfileSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(photos.map(() => false));
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const respectPreference = () => {
      if (preference.matches) setIsPaused(true);
    };
    respectPreference();
    preference.addEventListener('change', respectPreference);
    return () => preference.removeEventListener('change', respectPreference);
  }, []);

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % photos.length;
    if (isPaused || isHovered || !loaded[activeIndex] || !loaded[nextIndex]) return;
    const timer = window.setTimeout(() => setActiveIndex(nextIndex), 4000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, isHovered, loaded]);

  return (
    <div
      className="profile-slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of Gyusam Chang"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={(event) => {
        if (!toggleRef.current?.contains(event.target)) setIsPaused(true);
      }}
    >
      <div className="profile-photo" aria-live={isPaused ? 'polite' : 'off'}>
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className={`profile-slide${index === activeIndex ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${photos.length}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={photo.src}
              alt="Gyusam Chang"
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : 'eager'}
              sizes="(max-width: 700px) 190px, 240px"
              style={{ objectPosition: photo.position }}
              onLoad={() => setLoaded((current) => current.map((ready, i) => ready || i === index))}
            />
          </div>
        ))}
      </div>
      <div className="profile-slideshow-controls">
        <button
          ref={toggleRef}
          type="button"
          aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          title={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          onClick={() => setIsPaused((paused) => !paused)}
        >
          {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        </button>
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            disabled={!loaded[index]}
            aria-label={`Show photo ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => {
              setActiveIndex(index);
              setIsPaused(true);
            }}
          >
            <span className="profile-slide-dot" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
