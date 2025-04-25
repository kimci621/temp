import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { useState } from 'react';
import { SectionTag } from '@/components/ui/section-tag';
import { MainHelpsSectionTabContent } from './tab-content';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import TypographyAnimated from '@/components/ui/typography-animated';
import dynamic from 'next/dynamic';

const DynamicDemoDialog = dynamic(() => import('../../get-demo-dialog').then((c) => c.GetDemoDialog), {});

export function MainHelps() {
  const tabItems = [
    { label: 'Рекрутер', name: 'recruiter' },
    { label: 'Руководитель подбора', name: 'hiringManager' },
    { label: 'Собственник', name: 'owner' },
    { label: 'Заказчик', name: 'client' },
  ];

  const tabsContentItems = [
    {
      title: 'Решаем задачи каждого участника процесса подбора',
      progress: 0,
      imgPath: '/images/optimized/tabs/carousel-liquid-1.webp',
      bgStyle: 'bg-carousel-liquid-1',
      link: '/',
      value: 'recruiter',
      label: 'Рекрутер',
      list: [
        'Упорядочим хаос в базе резюме. Организуем мгновенный доступ и систематизацию.',
        'Сократим сроки подбора с помощью автоматизации, \n' + 'чтобы вы точно выполнили KPI',
        'Наши специалисты на связи: подскажем ответ \n' + 'на любой вопрос по работе с системой',
      ],
    },
    {
      title: 'Решаем задачи каждого участника процесса подбора',
      progress: 25,
      imgPath: '/images/optimized/tabs/carousel-liquid-2.webp',
      bgStyle: 'bg-carousel-liquid-2',
      link: '/',
      value: 'hiringManager',
      label: 'Руководитель подбора',
      list: [
        'Настроим систему быстро, адаптируем под ваши задачи, \n' +
          'чтобы рекрутеры быстро втянулись и остались довольны.',
        'Боитесь проблем с интеграцией? Совместим все с текущими \n' + 'HR-процессами без головной боли.',
        'Нет объективной картины эффективности? Интуитивная аналитика покажет все успехи и точки роста отдела.',
      ],
    },
    {
      title: 'Решаем задачи каждого участника процесса подбора',
      progress: 50,
      imgPath: '/images/optimized/tabs/carousel-liquid-3.webp',
      bgStyle: 'bg-carousel-liquid-3',
      link: '/',
      value: 'owner',
      label: 'Собственник',
      list: [
        'Сократим срок закрытия вакансий. \n' +
          'Больше не придется терять деньги из-за долгих месяцев поиска сотрудников.',
        'Непонятно, как и насколько хорошо работают рекрутеры? \n' +
          'Автоматизация сделает процесс прозрачным для вас.',
        'Встроенный ИИ возьмет часть задач на себя, повышая продуктивность команды.',
      ],
    },
    {
      title: 'Решаем задачи каждого участника процесса подбора',
      progress: 100,
      imgPath: '/images/optimized/tabs/carousel-liquid-4.webp',
      bgStyle: 'bg-carousel-liquid-4',
      link: '/',
      value: 'client',
      label: 'Заказчик',
      list: [
        'Неясно, что происходит с поиском кандидатов? \n' + 'Сделаем процесс прозрачным: от первого резюме до оффера.',
        'Оставляйте заявку на подбор через удобную форму и следите за прогрессом по вакансии',
        'Все кандидаты, взятые на вакансию, у вас в доступе. Вы точно не упустите ценные кадры!',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState('recruiter');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  return (
    <div className={'flex flex-col items-center'}>
      <SectionTag
        emoji={'🔗'}
        name={'Надежность каждого звена'}
        className={'mb-6'}
      />

      <TypographyAnimated
        variant={'h1-medium'}
        animationAmount={0.2}
        animationDuration={0.75}
        className={'mb-20 text-center'}
      >
        Huntlee поможет <br />
        достигнуть бизнес-целей
      </TypographyAnimated>

      <Tabs
        value={activeTab}
        onValueChange={(value) => handleTabChange(value)}
        className={'w-full hidden xl:block'}
      >
        <div className={'relative'}>
          <div className={'z-2 absolute top-[208px] left-10'}>
            <TabsList className={'bg-[#FFFFFF99] rounded-2xl p-1 h-fit'}>
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.name}
                  value={tab.name}
                  className={'border-none !shadow-none p-0 cursor-pointer'}
                  onMouseEnter={() => {
                    handleTabChange(tab.name);
                  }}
                >
                  <Button
                    variant={activeTab === tab.name ? 'white' : 'ghost'}
                    rounded={'default'}
                    asChild
                  >
                    <Typography
                      variant={'button'}
                      className={'text-(--text-light)'}
                    >
                      {tab.label}
                    </Typography>
                  </Button>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className={'relative z-1'}>
            {tabsContentItems.map((tabContent) => (
              <TabsContent
                value={tabContent.value}
                key={tabContent.value}
              >
                <MainHelpsSectionTabContent
                  title={tabContent.title}
                  progress={tabContent.progress}
                  imgPath={tabContent.imgPath}
                  bgStyle={tabContent.bgStyle}
                  link={tabContent.link}
                  list={tabContent.list}
                />
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>

      <Typography
        variant={'h3-medium'}
        className={'xl:hidden mb-6 text-center'}
      >
        Решаем задачи каждого участника процесса подбора
      </Typography>

      <ScrollArea className="xl:hidden w-full ">
        <div className={'grid gap-2 grid-flow-col auto-cols-[270px] md:auto-cols-[300px]'}>
          {tabsContentItems.map((tabContent) => (
            <MainHelpsSectionTabContent
              key={tabContent.value}
              title={tabContent.title}
              progress={tabContent.progress}
              imgPath={tabContent.imgPath}
              bgStyle={tabContent.bgStyle}
              link={tabContent.link}
              list={tabContent.list}
              label={tabContent.label}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <DynamicDemoDialog
        className={'xl:hidden mt-10'}
        triggerButton={
          <Button
            variant={'secondary'}
            className={'w-fit'}
            asChild
          >
            <Typography
              variant={'button'}
              className={'text-(--text-light)'}
            >
              Узнать больше
            </Typography>
          </Button>
        }
      />
    </div>
  );
}
