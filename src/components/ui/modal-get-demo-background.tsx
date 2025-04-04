import Image from 'next/image';

interface ModalGetDemoBackgroundProps {
  className?: string;
}

export function ModalGetDemoBackground({ className = '' }: ModalGetDemoBackgroundProps) {
  return (
    <div className={className}>
      <div className={'relative w-full h-full'}>
        <Image
          alt="modal background"
          src="/images/modal-bg.png"
          width={1540}
          height={1540}
          style={{
            objectFit: 'fill',
            filter: 'blur(30px)',
            zIndex: '-1',
            width: '829px',
            height: '636px',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
        <Image
          alt="modal background"
          src="/images/modal-bg.png"
          width={1540}
          height={1540}
          style={{
            objectFit: 'fill',
            zIndex: '1',
            width: '829px',
            height: '636px',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
      </div>
    </div>
  );
}
