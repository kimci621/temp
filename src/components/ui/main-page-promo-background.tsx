import Image from 'next/image';

export function MainPagePromoBackground() {
  return (
    <Image
      alt="liquid background"
      src="/images/optimized/green-liquid/3d-abstract-emerald-green-wavy-shape-2-1.webp"
      width={1680}
      height={3011}
      quality={100}
      priority
      style={{
        objectFit: 'cover',
        zIndex: '-12',
      }}
      className={'absolute top-[290px] md:top-[100px] xl:top-0 -z-10 w-full h-fit left-1/2 translate-x-[-50%]'}
    />
  );
}
