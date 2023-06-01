import React, { useContext } from 'react'
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { AppContext } from '../../Context';

export default function Datepicker() {
  const { userDate, setUserDate } = useContext(AppContext);

  const selected = dayjs(userDate);

  const onChangeHandler = (date) => {
    if (date) {
      const formattedDate = date.format('YYYY-MM-DD');
      setUserDate(formattedDate);
    }
  };

  return (
    <DatePicker value={selected} onChange={onChangeHandler} showNow={true} />
  );
}