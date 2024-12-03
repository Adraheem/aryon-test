import React, {ButtonHTMLAttributes, useMemo} from 'react';
import {Icon} from "@iconify/react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "PRIMARY" | "GHOST";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(
  ({
     variant = "PRIMARY",
     className,
     isLoading,
     disabled,
     children,
     ...props
   }, ref) => {
    const variantClassName = useMemo(() => {
      if (isLoading || disabled) {
        return "bg-slate-200 dark:bg-opacity-40 text-slate-500 dark:text-slate-300" +
          " cursor-not-allowed"
      }

      switch (variant) {
        case "PRIMARY":
          return "bg-primary hover:bg-primary-700 text-white";

        case "GHOST":
          return "bg-transparent hover:bg-primary-50 hover:text-primary";
      }
    }, [variant, isLoading, disabled]);

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`btn ${variantClassName} ${className}`}
        {...props}
      >
        {isLoading ? <Icon icon="eos-icons:three-dots-loading" width={24} height={24} /> : children}
      </button>
    );
  })

export default Button;
