export type PrimaryButtonProps = {
  text: string;
};

export default function SecondaryButton({ text }: PrimaryButtonProps) {
  return <button>{text}</button>;
}
