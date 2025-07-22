import { twMerge } from "tailwind-merge";
import { InputProps } from "../../../types/form/formTypes";

export default function FormInput({
  label,
  icon: Icon,
  iconPosition = "right",
  className,
  required = false,
  disabled,
  ...props
}: InputProps) {
  const containerClass = twMerge(
    `flex py-4 max-sm:py-3 bg-white px-4 items-center transition justify-between 
    border rounded-xl text-lg sm:text-base text-text-secondary 
    ease-out hover:border-primary/70 max-sm:text-sm active:scale-102 active:border-primary itens-center gap-2 
    focus:outline-none focus:ring-2 focus:ring-[#D72626]`,
    disabled
      ? "bg-gray-100 border-gray-300 pointer-events-none opacity-60"
      : "border-gray-300",
    className
  );

  return (
    <div className={className}>
      {label && <label className="font-medium max-sm:text-sm text-text-secondary text-md">{label} {required && <span className="text-red-600">*</span>}</label>}
      <div className={containerClass}>
        {Icon && iconPosition === "left" ? <Icon size={20} /> : null}
        <input
          disabled={disabled}
          className={twMerge(
            `outline-none text-md font-medium text-black/80 bg-transparent w-full`,
            className
          )}
          {...props}
        />
        {Icon && iconPosition === "right" ? <Icon size={20} /> : null}
      </div>
    </div>
  );
}