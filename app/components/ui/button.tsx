import { ButtonHTMLAttributes, ReactNode, } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon?: ReactNode;
}

export default function Button({
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-button
        py-3.5
        text-[14px]
        font-bold
        text-white
        transition
        hover:opacity-90
        active:scale-[0.99]
        ${className}
      `}
      {...props}
    >
      {children}

      {icon && (
        <span className="flex items-center">
          {icon}
        </span>
      )}
    </button>
  );
}