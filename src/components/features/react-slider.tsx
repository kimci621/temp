'use client';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Core, { type CoreConfig } from 'smooothy';
import gsap from 'gsap';

export interface SliderProps {
  children?: React.ReactNode;
  config?: Partial<CoreConfig>;
}

/** hook */
export function useSmooothy(config: Partial<CoreConfig> = {}) {
  const sliderRef = useRef<HTMLElement | null>(null);
  const [slider, setSlider] = useState<Core | null>(null);

  const refCallback = (node: HTMLElement | null) => {
    if (node && !slider) {
      const instance = new Core(node, config);
      gsap.ticker.add(instance.update.bind(instance));
      setSlider(instance);
    }
    sliderRef.current = node;
  };

  useEffect(() => {
    return () => {
      if (slider) {
        gsap.ticker.remove(slider.update.bind(slider));
        slider.destroy();
      }
    };
  }, [slider]);

  return { ref: refCallback, slider };
}

export interface ReactSliderRef {
  goToIndex: (idx: number) => void;
}

/** component */
export const ReactSlider = forwardRef(({ children, config }: SliderProps, ref) => {
  const smooothy = useSmooothy(config);

  const goToIndex = (n: number) => {
    if (smooothy.slider) {
      smooothy.slider.goToIndex(n);
    }
  };

  // Экспортируем наружу только нужные методы
  useImperativeHandle(ref, () => ({
    goToIndex,
  }));

  return (
    <div
      className="py-sm pb-xl flex w-screen overflow-x-hidden px-[calc(50%-45vw)] sm:px-[calc(50%-42vw)] md:px-[calc(50%-15vw)] focus:outline-none"
      ref={smooothy.ref}
    >
      {/*  Those classes need for children: w-[80vw] shrink-0 flex items-center justify-center */}
      {children}
    </div>
  );
});
