import { LucideProps } from "lucide-react";

type InputTextProps = {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  icon?: React.ElementType 
};

export default function InputText({
  label,
  placeholder,
  type,
  id,
  icon: Icon,
}: InputTextProps) {
  return (
    <div className="flex flex-col">
      <label className="text-xs mb-1 font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
      <div className="flex border-[1px] justify-between rounded-lg py-2 px-2  items-center border-gray-200 ">
        <input
          className="outline-none font-medium text-slate-700  rounded-md"
          id={id}
          placeholder={placeholder}
          type={type}
         
        />
        {Icon && <Icon className="text-gray-400/50 size-5" />}
      </div>
    </div>
  );
}
