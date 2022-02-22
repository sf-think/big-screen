import React, { useEffect, useState } from "react";

export const Header = () => {
  let d = new Date();
  const [now, setNow] = useState(d.toLocaleTimeString("en-US"));
  useEffect(() => {
    setInterval(() => {
      d = new Date();
      setNow(d.toLocaleTimeString("en-US"));
    }, 1000);
  });
  return (
    <header className="bordered">
      <div className="date">{now}</div>
      <div className="title">X 公安合成作战平台</div>
      <div className="city">X 市</div>
    </header>
  );
};
