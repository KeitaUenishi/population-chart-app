import { fireEvent, render, screen } from "@testing-library/react";

import { PopulationTypeSelectForm } from "./index";

import { chartTitle } from "@/constants";

jest.mock("@/constants", () => ({
  ...jest.requireActual("@/constants"),
}));

describe("PopulationTypeSelectForm", () => {
  test("セレクトボックスが正常にレンダリングされている", () => {
    const setSelectChartType = jest.fn();
    render(<PopulationTypeSelectForm setSelectChartType={setSelectChartType} />);

    const selectBox = screen.getByRole("combobox");
    expect(selectBox).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(chartTitle.length);
  });

  test("表示データ選択のタイトルが正常にレンダリングされている", () => {
    const setSelectChartType = jest.fn();
    render(<PopulationTypeSelectForm setSelectChartType={setSelectChartType} />);

    const title = screen.getByText("表示データ選択");
    expect(title).toBeInTheDocument();
  });

  test("セレクトボックスの値を変更した際、setSelectChartTypeに選択した値が渡される", () => {
    const setSelectChartType = jest.fn();
    render(<PopulationTypeSelectForm setSelectChartType={setSelectChartType} />);

    const selectBox = screen.getByRole("combobox");

    fireEvent.change(selectBox, { target: { value: chartTitle[1].type } });

    expect(setSelectChartType).toHaveBeenCalledWith(chartTitle[1].type);
  });
});
