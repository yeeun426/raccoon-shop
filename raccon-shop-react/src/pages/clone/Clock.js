import React, { useState, useEffect } from "react";
import { ClockStyled } from "./styled";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = (time.getHours() % 12) + minutes / 60;

  return (
    <ClockStyled>
      <div className="clock">
        <div className="clock-face"></div>

        <div
          className="hand hour"
          style={{
            transform: `rotate(${(hours + 3) * 30}deg)`,
          }}
        ></div>

        <div
          className="hand minute"
          style={{
            transform: `rotate(${(minutes + 3) * 6}deg)`,
          }}
        ></div>

        <div
          className="hand seconds"
          style={{
            transform: `rotate(${seconds * 6}deg)`,
          }}
        ></div>
      </div>
    </ClockStyled>
  );
}
