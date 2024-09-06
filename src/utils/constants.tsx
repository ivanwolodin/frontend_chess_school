import { Media, TableColumn } from 'react-data-table-component';

import {
  InfoTinyCardProps,
  SidebarMainMenuItems,
  NewsCardProps,
  TeacherCardProps,
  WeAreTrustedByProps,
  AttendanceData,
  PersonalTableRowData,
  GroupTableRowData,
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
  // { icon: 'bar-chart', label: 'Дэшборд', disabled: false },
  { icon: 'calendar', label: 'Расписание', disabled: true },
  { icon: 'book-2', label: 'Ученики', disabled: false },
  { icon: 'ink-bottle', label: 'Группы', disabled: false },
  { icon: 'service', label: 'Оплаты', disabled: true },
  { icon: 'book-2', label: 'Ответить на вопрос', disabled: true },
  { icon: 'ink-bottle', label: 'Добавить новость', disabled: true },
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

export const personalDataColumnsSettings: TableColumn<PersonalTableRowData>[] =
  [
    {
      name: 'Id',
      selector: (row: PersonalTableRowData) => row.id,
      sortable: true,
      grow: 2,
      width: '80px',
    },
    {
      name: 'Имя',
      selector: (row: PersonalTableRowData) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: 'Группа',
      selector: (row: PersonalTableRowData) => row.group,
      sortable: true,
      hide: 'sm' as unknown as Media,
    },
    {
      name: 'Родитель',
      selector: (row: PersonalTableRowData) => row.parent_name,
      sortable: true,
      right: true,
    },
    {
      name: 'Телефон',
      selector: (row: PersonalTableRowData) => row.phone,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Почта',
      selector: (row: PersonalTableRowData) => row.email,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Дата поступления',
      selector: (row: PersonalTableRowData) => row.admission_date,
      sortable: true,
      right: true,
      hide: 'md' as unknown as Media,
    },
    {
      name: 'Цена одного занятия',
      selector: (row: PersonalTableRowData) => row.usual_price,
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
