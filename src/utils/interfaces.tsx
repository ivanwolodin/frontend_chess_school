import Api from '../api/ApiService';

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
  changeUserPassword: () => void;
}

export interface TeacherCardProps {
  name: string;
  src: string;
  position: string;
  alt: string;
  info: string;
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
  id: string;
  name: string;
  group: string;
  parent_name: string;
  phone: string;
  email: string;
  admission_date: string;
  usual_price: string;
}

export interface PersonalDataTableProps {
  data: PersonalTableRowData[];
}

export interface ManageStudentRegistrationProps {
  data: PersonalTableRowData[];
  apiService: Api;
}

export interface GroupTableRowData {
  name: string;
  schedule: string;
  teachers: string;
  additional_info: string;
  students_number: string;
}

export interface GroupDataTableProps {
  data: GroupTableRowData[];
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
  apiService?: Api;
}
export interface ChangePasswordPopupProps {
  open: boolean;
  closeModal: () => void;
  apiService?: Api;
}

export interface ResetPasswordPopupProps {
  open: boolean;
  closeModal: () => void;
  apiService: Api;
}

export interface AdditionalHorizontalInfoLineProps {
  setToggled: () => void;
  userRole: UserRole;
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
  apiService: Api;
  scrollRef?: React.RefObject<HTMLElement>;
  cellData?: {
    group: string;
    day: string;
    time: string;
  };
}

export interface NewYearAdmissionProps {
  scrollToForm: () => void;
}
export interface AuthContextProps {
  login: (userData: UserLoginData) => void;
  logout: () => void;
}

export interface UserLoginData {
  username: string;
  password: string;
}

export interface TokenData {
  sub: string;
  name: string;
  role: 'student' | 'teacher';
  exp: string;
}

export interface UserRole {
  role: 'student' | 'teacher' | 'admin' | 'unauthorized';
}
