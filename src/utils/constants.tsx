import { Media, TableColumn } from 'react-data-table-component';

import {
  InfoTinyCardProps,
  SidebarMainMenuItems,
  NewsCardProps,
  TeacherCardProps,
  WeAreTrustedByProps,
  AdminPersonalTableRowData,
  GroupTableRowData,
  TeacherPersonalTableRowData,
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
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const monthsRus = [
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
    info: 'Тренер высшей категории, с 40-летним стажем, член исполнительного комитета Российской шахматной федерации (1994-2010), тренер юношеской сборной команды России (1994-2010), председатель детской комиссии Российской шахматной федерации (1994-2010), обладатель почетного знака «За заслуги в развитии физической культуры и спорта», за большой личный вклад в развитие физической культуры и спорта в России. Среди его воспитанников мастера спорта, гроссмейстеры, чемпионы и призеры российских, европейских и мировых первенств. Автор 30 книг по шахматам, изданных на многих иностранных языках.',
  },
  {
    name: 'Антонова Оксана Павловна',
    src: require('../assets/teachers_images/Oksana.jpg'),
    position: 'Исполнительный директор',
    alt: 'Директор',
    info: 'Информация о сотруднике (дополняется)',
  },
  {
    name: 'Володина Елена Владимировна',
    src: require('../assets/teachers_images/EV.jpeg'),
    position: 'Администратор ',
    alt: 'Администратор',
    info: 'Информация о сотруднике (дополняется)',
  },
  {
    name: 'Бахарев Андрей Иванович',
    src: require('../assets/teachers_images/Andrey.jpg'),
    position: 'Старший тренер',
    alt: 'Старший',
    info: 'Информация о сотруднике (дополняется)',
  },
  {
    name: 'Громов Даниил Александрович',
    src: require('../assets/teachers_images/Daniil_.png'),
    position: 'Тренер по шахматам',
    alt: 'Тренер',
    info: 'Информация о сотруднике (дополняется)',
  },
  {
    name: 'Анисимов Всеволод Владимирович',
    src: require('../assets/teachers_images/Seva.png'),
    position: 'Тренер по шахматам',
    alt: 'Тренер',
    info: 'Информация о сотруднике (дополняется)',
  },
  {
    name: 'Тиунова Татьяна Леонидовна',
    src: require('../assets/teachers_images/TL.jpg'),
    position: 'Педагог-психолог',
    alt: 'Психолог',
    info: 'Информация о сотруднике (дополняется)',
  },
  {
    name: 'Клоц Леонид Петрович',
    src: require('../assets/teachers_images/Leo.png'),
    position: 'Тренер по шахматам',
    alt: 'Тренер',
    info: 'Информация о сотруднике (дополняется)',
  },
  {
    name: 'Володин Иван Валерьевич',
    src: require('../assets/teachers_images/IV.jpeg'),
    position: 'Программист',
    alt: 'Программист',
    info: 'Информация о сотруднике 😉',
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
    name: 'Planeta',
    src: require('../assets/our_partners_logos/planeta_logo.png'),
    text: 'Мастер-класс',
  },
  {
    name: 'Lukoil',
    src: require('../assets/our_partners_logos/lukoil_inzhiniring.jpeg'),
    text: 'Корпоративное обучение',
  },
  {
    name: 'Sibur',
    src: require('../assets/our_partners_logos/sibur.png'),
    text: 'Корпоративное обучение',
  },
];

export const TeachersMenuItems: SidebarMainMenuItems[] = [
  { icon: 'bar-chart', label: 'Дэшборд', disabled: false },
  { icon: 'calendar', label: 'Расписание', disabled: false },
  // { icon: 'book-2', label: 'Домашние задания', disabled: true },
  { icon: 'service', label: 'Персональные данные', disabled: false },
];

export const StudentsMenuItems: SidebarMainMenuItems[] = [
  { icon: 'bar-chart', label: 'Обратная связь', disabled: true },
  { icon: 'calendar', label: 'Расписание', disabled: false },
  // { icon: 'book-2', label: 'Домашние задания', disabled: true },
  { icon: 'service', label: 'Оплаты', disabled: false },
];

export const SuperAdminMenuItems: SidebarMainMenuItems[] = [
  // { icon: 'bar-chart', label: 'Дэшборд', disabled: false },
  { icon: 'calendar', label: 'Расписание', disabled: true },
  { icon: 'book-2', label: 'Ученики', disabled: false },
  { icon: 'ink-bottle', label: 'Группы', disabled: false },
  { icon: 'service', label: 'Оплаты', disabled: true },
  { icon: 'book-2', label: 'Ответить на вопрос', disabled: true },
  { icon: 'ink-bottle', label: 'Добавить новость', disabled: true },
];

