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
      console.log(salary_info);
      setLoading(false);
    } else {
      alert('Авторизуйтесь, пожалуйста, заново');
      localStorage.clear();
      navigate('/log_in');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleExport = () => {
    // Данные для каждого листа
    const sheet1Data = [
      ['Header1', 'Headecdsr2'],
      ['Row1Col1', 'Rocdw1Col2'],
    ];

    const sheet2Data = [
      ['HeaderA', 'HeacsderB'],
      ['RowA1', 'RowA2'],
    ];

    // Создание рабочих листов
    const worksheet1 = XLSX.utils.aoa_to_sheet(sheet1Data);
    const worksheet2 = XLSX.utils.aoa_to_sheet(sheet2Data);

    // Создание рабочей книги и добавление листов
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet1, 'Sheet1');
    XLSX.utils.book_append_sheet(workbook, worksheet2, 'Sheet2');

    // Генерация файла и сохранение
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const fileBlob = new Blob([excelBuffer], {
      type: 'application/octet-stream',
    });
    saveAs(fileBlob, 'MyExcelFile.xlsx');
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
