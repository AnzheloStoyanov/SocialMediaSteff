import React, { useState } from "react";
import "./DatePicker.css"; // Make sure to adjust the path based on your project structure

const Heading = ({ date, changeMonth, resetDate }) => (
  <nav className="calendar--nav">
    <a onClick={() => changeMonth(date.getMonth() - 1)}>&#8249;</a>
    <h1 onClick={() => resetDate()}>
      {date.toLocaleString('default', { month: 'long' })}{" "}
      <small>{date.getFullYear()}</small>
    </h1>
    <a onClick={() => changeMonth(date.getMonth() + 1)}>&#8250;</a>
  </nav>
);

const Day = ({ currentDate, date, startDate, endDate, onClick }) => {
  let className = [];

  const isSameDay = (a, b) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();

  if (isSameDay(new Date(), date)) {
    className.push("active");
  }

  if (isSameDay(date, startDate)) {
    className.push("start");
  }

  if (
    date > startDate &&
    date < endDate &&
    date.getMonth() === startDate.getMonth()
  ) {
    className.push("between");
  }

  if (isSameDay(date, endDate)) {
    className.push("end");
  }

  if (date.getMonth() !== currentDate.getMonth()) {
    className.push("muted");
  }

  return (
    <span
      onClick={() => onClick(date)}
      className={className.join(" ")}
    >
      {date.getDate()}
    </span>
  );
};

const Days = ({ date, startDate, endDate, onClick }) => {
  const thisDate = new Date(date);
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const previousMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  const previousMonthDays = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let days = [];
  let labels = [];

  const getDayAbbreviation = (dayIndex) =>
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];

  for (let i = 0; i < 7; i++) {
    labels.push(<span className="label">{getDayAbbreviation(i)}</span>);
  }

  for (let i = firstDayDate.getDay(); i > 0; i--) {
    previousMonth.setDate(previousMonthDays - i + 1);

    days.push(
      <Day
        key={previousMonth.toISOString()}
        onClick={(date) => onClick(date)}
        currentDate={date}
        date={new Date(previousMonth)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.setDate(i);

    days.push(
      <Day
        key={thisDate.toISOString()}
        onClick={(date) => onClick(date)}
        currentDate={date}
        date={new Date(thisDate)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  const daysCount = days.length;
  for (let i = 1; i <= 42 - daysCount; i++) {
    nextMonth.setDate(i);
    days.push(
      <Day
        key={nextMonth.toISOString()}
        onClick={(date) => onClick(date)}
        currentDate={date}
        date={new Date(nextMonth)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  return (
    <nav className="calendar--days">
      {labels.concat()}
      {days.concat()}
    </nav>
  );
};

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const resetDate = () => {
    setDate(new Date());
  };

  const changeMonth = (month) => {
    const newDate = new Date(date);
    newDate.setMonth(month);
    setDate(newDate);
  };

  const changeDate = (selectedDate) => {
    let newStartDate = new Date(startDate);
    let newEndDate = new Date(endDate);

    const isSameDay = (a, b) =>
      a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear();

    if (
      startDate === null ||
      selectedDate < startDate ||
      !isSameDay(startDate, endDate)
    ) {
      newStartDate = new Date(selectedDate);
      newEndDate = new Date(selectedDate);
    } else if (isSameDay(selectedDate, startDate) && isSameDay(selectedDate, endDate)) {
      newStartDate = null;
      newEndDate = null;
    } else if (selectedDate > startDate) {
      newEndDate = new Date(selectedDate);
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <div className="calendar">
      <Heading
        date={date}
        changeMonth={(month) => changeMonth(month)}
        resetDate={() => resetDate()}
      />

      <Days
        onClick={(date) => changeDate(date)}
        date={date}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Calendar;
