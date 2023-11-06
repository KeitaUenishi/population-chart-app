import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

import { CheckBox } from "../checkbox";

describe("CheckBox", () => {
  test("正常にレンダリングが行われる", () => {
    render(<CheckBox checked={false} id={"test-checkbox"} label={"test"} value="1" onChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox", { name: "test" });
    expect(checkbox).toBeInTheDocument();
  });

  test("クリック時にonChangeハンドラが呼ばれる", () => {
    const handleChange = jest.fn();
    render(<CheckBox checked={false} id={"test-checkbox"} label={"test"} value="1" onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("クリック時に正しく値が変化している", () => {
    const Wrap = () => {
      const [isChecked, setIsChecked] = useState(false);
      const handleChange = jest.fn((event) => setIsChecked(event.target.checked));
      return <CheckBox checked={isChecked} id={"test-checkbox"} label={"test"} value="1" onChange={handleChange} />;
    };

    render(<Wrap />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("正しいラベルテキストを表示している", () => {
    const labelText = "test";
    render(<CheckBox checked={false} id={"test-checkbox"} label={labelText} value="1" onChange={() => {}} />);
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });
});
