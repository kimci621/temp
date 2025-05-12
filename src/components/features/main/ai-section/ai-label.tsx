import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import AnimationBlur from '../../animation/blur';
import { AnimationOpacity } from '../../animation/opacity';

interface AiLabelsProps {
  className?: string;
}

function LabelIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={'bg-(--fill-white) rounded-xl size-16 min-w-16 min-h-16 flex items-center justify-center z-2'}>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        loading="lazy"
        quality={100}
        className={'size-10'}
      />
    </div>
  );
}

function LabelItem({ labelPosition }: { labelPosition: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' }) {
  const innerStyles =
    'relative rounded-[16px] md:rounded-[20px] p-2 md:p-3 border border-(--fill-white) flex items-center gap-4 md:gap-6 relative';

  const blurStyle = 'ai-label-blur bg-[#FFFFFF66]';

  const widths = {
    topLeft: 'w-full md:w-[482px] xl:w-[583px]',
    topRight: 'w-full md:w-[261px] xl:w-[368px]',
    bottomLeft: 'w-full md:w-[300px] xl:w-[368px]',
    bottomRight: 'w-full md:w-[558px] xl:w-[695px]',
  };

  const positions = {
    topLeft: 'md:absolute top-[23%] left-[0%] md:top-[15%] md:left-[15%] xl:top-[20%] xl:left-[10%]',
    topRight: 'md:absolute top-[37%] right-[-5%] md:top-[37%] md:right-[5%] xl:top-[42%] xl:right-[-5%]',
    bottomLeft: 'md:absolute bottom-[38%] left-[5%] md:bottom-[40%] md:left-[4%] xl:bottom-[35%] xl:left-[0%]',
    bottomRight: 'md:absolute bottom-[20%] right-[-10%] md:bottom-[20%] md:right-[5%] xl:bottom-[15%] xl:right-[-12%]',
  };

  const labelIcon = {
    topLeft: '/HeadCircuit.svg',
    topRight: '/FileMagnifyingGlass.svg',
    bottomLeft: '/Funnel.svg',
    bottomRight: '/UserCirclePlus.svg',
  };

  const labelText = {
    topLeft: 'Транскрибация и составление краткого содержания собеседований',
    topRight: 'Поиск по внутренней базе',
    bottomLeft: 'ИИ-фильтр откликов',
    bottomRight: 'Добавление резюме в базу из файлов формата docx, doc, pdf, c разнесением по полям',
  };

  const labelVector = {
    topLeft: '/vector/top-left.svg',
    topRight: '/vector/top-right.svg',
    bottomLeft: '/vector/bottom-left.svg',
    bottomRight: '/vector/bottom-right.svg',
  };

  const labelVectorPosition = {
    topLeft: 'hidden md:inline-block absolute top-[100%] left-[48px]',
    topRight: 'hidden md:inline-block absolute top-[100%] left-[-52px]',
    bottomLeft: 'hidden md:inline-block absolute bottom-[100%] left-[44px]',
    bottomRight: 'hidden md:inline-block absolute bottom-[100%] left-[48px]',
  };

  const labelVectorWidth = {
    topLeft: 272,
    topRight: 105,
    bottomLeft: 460,
    bottomRight: 69,
  };

  const labelVectorHeight = {
    topLeft: 96,
    topRight: 39,
    bottomLeft: 50,
    bottomRight: 93,
  };

  const fullClasses = cn(widths[labelPosition], positions[labelPosition]);

  return (
    <div className={fullClasses}>
      <AnimationOpacity
        delay={1}
        duration={1}
      >
        <div className={innerStyles}>
          <LabelIcon
            src={labelIcon[labelPosition]}
            alt="label icon"
          />

          <Typography
            variant={'h4-medium'}
            className={cn('text-(--text-light)', 'z-2')}
          >
            {labelText[labelPosition]}
          </Typography>

          <Image
            src={labelVector[labelPosition]}
            alt="bg image"
            width={labelVectorWidth[labelPosition]}
            height={labelVectorHeight[labelPosition]}
            loading="lazy"
            quality={100}
            className={cn(labelVectorPosition[labelPosition], 'hidden md:inline-block z-2')}
          />

          <div
            className={cn(
              'absolute top-0 left-0 w-full h-full rounded-[14px] md:rounded-[18px] border border-[transparent] z-0 ai-label-blur',
            )}
          />
        </div>
      </AnimationOpacity>
    </div>
  );
}

export function AiLabels({ className }: AiLabelsProps) {
  return (
    <div
      className={cn('relative w-full h-full flex flex-col justify-center items-center gap-4 px-4 md:px-0', className)}
    >
      <LabelItem labelPosition="topLeft" />
      <LabelItem labelPosition="topRight" />
      <LabelItem labelPosition="bottomLeft" />
      <LabelItem labelPosition="bottomRight" />
    </div>
  );
}
