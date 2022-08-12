import { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarView() {
  const [date, setDate] = useState(new Date());

  function onClickDay(date) {
    alert(date)
  }

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} onClickDay={onClickDay}/>
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div> 
  );
}

export default CalendarView;