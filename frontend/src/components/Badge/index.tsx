import React from 'react';

interface IProps {
  text: string;
}

function Badge({text}: IProps) {
  return (
    <span className="inline-block break-keep small bg-zinc-100 dark:bg-opacity-20 dark:text-white text-zinc-600 px-2 py-0.5 rounded-md">{text}</span>
  );
}

export default Badge;
