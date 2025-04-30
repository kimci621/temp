export const businessCases = [
  {
    id: 'small-case',
    title: 'Для малого бизнеса и нерегулярного найма',
    subtitle: 'Простота, доступная цена и экономия времени',
    items: [
      {
        title: 'Быстрый старт',
        description: 'Старт за 1 день: быстрая настройка',
      },
      {
        title: 'Упрощённый функционал',
        description: 'Только нужные инструменты без лишнего',
      },
      {
        title: 'Единая база кандидатов',
        description: 'Единая база кандидатов для повторного поиска',
      },
      {
        title: 'Автоматизация рутинных задач',
        description: 'Автоматизация писем и уведомлений',
      },
      {
        title: 'Экономия бюджета',
        description: 'Платите лишь за дни активного поиска',
      },
    ],
    descriptionTitle: 'Скорость',
    description: 'Huntlee освобождает рекрутерам до 4 часов в день. Сокращает затраты на подбор персонала на 40%',
    descriptionStyles: {
      border: '1px solid #5B73EF',
      background: 'linear-gradient(90deg, #5B73EF 0%, #7CCCEF 100%)',
    },
    descriptionBgPath: 'grid-bottom-bg-1',
    bgPath: '3d-abstract-light-blue-matte-shape-wavy-3',
  },
  {
    id: 'medium-case',
    title: 'Для среднего бизнеса',
    subtitle: 'Максимальная прозрачность и контроль',
    items: [
      {
        title: 'Гибкие настройки',
        description: 'Гибкие воронки найма под разные отделы',
      },
      {
        title: 'Онлайн аналитика',
        description: 'Живые дашборды и метрики эффективности',
      },
      {
        title: 'Удобные интеграции',
        description: 'Интеграции с job-бордами и мессенджерами',
      },
      {
        title: 'Командная работа',
        description: 'Совместная работа с ролями и правами',
      },
      {
        title: 'История кандидата',
        description: 'Сквозная история кандидата для оценки качества',
      },
    ],
    descriptionTitle: 'Точность',
    description: 'Внедрение Huntlee сократило затраты на рекрутинг на 30 % за счёт оптимизации воронки и аналитики',
    descriptionStyles: {
      border: '1px solid #46406C',
      background: 'linear-gradient(270deg, #A6A1B6 0%, #46406C 100%)',
    },
    descriptionBgPath: 'grid-bottom-bg-2',
    bgPath: 'abstract-light-blue-wavy-striped-shape',
  },
  {
    id: 'large-case',
    title: 'Для крупного бизнеса',
    subtitle: 'Масштабируемость и поддержка сложных процессов',
    items: [
      {
        title: 'Массовый подбор',
        description: 'Массовый приём: сотни резюме в день',
      },
      {
        title: 'Глубокая аналитика',
        description: 'Прогнозы и детальные отчёты по найму',
      },
      {
        title: 'Стабильность системы',
        description: 'Микросервисная архитектура — работа без сбоев',
      },
      {
        title: 'Многоуровневый доступ',
        description: 'Многоуровневые права для всех ролей',
      },
      {
        title: 'Сложные воронки',
        description: 'Кастомные воронки под сложные процессы',
      },
    ],
    descriptionTitle: 'Эффективность',
    description: 'Система помогла обработать 5 000 + откликов за месяц и нанять 50 сотрудников',
    descriptionStyles: {
      border: '1px solid #278CA2',
      background: 'linear-gradient(90deg, #278CA2 0%, #F36C70 100%)',
    },
    descriptionBgPath: 'grid-bottom-bg-3',
    bgPath: '3d-wavy-abstract-orange-and-blue-smooth-shape-3',
  },
] as const;

/**
 * Тип, представляющий массив бизнес-кейсов, экспортируемых из businessCases
 */
export type BusinessCase = (typeof businessCases)[number];
export type BusinessCases = typeof businessCases;
