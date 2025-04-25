'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from 'lenis';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';

// Пример данных для карточек
const cards = [
  { id: 1, title: 'Карточка 1', content: 'Содержимое карточки 1' },
  { id: 2, title: 'Карточка 2', content: 'Содержимое карточки 2' },
  { id: 3, title: 'Карточка 3', content: 'Содержимое карточки 3' },
  { id: 4, title: 'Карточка 4', content: 'Содержимое карточки 4' },
  { id: 5, title: 'Карточка 5', content: 'Содержимое карточки 5' },
];

gsap.registerPlugin(ScrollTrigger);

export default function OverlappingCards() {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const lenisRef = useRef<Lenis>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cardsWrappers = gsap.utils.toArray('.overlap-card-wrapper');
    const cards = gsap.utils.toArray('.overlap-card');

    cardsWrappers.forEach((wrapper, i) => {
      const card = cards[i];
      let scale = 1;
      let rotation = 0;
      if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i;
        rotation = -10;
      }
      gsap.to(card as HTMLElement, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper as HTMLElement,
          start: `top ${60 + 10 * i}`,
          end: 'bottom 550',
          endTrigger: '.overlap-wrapper',
          scrub: true,
          pin: wrapper as HTMLElement,
          pinSpacing: false,
          markers: {
            indent: 100 * i,
            startColor: '#0ae448',
            endColor: '#fec5fb',
            fontSize: '14px',
          },
          id: (i + 1).toString(),
        },
      });
    });
  }, []);

  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      <div className={styles.spacer} />
      <div className={cn(styles.wrapper, 'overlap-wrapper')}>
        <div className={styles.cards}>
          <div className={cn('overlap-card-wrapper', styles.cardWrapper)}>
            <div className={cn(styles.card, 'overlap-card bg-amber-200')}>Card 1</div>
          </div>
          <div className={cn('overlap-card-wrapper', styles.cardWrapper)}>
            <div className={cn(styles.card, 'overlap-card bg-amber-400')}>Card 2</div>
          </div>
          <div className={cn('overlap-card-wrapper', styles.cardWrapper)}>
            <div className={cn(styles.card, 'overlap-card bg-amber-600')}>Card 3</div>
          </div>
          <div className={cn('overlap-card-wrapper', styles.cardWrapper)}>
            <div className={cn(styles.card, 'overlap-card bg-amber-800')}>Card 4</div>
          </div>
        </div>
      </div>
      <div className={styles.spacer} />
    </div>
  );
}
