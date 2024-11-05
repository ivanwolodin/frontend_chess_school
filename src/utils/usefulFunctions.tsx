import { decodeToken } from 'react-jwt';

import { TokenData } from './interfaces';

export const isTokenValid = (accessToken: string | null): boolean => {
  if (!accessToken) {
    console.log('No access token found.');
    return false;
  }

  const decodedToken = decodeToken<TokenData>(accessToken);
  const expTimestamp = decodedToken?.exp;
  const currentTime = Math.floor(Date.now() / 1000);

  if (expTimestamp && Number(expTimestamp) > currentTime) {
    return true;
  } else {
    console.log('Token has expired.');
    return false;
  }
};

interface UserData {
  name: string;
  email?: string;
  attendance_info: [];
  sum_to_pay: number;
  feedback: [];
  payments: [];
}

export const saveUserDataToLocalStorage = (user_data: UserData) => {
  localStorage.setItem('name', user_data.name);
  // localStorage.setItem('email', user_data.email);
  localStorage.setItem(
    'attendanceInfo',
    JSON.stringify(user_data.attendance_info),
  );
  localStorage.setItem('sumToPay', JSON.stringify(user_data.sum_to_pay));
  localStorage.setItem('feedback', JSON.stringify(user_data.feedback));
  localStorage.setItem('payments', JSON.stringify(user_data.payments));
  // localStorage.setItem('role', 'student');
};

interface AdminData {
  name: string;
  only_groups_name: [];
  students: [];
  group_data: [];
  salary_info: [];
  groups_paid_data: [];
}

interface TeacherData {
  name: string;
  groups_name: [];
  personal_data: [];
  group_data: [];
}

export const saveAdminDataToLocalStorage = (user_data: AdminData) => {
  localStorage.setItem('name', 'Елена');
  localStorage.setItem(
    'only_groups_name',
    JSON.stringify(user_data.only_groups_name),
  );
  localStorage.setItem('personalData', JSON.stringify(user_data.students));
  localStorage.setItem('groupData', JSON.stringify(user_data.group_data));
  localStorage.setItem('salaryInfo', JSON.stringify(user_data.salary_info));
  localStorage.setItem(
    'groupsPaidData',
    JSON.stringify(user_data.groups_paid_data),
  );
  const nameIdMap: Record<string, number> = {};
  const nameCount: Record<string, number> = {};

  user_data.students.forEach((student) => {
    const { name, id, group } = student;

    // неоптимально, конечно, сделано через доп.структуру, но ладно
    nameCount[name] = (nameCount[name] || 0) + 1;

    if (nameCount[name] > 1) {
      nameIdMap[`${name}_${group}`] = id;
    } else {
      nameIdMap[name] = id;
    }
  });

  // Сортируем по алфавиту по ключам (именам)
  const sortedNameIdMap = Object.fromEntries(
    Object.entries(nameIdMap).sort(([nameA], [nameB]) =>
      nameA.localeCompare(nameB),
    ),
  );

  localStorage.setItem('idByStudentName', JSON.stringify(sortedNameIdMap));
};

export const saveTeacherDataToLocalStorage = (user_data: TeacherData) => {
  localStorage.setItem('name', user_data.name);
  localStorage.setItem('groupNames', JSON.stringify(user_data.groups_name));
  localStorage.setItem('personalData', JSON.stringify(user_data.personal_data));
  localStorage.setItem('groupData', JSON.stringify(user_data.group_data));
};
