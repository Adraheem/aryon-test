import React, {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | false;
  label?: string;
}

function TextInput({error, label, className, ...props}: IProps) {
  return (
    <div>
      {label && (
        <label className="block body mb-1 text-slate-500">{label}</label>
      )}
      <input
        className={`text-input ${!!error ? "input-error" : ""} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-input-error">{error}</p>
      )}
    </div>
  );
}

export default TextInput;
