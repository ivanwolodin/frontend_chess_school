import { Media, TableColumn } from 'react-data-table-component';

import {
  InfoTinyCardProps,
  SidebarMainMenuItems,
  NewsCardProps,
  TeacherCardProps,
  WeAreTrustedByProps,
  AttendanceData,
  PersonalTableRowData,
} from './interfaces';

export const headerItems: string[] = [
  'ГЛАВНАЯ',
  'НОВОСТИ',
  'СОРЕВНОВАНИЯ',
  'О ШКОЛЕ',
  'ГРАФИК',
  'ПОСТУПЛЕНИЕ',
  'ЛИЧНЫЙ КАБИНЕТ',
];

export const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const tinyCardsData: InfoTinyCardProps[] = [
  { src: require('../assets/tiny_cards/competitions.jpg'), alt: 'faq' },
  { src: require('../assets/tiny_cards/inside_s.jpg'), alt: 'basic' },
  {
    src: require('../assets/tiny_cards/po.jpeg'),
    alt: 'Polina',
  },
  { src: require('../assets/tiny_cards/oksana.jpeg'), alt: 'oksana' },
  { src: require('../assets/tiny_cards/competitions.jpg'), alt: 'gallery' },
  { src: require('../assets/tiny_cards/inside_s.jpg'), alt: 'inside' },
];

export const newsData: NewsCardProps[] = [
  {
    title: 'Расписание на июнь 2024',
    src: 'https://шахматыпермь.рф/static/images/news/Schedule_summer_2024%20.png',
    text: 'Приглашаем на летние занятия! С графиком работы можно ознакомиться по ссылке',
    date: '06.07.2024',
  },
  {
    title: 'Режим работы на майские праздники 2024 года',
    src: 'https://шахматыпермь.рф/static/images/news/May9_2024.png',
    text: 'Впереди майские праздники, одни из самых длинных и любимых всеми весенних выходных. Мы в праздничные дни также будем отдыхать, но:',
    date: '05.07.2024',
  },
  {
    title: 'Поздравляем наших учеников!',
    src: 'https://шахматыпермь.рф/static/images/news/administration.jpg',
    text: 'В начале года состоялись Открытые Новогодние турниры по классическим шахматам. Наши ученики успешно проявили себя в первых турнирах в этом году!',
    date: '05.07.2024',
  },
  {
    title: '4',
    src: 'https://шахматыпермь.рф/static/images/news/Schedule_summer_2024%20.png',
    text: 'Приглашаем на летние занятия! С графиком работы можно ознакомиться по ссылке',
    date: '06.07.2024',
  },
  {
    title: '5',
    src: 'https://шахматыпермь.рф/static/images/news/May9_2024.png',
    text: 'Впереди майские праздники, одни из самых длинных и любимых всеми весенних выходных. Мы в праздничные дни также будем отдыхать, но:',
    date: '05.07.2024',
  },
  {
    title: '6',
    src: 'https://шахматыпермь.рф/static/images/news/administration.jpg',
    text: 'В начале года состоялись Открытые Новогодние турниры по классическим шахматам. Наши ученики успешно проявили себя в первых турнирах в этом году!',
    date: '05.07.2024',
  },
];

export const teachersData: TeacherCardProps[] = [
  {
    name: 'Терехин Анатолий Николаевич',
    src: require('../assets/teachers_images/AN_2.jpeg'),
    position: 'Автор Программы ',
    alt: 'Автор',
  },
  {
    name: 'Антонова Оксана Павловна',
    src: require('../assets/teachers_images/Oksana.jpg'),
    position: 'Исполнительный директор',
    alt: 'Директор',
  },
  {
    name: 'Володина Елена Владимировна',
    src: require('../assets/teachers_images/EV.jpeg'),
    position: 'Администратор ',
    alt: 'Администратор',
  },
  {
    name: 'Бахарев Андрей Иванович',
    src: require('../assets/teachers_images/Andrey.jpg'),
    position: 'Старший тренер',
    alt: 'Старший',
  },
  {
    name: 'Громов Даниил Александрович',
    src: require('../assets/teachers_images/Daniil.jpeg'),
    position: 'Тренер по шахматам',
    alt: 'Тренер',
  },
  {
    name: 'Анисимов Всеволод Владимирович',
    src: require('../assets/teachers_images/Seva.png'),
    position: 'Тренер по шахматам',
    alt: 'Тренер',
  },
  {
    name: 'Тиунова Татьяна Леонидовна',
    src: require('../assets/teachers_images/TL.jpg'),
    position: 'Педагог-психолог',
    alt: 'Психолог',
  },
  {
    name: 'Володин Иван Валерьевич',
    src: require('../assets/teachers_images/IV.jpeg'),
    position: 'Программист',
    alt: 'Программист',
  },
];

