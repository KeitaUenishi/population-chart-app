import React, { useState } from "react";
import dynamic from "next/dynamic";

import styles from "@/components/pages/Top/top.module.css";
import { CheckBox } from "@/components/ui/checkbox";
import api from "@/lib/api";
import { useChartDataPreparation } from "@/hooks/useChartData";
import { Population, Prefectures } from "@/types";
import { chartTitle } from "@/constants";

const LineChartUi = dynamic(() => import("@/components/ui/chart/lineChart"), { ssr: false });

type Props = {
  prefectures: Prefectures;
};

export const Top: React.FC<Props> = ({ prefectures }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [selectPrefId, setSelectPrefId] = useState<string>("");
  const [populationState, setPopulationState] = useState<{ data: Population; id: number }[]>([]);
  const [selectChartType, setSelectChartType] = useState<string>(chartTitle[0].type);
  const { population, yearLabels } = useChartDataPreparation(prefectures, checkedItems, populationState, selectPrefId);

  const handleChecked = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      const data = await api.get(`/api/population/?prefCode=${value}`);
      const populationData = [...populationState, { data: data, id: Number(value) }];
      setPopulationState(populationData);
      setCheckedItems({
        ...checkedItems,
        [value]: checked,
      });
      setSelectPrefId(value);
    } else {
      const removePopulation = populationState.filter((item) => item.id !== Number(value));
      setPopulationState(removePopulation);
      delete checkedItems[value];
      setCheckedItems({ ...checkedItems });
    }
  };

  return (
    <div className={styles.container}>
      <h1>都道府県</h1>
      <div className={styles.prefectures}>
        {prefectures.result.map((prefecture) => {
          const { prefCode, prefName } = prefecture;
          return (
            <div key={prefCode}>
              <CheckBox
                checked={checkedItems[prefCode.toString()] || false}
                id={prefCode.toString()}
                label={prefName}
                value={prefCode.toString()}
                onChange={handleChecked}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.selectContainer}>
          <h2>表示データ選択</h2>
          <select
            className={styles.select}
            onChange={(e) => {
              setSelectChartType(() => e.target.value);
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
        </div>
        <div className={styles.chart}>
          <LineChartUi chartType={selectChartType} population={population} yearLabels={yearLabels} />
        </div>
      </div>
    </div>
  );
};
