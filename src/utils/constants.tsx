import {
  InfoTinyCardProps,
  NewsCardProps,
  TeacherCardProps,
  WeAreTrustedByProps,
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

export const tinyCardsData: InfoTinyCardProps[] = [
  { src: require('../assets/tiny_cards/competitions.jpg'), alt: 'faq' },
  { src: require('../assets/tiny_cards/inside_s.jpg'), alt: 'basic' },
  {
    src: require('../assets/tiny_cards/competitions.jpg'),
    alt: 'competitions',
  },
  { src: require('../assets/tiny_cards/inside_s.jpg'), alt: 'prm' },
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
    src: require('../assets/teachers_images/AN.jpg'),
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
    name: 'Громов Даниил Александрович',
    src: require('../assets/teachers_images/Daniil.jpeg'),
    position: 'Тренер по шахматам',
    alt: 'Тренер',
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