export const partnersData: WeAreTrustedByProps[] = [
  {
    name: 'Education Institute',
    src: require('../assets/our_partners_logos/education_dev_institute.png'),
    text: 'Обучение педагогов',
  },
  {
    name: 'Delovar',
    src: require('../assets/our_partners_logos/delovar.png'),
    text: 'Корпоративное обучение',
  },
  {
    name: 'Ped',
    src: require('../assets/our_partners_logos/perm_ped.png'),
    text: 'Обучение педагогов',
  },
  {
    name: 'PSU',
    src: require('../assets/our_partners_logos/psu.png'),
    text: 'Лекции и сеанс',
  },
  {
    name: 'Parma Tech',
    src: require('../assets/our_partners_logos/Logo_Parmalogica.png'),
    text: 'Корпоративный турнир',
  },
  {
    name: 'Advocates',
    src: require('../assets/our_partners_logos/advocates.gif'),
    text: 'Корпоративный турнир',
  },
  {
    name: 'Sibur',
    src: require('../assets/our_partners_logos/sibur.png'),
    text: 'Корпоративное обучение',
  },
  {
    name: 'Lukoil',
    src: require('../assets/our_partners_logos/lukoil_inzhiniring.jpeg'),
    text: 'Корпоративное обучение',
  },
];

export const TeachersMenuItems: SidebarMainMenuItems[] = [
  { icon: 'bar-chart', label: 'Дэшборд', disabled: true },
  { icon: 'calendar', label: 'Расписание', disabled: false },
  { icon: 'book-2', label: 'Домашние задания', disabled: true },
  { icon: 'service', label: 'Персональные данные', disabled: false },
];

export const StudentsMenuItems: SidebarMainMenuItems[] = [
  { icon: 'bar-chart', label: 'Обратная связь', disabled: true },
  { icon: 'calendar', label: 'Расписание', disabled: false },
  { icon: 'book-2', label: 'Домашние задания', disabled: true },
  { icon: 'service', label: 'Оплаты', disabled: false },
];

export const SuperAdminMenuItems: SidebarMainMenuItems[] = [
  { icon: 'bar-chart', label: 'Дэшборд', disabled: false },
  { icon: 'calendar', label: 'Расписание', disabled: false },
  { icon: 'book-2', label: 'Занести ученика', disabled: false },
  { icon: 'service', label: 'Статистика оплат', disabled: false },
  { icon: 'book-2', label: 'Ответить на вопрос', disabled: false },
  { icon: 'ink-bottle', label: 'Добавить новость', disabled: false },
];

export const attendanceData: AttendanceData = {
  АТ1: {
    Июнь: {
      'Володин Иван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильин Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотина Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Володин ddИван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильин dddddВова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотинаd Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Володин dИван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильин dВова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотина dАлиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Володeeeeeин Иван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильeeecdddddddeeин Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотweweeeeина Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Волоweweдин Иван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильweweин Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотиweна Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Волeодин Иван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильeин Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотинasdfа Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Ильwewefeин Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотиw2eна Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Вол22eодин Иван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильeи2222н Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотинa2222sdfа Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      full: ['1', '2', '3', '6', '15', '19', '24', '30'],
    },
    Июль: {
      'Володин Иван': {
        attended: ['1'],
        spravka: [],
        unattended: [],
      },
      'Ильин Вова': {
        attended: [],
        spravka: [],
        unattended: [],
      },
      'Володeeeeeин Иван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильeeeeeин Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотweweeeeина Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      'Волоweweдин Иван': {
        attended: ['1', '2', '3', '6', '15'],
        spravka: ['24', '30', '19'],
        unattended: [],
      },
      'Ильweweин Вова': {
        attended: ['24', '19'],
        spravka: ['1', '2', '6', '15'],
        unattended: ['3', '24', '30'],
      },
      'Сотиweна Алиса': {
        attended: ['19', '24', '30'],
        spravka: ['3'],
        unattended: ['1', '2', '6', '15'],
      },
      full: ['1', '2', '3', '6', '15', '19', '24', '30'],
    },
    Август: {
      'Володин Иван': {
        attended: ['1'],
        spravka: [],
        unattended: [],
      },
      'Ильин Вова': {
        attended: [],
        spravka: [],
        unattended: [],
      },
      'Сахарова Алиса': {
        attended: [],
        spravka: [],
        unattended: [],
      },
      'Гиря Оля': {
        attended: [],
        spravka: [],
        unattended: [],
      },
      full: ['1'],
    },
  },
  АТ2: {
    Июнь: { full: [] },
    Июль: { full: [] },
    Август: { full: [] },
  },
};

