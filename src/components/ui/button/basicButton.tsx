import style from "@/components/ui/button/basicButton.module.css";

type Props = {
  colorScheme?: "primary" | "secondary";
  isLoading?: boolean;
  onClick: () => void;
  text: string;
};

export const BasicButton: React.FC<Props> = ({ colorScheme, isLoading, onClick, text }) => {
  const color = colorScheme === "primary" ? style.primary : style.secondary;
  const loading = isLoading ? style.loading : "";
  return (
    <button className={`${style.basicButton} ${color} ${loading}`} onClick={onClick}>
      {isLoading ? <div className={style.spinner}></div> : <span className={style.text}>{text}</span>}
    </button>
  );
};
