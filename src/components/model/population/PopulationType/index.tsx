import { Dispatch, SetStateAction, memo } from "react";

import styles from "@/components/model/population/PopulationType/index.module.css";
import { chartTitle } from "@/constants";

type Props = {
  setSelectChartType: Dispatch<SetStateAction<string>>;
};

export const PopulationTypeSelectForm: React.FC<Props> = memo(({ setSelectChartType }) => {
  return (
    <>
      <h2>表示データ選択</h2>
      <select
        className={styles.select}
        onChange={(e) => {
          setSelectChartType(e.target.value);
        }}
      >
        {chartTitle.map((item) => {
          return (
            <option key={item.type} value={item.type}>
              {item.title}
            </option>
          );
        })}
      </select>
    </>
  );
});

PopulationTypeSelectForm.displayName = "PopulationTypeSelectForm";
