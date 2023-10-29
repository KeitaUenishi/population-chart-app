import styles from "@/components/ui/checkbox/checkbox.module.css";

type Props = {
  checked: boolean;
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const CheckBox: React.FC<Props> = ({ checked, id, label, onChange, value }) => {
  return (
    <>
      <label className={styles.label}>
        <input
          checked={checked}
          className={styles.input}
          id={id}
          name="inputNames"
          type="checkbox"
          value={value}
          onChange={onChange}
        />
        <span className={styles.text}>{label}</span>
      </label>
    </>
  );
};
