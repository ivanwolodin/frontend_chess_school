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

export interface AttendanceRecord {
  attended: number[];
  unattended: number[];
  spravka: number[];
}

interface GroupAttendance {
  [studentName: string]: AttendanceRecord;
}

interface MonthlyAttendance {
  [september: string]: GroupAttendance[];
  october: GroupAttendance[];
  november: GroupAttendance[];
  december: GroupAttendance[];
  // TODO: потом добавить остальные
}

export interface AttendanceData {
  [groupName: string]: MonthlyAttendance;
}

interface GroupData {
  [key: string]: AttendanceRecord;
}

interface MonthData {
  // TODO: добавить другие месяцы
  september?: GroupData;
}

export interface ChangeStudentAttendanceData {
  [key: string]: MonthData;
}

export interface ClassDates {
  [group: string]: {
    [month: string]: number[];
  };
}

export interface ManageAttendanceProps {
  attendanceData: AttendanceData;
  groupsInfo: ClassDates;
  changeStudentAttendance: (
    data: ChangeStudentAttendanceData,
  ) => Promise<boolean>;
}

interface student_status {
  is_student: boolean;
}

export interface AdminPersonalTableRowData {
  id: string;
  name: string;
  group: string;
  parent_name: string;
  phone: string;
  email: string;
  admission_date: string;
  usual_price: string;
  recommended_sum: number;
  status: student_status;
}

export interface AdminPersonalDataTableProps {
  data: AdminPersonalTableRowData[];
  apiService: Api;
}

export interface ManageStudentRegistrationProps {
  data: AdminPersonalTableRowData[];
  apiService: Api;
}

export interface EmployeesSalariesProps {
  data: SalaryTableRowData[];
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

export interface SalaryTableRowData {
  employee: string;
  groupNumber: string;
  studentsNumber: string;
  paid: string;
  debt: string;
  salary: string;
}

export interface SalaryDataTableProps {
  data: SalaryTableRowData[];
}

export interface TeacherPersonalTableRowData {
  // id: string;
  name: string;
  group: string;
  birthday: string;
  phone: string;
  parent: string;
  admission_date: string;
  email: string;
  usual_price: string;
  recommended_sum: number;
}

export interface TeacherPersonalDataTableProps {
  data: TeacherPersonalTableRowData[];
}

export interface AttendancePopupProps {
  open: boolean;
  selectedItem: string | null;
  currentMonth: number;
  closeModalWithoutSaving: () => void;
  closeModalOnSaving: () => void;
  handleLeftArrowClick: () => void;
  handleRightArrowClick: () => void;
  attendanceData: AttendanceData;
  groupsInfo: ClassDates;
  changeStudentAttendance: (
    data: ChangeStudentAttendanceData,
  ) => Promise<boolean>;
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

export interface AllGroupDataPopupProps {
  onClose: () => void;
  groupTitle: string;
}

export interface AllStudentDataPopupProps {
  onClose: () => void;
  apiService: Api;
  studentId: number;
  studentName: string;
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
