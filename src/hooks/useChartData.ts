import { useEffect, useState } from "react";

import { randomColorString } from "@/lib/util";
import { Dataset, Population, Prefectures } from "@/types";

type ChartDataset = {
  [key: string]: Dataset[];
};

export const useChartDataPreparation = (
  prefectures: Prefectures,
  checkedItems: Record<string, boolean>,
  populationData: { data: Population; id: number }[],
  selectPrefId: string,
) => {
  const [populationState, setPopulationState] = useState<ChartDataset>();

  const population: ChartDataset = {
    elderly: [],
    general: [],
    productive: [],
    young: [],
  };
  const yearLabels = new Set<string>();
  const prefResult = prefectures.result;
  const selectPref = prefResult.filter((pref) => checkedItems[pref.prefCode]);

  const selectData = selectPref.map((pref) => {
    const selectPrefPopulation = populationData.find((d) => pref.prefCode === d.id);
    const data = selectPrefPopulation?.data.result.data;
    return {
      populationData: data,
      prefName: pref.prefName,
    };
  });

  selectData.map((data) => {
    data.populationData?.map((d) => {
      d.data.map((v) => yearLabels.add(v.year.toString()));

      const color = randomColorString();
      const dataset = {
        backgroundColor: color,
        borderColor: color,
        data: d.data.map((v) => v.value),
        label: data.prefName,
      };

      switch (d.label) {
        case "総人口":
          population.general.push(dataset);
          break;
        case "年少人口":
          population.young.push(dataset);
          break;
        case "生産年齢人口":
          population.productive.push(dataset);
          break;
        case "老年人口":
          population.elderly.push(dataset);
          break;
        default:
          break;
      }
    });
  });
  useEffect(() => {
    setPopulationState({ ...populationState, ...population });
  }, [checkedItems]);

  return { population, yearLabels };
};
