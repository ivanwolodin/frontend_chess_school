import { InfoTinyCardProps } from './interfaces';

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
  { src: require('../../assets/tiny_cards/competitions.jpg'), alt: 'faq' },
  { src: require('../../assets/tiny_cards/inside_s.jpg'), alt: 'basic' },
  {
    src: require('../../assets/tiny_cards/competitions.jpg'),
    alt: 'competitions',
  },
  { src: require('../../assets/tiny_cards/inside_s.jpg'), alt: 'prm' },
  { src: require('../../assets/tiny_cards/competitions.jpg'), alt: 'gallery' },
  { src: require('../../assets/tiny_cards/inside_s.jpg'), alt: 'inside' },
];
