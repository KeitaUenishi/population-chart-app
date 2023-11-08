import { renderHook } from "@testing-library/react";

import {
  checkedItemsDefault,
  populationStateDefault,
  prefectures,
  checkedItems,
  populationState,
  resultPopulation,
} from "@/hooks/__mocks__/useChartData";
import { useChartDataPreparation } from "@/hooks/useChartData";

describe("useChartData hook", () => {
  test("初期表示時に返却されるデータが想定通りであること", () => {
    const { result } = renderHook(() => {
      return useChartDataPreparation(prefectures, checkedItemsDefault, populationStateDefault);
    });

    expect(result.current.population).toEqual({
      elderly: [],
      general: [],
      productive: [],
      young: [],
    });

    expect(result.current.yearLabels).toEqual(new Set<string>());
  });

  test("チェックボックスが2つ選択された時に返却されるデータが想定通りであること", () => {
    const { result } = renderHook(() => {
      return useChartDataPreparation(prefectures, checkedItems, populationState);
    });

    expect(result.current.population).toEqual(resultPopulation);

    expect(result.current.yearLabels).toEqual(
      new Set<string>([
        "1960",
        "1965",
        "1970",
        "1975",
        "1980",
        "1985",
        "1990",
        "1995",
        "2000",
        "2005",
        "2010",
        "2015",
        "2020",
        "2025",
        "2030",
        "2035",
        "2040",
        "2045",
      ]),
    );
  });
});
