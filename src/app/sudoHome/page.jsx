"use client";

import { useState } from "react";
import style from "@/components/sudoHome.module.css";

export default function () {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const Increment = () => {
    const sorted = numbers.sort((a, b) => {
      return a - b;
    });
    setNumbers([...sorted]);
  };

  const Decrement = () => {
    const sorted = numbers.sort((a, b) => {
      return b - a;
    });
    setNumbers([...sorted]);
  };

  return (
    <div>
      <div className={style.incDecbutton}>
        <button onClick={() => Increment}>Inc</button>
        <button onClick={() => Decrement}>Dec</button>
      </div>
      <div className={style.buttons}>
        {numbers.map((number) => {
          return <div className={style.button}>{number}</div>;
        })}
      </div>
    </div>
  );
}
