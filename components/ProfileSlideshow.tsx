'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const photos = [
  { src: '/me1.JPG', position: '50% 45%' },
  { src: '/me2.jpeg', position: '35% 50%' },
  { src: '/me3.jpeg', position: '60% 50%' },
  { src: '/me4.jpeg', position: '50% 50%' },
];

export default function ProfileSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(photos.map(() => false));

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const respectPreference = () => {
      setPrefersReducedMotion(preference.matches);
    };
    respectPreference();
    preference.addEventListener('change', respectPreference);
    return () => preference.removeEventListener('change', respectPreference);
  }, []);

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % photos.length;
    if (prefersReducedMotion || !loaded[activeIndex] || !loaded[nextIndex]) return;
    const timer = window.setTimeout(() => setActiveIndex(nextIndex), 4000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, prefersReducedMotion, loaded]);

  return (
    <div
      className="profile-slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of Gyusam Chang"
    >
      <div className="profile-photo" aria-live="off">
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
    </div>
  );
}
