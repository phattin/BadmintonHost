import { InputHTMLAttributes, ReactNode, } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    icon?: ReactNode;
}

export default function Input({label, id, icon, className="", ...props}: InputProps){
    return(
        <div className="mt-5 flex w-full flex-col gap-1">
            <label className="text-sb text-[14px] font-semibold text-text" htmlFor={id}>{label}</label> 
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-placeholder">
                        {icon}
                    </div>
                )}
                <input className=" w-full rounded-lg border py-3.5 border-placeholder bg-white pl-10 pr-3 ${icon ? 'pl-10' : '' text-sm text-text outline-none placeholder:text-placeholder} focus:border-button focus:ring-2  focus:ring-button/20 ${className}" id={id} {...props} />
            </div>
        </div>
    )
}