import { Dispatch, SetStateAction, useState } from "react";

import styles from "@/components/model/prefecture/PrefectureSelectForm/index.module.css";
import { BasicButton } from "@/components/ui/button/basicButton";
import { CheckBox } from "@/components/ui/checkbox";
import { populationActions } from "@/store/population";
import { Prefectures } from "@/types";

type Props = {
  checkedItems: Record<string, boolean>;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefectures: Prefectures;
  setCheckedItems: Dispatch<SetStateAction<Record<string, boolean>>>;
};

export const PrefecturesSelectForm: React.FC<Props> = ({
  checkedItems,
  handleChecked,
  prefectures,
  setCheckedItems,
}) => {
  const { fetchAllPopulation } = populationActions.useFetchPopulation();
  const [isAllSelect, setIsAllSelect] = useState<boolean>(false);

  const handleAllSelect = async () => {
    const allPrefectureCount = 47;
    const selectPref = Object.keys(checkedItems).length;

    if (allPrefectureCount === selectPref) {
      return;
    }

    const allChecked = prefectures.result.reduce(
      (acc, cur) => {
        acc[cur.prefCode] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    setCheckedItems(allChecked);

    try {
      setIsAllSelect(true);
      await fetchAllPopulation(prefectures);
    } catch (error) {
      alert(error);
      return;
    } finally {
      setIsAllSelect(false);
    }
  };

  const handleAllClear = () => {
    setCheckedItems({});
  };

  return (
    <>
      <div className={styles.descriptionContainer}>
        <h1>都道府県を選択してください</h1>
        <span className={styles.buttonContainer}>
          <BasicButton
            colorScheme="primary"
            isLoading={isAllSelect}
            text="全て選択"
            onClick={() => handleAllSelect()}
          />
          <BasicButton colorScheme="secondary" text="クリア" onClick={() => handleAllClear()} />
        </span>
      </div>
      <div className={styles.prefectures}>
        {prefectures.result.map((prefecture) => {
          const { prefCode, prefName } = prefecture;
          return (
            <ul key={prefCode}>
              <CheckBox
                checked={checkedItems[prefCode.toString()] || false}
                id={prefCode.toString()}
                label={prefName}
                value={prefCode.toString()}
                onChange={handleChecked}
              />
            </ul>
          );
        })}
      </div>
    </>
  );
};
