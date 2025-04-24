'use client';
import { useState } from 'react';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const handleClick = (value: string) => {
    if (value === 'RESET') {
      setExpression('');
      setResult('0');
    } else if (value === 'DEL') {
      setExpression(prev => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        const sanitized = expression.replace(/×/g, '*').replace(/÷/g, '/');
        const evalResult = eval(sanitized);
        setResult(evalResult.toString());
        setExpression(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(prev => prev + value);
    }
  };

  const buttons = [
    '7','8','9','DEL',
    '4','5','6','+',
    '1','2','3','-',
    '.','0','/','×',
    'RESET','='
  ];

  return (
    <div className="bg-[#181F32] p-4 rounded-lg w-[320px]">
      <div className="bg-[#EEEEEE] text-right text-xl font-mono px-4 py-2 mb-4 rounded">{result}</div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, i) => (
          <button key={i} className={
            \`text-lg py-3 rounded font-bold \${btn === '=' ? 'bg-red-500 text-white col-span-2' :
            btn === 'RESET' ? 'bg-indigo-500 text-white col-span-2' :
            btn === 'DEL' ? 'bg-slate-500 text-white' : 'bg-gray-100'}\`
          } onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}
