import React from 'react';

interface IProps {
  score: 0 | 1 | 2 | 3 | 4
}

function ValueScore({score}: IProps) {
  return (
    <div className="inline-flex gap-1 items-center">
      {[...Array(4)].map((_, idx) => (
        <div key={`vs-${idx}`}
             className={`w-3 h-3 rounded-sm ${idx < score ? "bg-teal-400" : "bg-zinc-300"}`}/>
      ))}
    </div>
  );
}

export default ValueScore;
