import { fireEvent, render, screen } from "@testing-library/react";

import { PrefecturesSelectForm } from "./index";

const mockPrefectures = {
  message: "",
  result: [
    { prefCode: 1, prefName: "北海道" },
    { prefCode: 2, prefName: "青森県" },
  ],
};

function setupMockFunctions() {
  const checkedItems = {};
  const handleChecked = jest.fn();
  const setCheckedItems = jest.fn();
  return { checkedItems, handleChecked, setCheckedItems };
}

describe("PrefecturesSelectForm", () => {
  test("正しい数のチェックボックスをレンダリングする", () => {
    const { checkedItems, handleChecked, setCheckedItems } = setupMockFunctions();
    render(
      <PrefecturesSelectForm
        checkedItems={checkedItems}
        handleChecked={handleChecked}
        prefectures={mockPrefectures}
        setCheckedItems={setCheckedItems}
      />,
    );

    expect(screen.getAllByRole("checkbox").length).toBe(mockPrefectures.result.length);
  });

  test('"クリア" ボタンをクリックするとすべてのチェックボックスの選択が解除される', () => {
    const { checkedItems, handleChecked, setCheckedItems } = setupMockFunctions();
    render(
      <PrefecturesSelectForm
        checkedItems={checkedItems}
        handleChecked={handleChecked}
        prefectures={mockPrefectures}
        setCheckedItems={setCheckedItems}
      />,
    );

    fireEvent.click(screen.getByText("クリア"));
    expect(setCheckedItems).toHaveBeenCalledWith({});
  });
});
