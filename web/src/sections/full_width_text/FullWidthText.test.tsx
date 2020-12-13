import { render } from "@testing-library/react";
import FullWidthText from "./FullWidthText";

describe("FullWidthText", () => {
  it("renders without crashing", () => {
    const section = {
      blockContent: [],
    };
    //@ts-ignore
    render(<FullWidthText section={section} index={0} />);
  });
});
