import { SelectHTMLAttributes, ReactNode, } from "react"
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    icon?: ReactNode;
    children: ReactNode;
}

export default function Select({label, id, icon, children, className="", ...props}: SelectProps){
    return(
        <div className="mt-5 flex w-full flex-col gap-1">
            <label className="text-sb text-[14px] font-semibold text-text" htmlFor={id}>{label}</label> 
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-placeholder">
                        {icon}
                    </div>
                )}
                <select
                id={id}
                {...props}
                className={`
                    w-full
                    appearance-none
                    rounded-lg
                    border
                    border-placeholder
                    bg-white
                    py-3.5
                    text-sm
                    text-text
                    outline-none
                    focus:border-button
                    focus:ring-2
                    focus:ring-button/20
                    ${icon ? "pl-10" : "pl-3"}
                    pr-10
                    ${className}
                `}
                >
                {children}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-placeholder">
                 <ChevronDown size={18} />
                </div>
            </div>
        </div>
    )
}