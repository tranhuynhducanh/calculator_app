
"use client";
import React from "react";

export default function Calculator() {
  const [result, setResult] = React.useState("0");
  const buttons = [
    "7", "8", "9", "DEL",
    "4", "5", "6", "+",
    "1", "2", "3", "-",
    ".", "0", "/", "x",
    "RESET", "="
  ];

  return (
    <div className="bg-[#181F32] p-4 rounded-lg w-[320px]">
      <div className="bg-[#EEEEEE] text-black text-right text-xl font-mono px-4 py-2 mb-4 rounded">

        {result}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={
              btn === "RESET"
                ? "col-span-2 bg-[#647198] text-white font-bold py-2 rounded"
                : btn === "="
                ? "col-span-2 bg-[#D13F30] text-white font-bold py-2 rounded"
                : btn === "DEL"
                ? "bg-[#3B4664] text-white font-bold py-2 rounded"
                : "bg-[#EAE3DC] text-[#3B4664] font-bold py-2 rounded"
            }
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );

  function handleClick(btn: string) {
    if (btn === "DEL") {
      setResult((prev) => prev.slice(0, -1) || "0");
    } else if (btn === "RESET") {
      setResult("0");
    } else if (btn === "=") {
      try {
        const formatted = result.replace(/x/g, "*");
        setResult(eval(formatted).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setResult((prev) => (prev === "0" ? btn : prev + btn));
    }
  }
}