export const personalData: PersonalTableRowData[] = [
  {
    name: 'Frozen Yogurt',
    type: 'Frozen Dessert',
    calories: 130,
    fat: 3,
    carbs: 15,
    protein: 4,
    sodium: 80,
    calcium: 6,
    iron: 1,
  },
  {
    name: 'Ice cream sandwich',
    type: 'Frozen Dessert',
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4,
    sodium: 129,
    calcium: 8,
    iron: 1,
  },
  {
    name: 'Eclair',
    type: 'Pastry',
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
    sodium: 337,
    calcium: 6,
    iron: 7,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Cupcake',
    type: 'Cake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4,
    sodium: 413,
    calcium: 3,
    iron: 8,
  },
  {
    name: 'Gingerbread',
    type: 'Cookie',
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: 7,
    iron: 16,
  },
  {
    name: 'Jelly bean',
    type: 'Candy',
    calories: 375,
    fat: 0,
    carbs: 94,
    protein: 0,
    sodium: 50,
    calcium: 0,
    iron: 0,
  },
  {
    name: 'Lollipop',
    type: 'Candy',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: 0,
    iron: 2,
  },
  {
    name: 'Honeycomb',
    type: 'Candy',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: 0,
    iron: 45,
  },
];

export const personalDataColumnsSettings: TableColumn<PersonalTableRowData>[] =
  [
    {
      name: 'Name',
      selector: (row: PersonalTableRowData) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: 'Type',
      selector: (row: PersonalTableRowData) => row.type,
      sortable: true,
      hide: 'sm' as unknown as Media,
    },
    {
      name: 'Calories (g)',
      selector: (row: PersonalTableRowData) => row.calories.toString(),
      sortable: true,
      right: true,
    },
    {
      name: 'Fat (g)',
      selector: (row: PersonalTableRowData) => row.fat.toString(),
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Carbs (g)',
      selector: (row: PersonalTableRowData) => row.carbs.toString(),
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Protein (g)',
      selector: (row: PersonalTableRowData) => row.protein.toString(),
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Sodium (mg)',
      selector: (row: PersonalTableRowData) => row.sodium.toString(),
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Calcium (%)',
      selector: (row: PersonalTableRowData) => row.calcium.toString(),
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Iron (%)',
      selector: (row: PersonalTableRowData) => row.iron.toString(),
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
  ];
export const scheduleData = [
  {
    group: 'Школьники',
    times: [
      { day: 'ПН', time: '10:00' },
      { day: 'ВТ', time: '10:00' },
      { day: 'СР', time: '10:00' },
      { day: 'ЧТ', time: '10:00' },
      { day: 'ПТ', time: '10:00' },
      { day: 'СБ', time: '12:00' },
      { day: 'ВС', time: '12:00' },
    ],
  },
  {
    group: 'Школьники',
    times: [
      { day: 'ПН', time: '13:00' },
      { day: 'ВТ', time: '14:30' },
      { day: 'СР', time: '13:00' },
      { day: 'ЧТ', time: '14:30' },
    ],
  },
  {
    group: 'Школьники',
    times: [
      { day: 'ПН', time: '16:00' },
      { day: 'ВТ', time: '16:30' },
      { day: 'СР', time: '16:00' },
      { day: 'ЧТ', time: '16:30' },
      { day: 'ПТ', time: '16:00' },
    ],
  },
  {
    group: 'Школьники',
    times: [
      { day: 'ПН', time: '17:00' },
      { day: 'СР', time: '17:00' },
      { day: 'ПТ', time: '17:00' },
    ],
  },
  {
    group: 'Школьники',
    times: [
      { day: 'ПН', time: '18:30' },
      { day: 'ВТ', time: '18:30' },
      { day: 'СР', time: '18:30' },
      { day: 'ЧТ', time: '18:30' },
      { day: 'ПТ', time: '18:30' },
    ],
  },
  {
    group: 'Дошкольники',
    times: [
      { day: 'ПТ', time: '16:30' },
      { day: 'СР', time: '16:30' },
      { day: 'СБ', time: '10:00' },
      { day: 'ВС', time: '10:00' },
    ],
  },
  {
    group: 'Дошкольники',
    times: [
      { day: 'ПН', time: '18:30' },
      { day: 'ВТ', time: '18:30' },
      { day: 'СР', time: '18:30' },
      { day: 'ЧТ', time: '18:30' },
      { day: 'ПТ', time: '18:30' },
      { day: 'СБ', time: '12:00' },
      { day: 'ВС', time: '12:00' },
    ],
  },
  {
    group: 'Онлайн занятия',
    times: [
      { day: 'ВТ', time: '13:30' },
      { day: 'ЧТ', time: '13:30' },
      { day: 'ВС', time: '14:00' },
    ],
  },
  {
    group: 'Взрослые',
    times: [{ day: 'ВС', time: '11:00' }],
  },
  {
    group: 'Соревнования',
    times: [{ day: 'СБ', time: '14:00' }],
  },
];
