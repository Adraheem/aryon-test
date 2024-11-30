import React, {ButtonHTMLAttributes, useMemo} from 'react';

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
     ...props
   }, ref) => {
    const variantClassName = useMemo(() => {
      if (isLoading || disabled) {
        return "bg-slate-200 text-slate-500 cursor-not-allowed"
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
      />
    );
  })

export default Button;
