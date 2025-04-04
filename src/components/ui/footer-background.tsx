import Image from 'next/image';

export function FooterBackground() {
  return (
    <div className="absolute -z-10 w-full h-full">
      <Image
        alt="footer background"
        src="/images/3d-colorful-abstract-shape-on-black-background.png"
        width={1728}
        height={1117}
        style={{
          objectFit: 'fill',
          filter: 'blur(300px)',
          width: '110%',
          height: '110%',
          zIndex: '-12',
        }}
      />

      <div className="absolute left-0 top-0 w-full h-full bg-[#262727] -z-[11]" />
    </div>
  );
}
