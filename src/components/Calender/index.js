
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h2>Calendar Popup</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
        popperPlacement="top-end"
        popperModifiers={{
          offset: {
            enabled: true,
            offset: '5px, 10px',
          },
        }}
      />
    </div>
  );
};

export default Calender;
