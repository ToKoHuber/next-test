"use client";

import { useState } from "react";
import Button from "@/components/Button";
import style from "@/components/button.module.css";

export default function () {
  const [numbers, setNumbers] = useState([5, 2, 3, 4, 1, 6, 7, 8, 9]);

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
      <div className={style.buttonContainer}>
        <div>
          <button onClick={Increment} >Inc</button>
        </div>
        <div>
          <button onClick={Decrement}>Dec</button>
        </div>
      </div>
      <div className={style.ButtonBox}>
        {numbers.map((number) => {
          return (
            <div>
              <Button number={number} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
