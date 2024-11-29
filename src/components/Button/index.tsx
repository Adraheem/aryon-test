import React, {ButtonHTMLAttributes, useMemo} from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "PRIMARY" | "GHOST"
}

function Button({variant = "PRIMARY", className, ...props}: IProps) {
  const variantClassName = useMemo(() => {
    switch (variant) {
      case "PRIMARY":
        return "bg-primary hover:bg-primary-700 text-white";

      case "GHOST":
        return "bg-transparent hover:bg-primary-50 hover:text-primary";
    }
  }, [variant]);

  return (
    <button
      className={`btn ${variantClassName} ${className}`}
      {...props}
    />
  );
}

export default Button;
