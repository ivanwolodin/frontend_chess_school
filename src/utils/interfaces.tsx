import { MutableRefObject } from 'react';

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
  toggled: boolean;
  handleSideBarToggle: (item: boolean) => void;
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
  disabled: boolean;
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
export interface AttendancePopupProps {
  open: boolean;
  selectedItem: string | null;
  currentMonth: number;
  closeModal: () => void;
  handleLeftArrowClick: () => void;
  handleRightArrowClick: () => void;
}
export interface PaymentInfoPopupProps {
  open: boolean;
  closeModal: () => void;
}
export interface AdditionalHorizontalInfoLineProps {
  setToggled: () => void;
}
export interface ExecuteScrollProps {
  executeScroll: () => void;
}
export interface InfoPopupProps {
  onClose: () => void;
  title: string;
  text: string;
}

export interface AdmissionFormProps {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}
export interface NewYearAdmissionProps {
  scrollToForm: () => void;
}
