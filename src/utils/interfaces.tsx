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

export interface SideBarProps {
  menuItems: SidebarMainMenuItems[];
  handleElementChoice: (item: string) => void;
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

export interface StudentAttendance {
  attended: string[];
  spravka: string[];
  unattended: string[];
}

export interface MonthData {
  full: string[];
  [studentName: string]: StudentAttendance | string[];
}

export interface ClassData {
  [month: string]: MonthData;
}

export interface AttendanceData {
  [className: string]: ClassData;
}

export interface PersonalTableRowData {
  id?: number;
  name: string;
  type: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  sodium: number;
  calcium: number;
  iron: number;
}

export interface PersonalDataTableProps {
  data: PersonalTableRowData[];
}
