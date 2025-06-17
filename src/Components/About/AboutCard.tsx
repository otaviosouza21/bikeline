type AboutCardProps = {
  icon: React.ElementType;
  text: string;
  subtext: string;
};

export default function AboutCard({ icon: Icon, subtext, text }: AboutCardProps) {
  return (
    <li className="group">
      <Icon  className="rounded-full size-8 group-hover:scale-105 bg-bkl-100 p-2 text-bkl-500" />
      <div className="flex flex-col ">
        <span className="font-semibold">{text}</span>
        <span className="text-slate-700">{subtext}</span>
      </div>
    </li>
  );
}
