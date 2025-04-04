import Image from 'next/image';
import AnimationBlur from '../features/animation/blur';

export function MainPagePromoBackground() {
  return (
    <div className="absolute -z-10 w-[1000px] h-[1000px] -bottom-[250px] left-1/2 translate-x-[-50%] md:w-[2000px] md:h-[2000px] md:-bottom-[800px] xl:w-[3000px] xl:h-[3000px] xl:-bottom-[1580px]">
      <AnimationBlur
        duration={2}
        isOnce={true}
      >
        <Image
          alt="liquid background"
          src="/images/green-liquid-bg.png"
          width={4000}
          height={4000}
          quality={100}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            zIndex: '-12',
          }}
        />
      </AnimationBlur>
    </div>
  );
}
