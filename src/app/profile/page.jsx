"use client";
import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Cart() {
  const [number, setNumber] = useState();

  return (
    <div>
      <p>Number: {number}</p>
      <div>
        {numbers.map((number) => {
          return (
            <div>
              <button onClick={() => setNumber(number)}>{number}</button>;
            </div>
          );
        })}
      </div>
    </div>
  );
}
