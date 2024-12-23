import React, { useState } from "react";

// 日付の生成関数
const generateCalendar = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = date.getDay(); // 1日が曜日何かを取得

  // 空の配列を作成して曜日に合わせて日付を挿入
  const calendar: { day: number | null; weekday: number | null }[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendar.push({ day: null, weekday: null }); // 最初の週の空の部分
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const weekday = new Date(year, month, i).getDay(); // 各日の曜日を取得
    calendar.push({ day: i, weekday });
  }

  return calendar;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<{ [key: string]: string[] }>({});

  // 現在の月と年を取得
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleAddEvent = (day: number) => {
    const event = prompt("イベントを追加:");
    if (event) {
      const dayString = `${year}-${month + 1}-${day}`;
      setEvents((prevEvents) => {
        const newEvents = { ...prevEvents };
        if (!newEvents[dayString]) {
          newEvents[dayString] = [];
        }
        newEvents[dayString].push(event);
        return newEvents;
      });
    }
  };

  const calendar = generateCalendar(year, month);

  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

  // 10行分のdivを生成
  const lines = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="w-full h-8 border border-t-0 border-x-0 border-black bg-gray-200"></div>
  ));

  return (
    <div>
      <h1>
        {year}年 {month + 1}月
      </h1>
      <button onClick={handlePrevMonth}>前の月</button>
      <button onClick={handleNextMonth}>次の月</button>

      <div className="calendar">
        <div className="days">
          {calendar.map((item, index) => {
            return (
              <div
                key={index}
                className={`day ${item.day ? "active" : ""}`}
                onClick={() => item.day && handleAddEvent(item.day)}
                style={{ cursor: item.day ? "pointer" : "not-allowed" }}
              >
                {item.day && (
                  <div>
                    <div>{weekDays[item.weekday!]}</div> {/* 曜日を表示 */}
                    <div>{item.day}</div> {/* 日付を表示 */}
                  </div>
                )}
                {item.day && events[`${year}-${month + 1}-${item.day}`] && (
                  <ul>
                    {events[`${year}-${month + 1}-${item.day}`].map((event, index) => (
                      <li key={index}>{event}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        {/* linesを表示するためのdiv */}
        <div>{lines}</div>
      </div>

      <style jsx>{`
        .calendar {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .weekdays {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }

        .weekday {
          width: 14%;
          text-align: center;
        }

        .days {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }

        .day {
          width: 14%;
          text-align: center;
          height: 80px;
          border: 1px solid #ddd;
          padding: 8px;
          box-sizing: border-box;
        }

        .day.active {
          background-color: #f0f0f0;
        }

        .day ul {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }

        .day ul li {
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
};

export default Calendar;
