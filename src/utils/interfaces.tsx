export interface InfoTinyCardProps {
  src: string;
  alt: string;
}

export interface NewsCardProps {
  title: string;
  src: string;
  text: string;
  date: string;
  // TODO: добавить alt
  // alt: string;
}

export interface TeacherCardProps {
  name: string;
  src: string;
  position: string;
  alt: string;
}

export interface WeAreTrustedByProps {
  name: string;
  src: string;
  text: string;
}

export interface SidebarMainMenuItems {
  icon:
    | 'bar-chart'
    | 'calendar'
    | 'book-2'
    | 'service'
    | 'diamond'
    | 'shopping-cart'
    | 'ink-bottle'
    | 'global';
  label: string;
}
