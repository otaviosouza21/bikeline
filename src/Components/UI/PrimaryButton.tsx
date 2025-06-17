import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = React.ComponentProps<"button"> & {
  text: string;
};

export default function PrimaryButton({ text,  className }: PrimaryButtonProps) {
  return <button className={twMerge(`cursor-pointer transition-all text-sm rounded-2xl px-3 py-1.5 `,className
      )}>{text}</button>;
}