export const personalData: AdminPersonalTableRowData[] = [
  {
    id: '1',
    name: 'Frozen Yogurt',
    group: 'group',
    parent_name: 'pn',
    phone: 'sdf',
    email: 'sdf@m.ru',
    admission_date: '05.12.1994',
    usual_price: '900',
  },
  {
    id: '2',
    name: 'Frozen Yogurt',
    group: 'group',
    parent_name: 'pn',
    phone: 'sdf',
    email: 'sdf@m.ru',
    admission_date: '05.12.1994',
    usual_price: '900',
  },
];

export const adminPersonalDataColumnsSettings: TableColumn<AdminPersonalTableRowData>[] =
  [
    {
      name: 'Id',
      selector: (row: AdminPersonalTableRowData) => row.id,
      sortable: true,
      grow: 2,
      width: '80px',
    },
    {
      name: 'Имя',
      selector: (row: AdminPersonalTableRowData) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: 'Группа',
      selector: (row: AdminPersonalTableRowData) => row.group,
      sortable: true,
      hide: 'sm' as unknown as Media,
    },
    {
      name: 'Родитель',
      selector: (row: AdminPersonalTableRowData) => row.parent_name,
      sortable: true,
      right: true,
    },
    {
      name: 'Телефон',
      selector: (row: AdminPersonalTableRowData) => row.phone,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Почта',
      selector: (row: AdminPersonalTableRowData) => row.email,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Дата поступления',
      selector: (row: AdminPersonalTableRowData) => row.admission_date,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Цена одного занятия',
      selector: (row: AdminPersonalTableRowData) => row.usual_price,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
  ];

export const teacherPersonalDataColumnsSettings: TableColumn<TeacherPersonalTableRowData>[] =
  [
    {
      name: '#',
      cell: (row: TeacherPersonalTableRowData, index?: number) =>
        index !== undefined ? index + 1 : '-',
      width: '50px',
    },
    {
      name: 'Имя',
      selector: (row: TeacherPersonalTableRowData) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: 'Группа',
      selector: (row: TeacherPersonalTableRowData) => row.group,
      sortable: true,
      hide: 'sm' as unknown as Media,
    },
    {
      name: 'Дата рождения',
      selector: (row: TeacherPersonalTableRowData) => row.birthday,
      sortable: true,
      hide: 'sm' as unknown as Media,
    },
    {
      name: 'Телефон',
      selector: (row: TeacherPersonalTableRowData) => row.phone,
      // sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Родитель',
      selector: (row: TeacherPersonalTableRowData) => row.parent,
      // sortable: true,
      right: true,
    },
    {
      name: 'Дата поступления',
      selector: (row: TeacherPersonalTableRowData) => row.admission_date,
      // sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Почта',
      selector: (row: TeacherPersonalTableRowData) => row.email,
      // sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Цена одного занятия',
      selector: (row: TeacherPersonalTableRowData) => row.usual_price,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
  ];

export const groupsDataColumnsSettings: TableColumn<GroupTableRowData>[] = [
  {
    name: 'группа',
    selector: (row: GroupTableRowData) => row.name,
    sortable: true,
    grow: 2,
    width: '150px',
  },
  {
    name: 'расписание',
    selector: (row: GroupTableRowData) => row.schedule,
    sortable: true,
    grow: 2,
    // maxWidth: '300px',
  },
  {
    name: 'учителя',
    selector: (row: GroupTableRowData) => row.teachers,
    sortable: true,
    minWidth: '200px',
    hide: 'sm' as unknown as Media,
  },
  {
    name: 'доп. инфо',
    selector: (row: GroupTableRowData) => row.additional_info,
    sortable: true,
    right: true,
  },
  {
    name: 'количество учеников',
    selector: (row: GroupTableRowData) => row.students_number,
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
      { day: 'СБ', time: '10:00' },
      { day: 'ВС', time: '10:00' },
    ],
  },
  {
    group: 'Школьники',
    times: [
      { day: 'ПН', time: '13:00' },
      { day: 'ВТ', time: '14:30' },
      { day: 'СР', time: '13:00' },
      { day: 'ЧТ', time: '14:30' },
      { day: 'СБ', time: '12:00' },
      { day: 'ВС', time: '12:00' },
    ],
  },
  {
    group: 'Школьники',
    times: [
      { day: 'ПН', time: '16:00' },
      { day: 'ВТ', time: '16:00' },
      { day: 'СР', time: '16:00' },
      { day: 'ЧТ', time: '16:00' },
      { day: 'ПТ', time: '16:00' },
    ],
  },
  {
    group: 'Школьники',
    times: [
      { day: 'ВТ', time: '16:30' },
      { day: 'ЧТ', time: '16:30' },
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
