import { render } from "@testing-library/react";
import { full_width_text_section } from "./fwtSection";
import FullWidthText from "./FullWidthText";

// useless update for main.
describe("FullWidthText", () => {
  test("renders without crashing", () => {
    render(<FullWidthText section={full_width_text_section} index={0} />);
  });
  test("displays content", () => {
    const { getByText, debug, getByRole } = render(
      <FullWidthText section={full_width_text_section} index={0} />
    );
    ["h1", "h2", "h3", "h4"].forEach((name) => {
      getByRole("heading", { name });
    });

    const bold = getByText("I am bold content");
    expect(bold).toContainHTML("strong");

    const link = getByText("I link to puppies");
    expect(link).toContainHTML("a");
    expect(link).toHaveAttribute("href", "/puppies");
  });
});
