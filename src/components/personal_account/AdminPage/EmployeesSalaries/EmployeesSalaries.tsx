import React, { useState } from 'react';

import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

import { EmployeesSalariesProps } from '../../../../utils/interfaces';
import { isTokenValid } from '../../../../utils/usefulFunctions';
import Loader from '../../../general/Loader/Loader';
import { SalaryDataTable } from '../../common_comps/PersonalData/PersonalDataTable';
import './EmployeesSalaries.css';

const EmployeesSalaries: React.FC<EmployeesSalariesProps> = ({
  data,
  apiService,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    if (isTokenValid(accessToken)) {
      setLoading(true);
      const salary_info = await apiService.getSalary();
      handleExport(salary_info);
      setLoading(false);
    } else {
      alert('Авторизуйтесь, пожалуйста, заново');
      localStorage.clear();
      navigate('/log_in');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleExport = (salary_info: any) => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Iterate through each employee in the salary_info
    for (const employee in salary_info.explanatory_salary_info) {
      if (salary_info.explanatory_salary_info.hasOwnProperty(employee)) {
        const employeeData = salary_info.explanatory_salary_info[employee];
        const groups = employeeData.group_name;
        const paidStudents = employeeData.paid_students;

        // Prepare data for the current employee's sheet
        const sheetData = [];

        // Add headers for group payments
        sheetData.push(['Группа', 'Сумма оплаченная', 'Сумма от группы']);

        // Add group payment data
        for (const group in groups) {
          if (groups.hasOwnProperty(group)) {
            sheetData.push([
              group,
              groups[group].paid_total,
              groups[group].from_group,
            ]);
          }
        }

        // Add a separator
        sheetData.push([]);

        // Add headers for paid students
        sheetData.push(['Ученики', 'Оплачено']);

        // Add student payment data
        for (const student in paidStudents) {
          if (paidStudents.hasOwnProperty(student)) {
            sheetData.push([student, paidStudents[student].how_much_paid]);
          }
        }

        // Add another separator
        sheetData.push([]);

        // Add headers for debtors
        sheetData.push(['Должники', 'Долг']);

        // Add debtor data
        for (const student in paidStudents) {
          if (paidStudents.hasOwnProperty(student)) {
            const debt = paidStudents[student].debt;
            if (debt > 0) {
              sheetData.push([student, debt]);
            }
          }
        }

        // Create a worksheet for the employee
        const worksheet = XLSX.utils.aoa_to_sheet(sheetData);

        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, employee);
      }
    }

    // Generate the Excel file and save it
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const fileBlob = new Blob([excelBuffer], {
      type: 'application/octet-stream',
    });
    saveAs(fileBlob, 'Employees_Salaries.xlsx');
  };
  return (
    <>
      <div className="employeessalaries__general">
        <SalaryDataTable data={data} />
        <button onClick={handleSubmit}>Скачать расшифровку</button>
        {loading && <Loader />}
      </div>
    </>
  );
};

export default EmployeesSalaries;
