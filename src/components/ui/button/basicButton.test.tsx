import { render, screen } from "@testing-library/react";

import { BasicButton } from "./basicButton";

describe("BasicButton", () => {
  test("正常にレンダリングが行われる", () => {
    render(<BasicButton text="test" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: "test" });
    expect(button).toBeInTheDocument();
  });

  test("text propが正しく表示される", () => {
    render(<BasicButton text="test" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: "test" });
    expect(button).toHaveTextContent("test");
  });

  test("onClick propが正しく動作する", () => {
    const mockOnClick = jest.fn();
    render(<BasicButton text="test" onClick={mockOnClick} />);
    const button = screen.getByRole("button", { name: "test" });
    button.click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
