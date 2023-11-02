import dynamic from "next/dynamic";
import React, { useState } from "react";

import { PopulationTypeSelectForm } from "@/components/model/population/PopulationType";
import { PrefecturesSelectForm } from "@/components/model/prefecture/PrefectureSelectForm";
import styles from "@/components/pages/Top/top.module.css";
import { chartTitle } from "@/constants";
import { useChartDataPreparation } from "@/hooks/useChartData";
import { populationActions, populationGetters } from "@/store/population";
import { Prefectures } from "@/types";

const LineChartUi = dynamic(() => import("@/components/ui/chart/lineChart"), { ssr: false });

type Props = {
  prefectures: Prefectures;
};

console.log("");
export const Top: React.FC<Props> = ({ prefectures }) => {
  const populationState = populationGetters.usePopulation();
  const { fetchPopulation } = populationActions.useFetchPopulation();
  const { removePopulation } = populationActions.useRemovePopulation();

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [selectChartType, setSelectChartType] = useState<string>(chartTitle[0].type);
  const { population, yearLabels } = useChartDataPreparation(prefectures, checkedItems, populationState);

  const handleChecked = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      fetchPopulation(value);
      setCheckedItems({
        ...checkedItems,
        [value]: checked,
      });
    } else {
      removePopulation(value);
      delete checkedItems[value];
      setCheckedItems({ ...checkedItems });
    }
  };

  return (
    <div className={styles.container}>
      <PrefecturesSelectForm
        checkedItems={checkedItems}
        handleChecked={handleChecked}
        prefectures={prefectures}
        setCheckedItems={setCheckedItems}
      />
      <div className={styles.chartContainer}>
        <div className={styles.selectContainer}>
          <PopulationTypeSelectForm setSelectChartType={setSelectChartType} />
        </div>
        <div className={styles.chart}>
          <LineChartUi chartType={selectChartType} population={population} yearLabels={yearLabels} />
        </div>
      </div>
    </div>
  );
};
