import style from "@/components/ui/button/basicButton.module.css";

type Props = {
  colorScheme?: "primary" | "secondary";
  onClick: () => void;
  text: string;
};

export const BasicButton: React.FC<Props> = ({ colorScheme, onClick, text }) => {
  const color = colorScheme === "primary" ? style.primary : style.secondary;
  return (
    <button className={`${style.basicButton} ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};
