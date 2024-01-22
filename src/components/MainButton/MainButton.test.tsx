import React from "react";
import { render } from "@testing-library/react";

import MainButton from "./MainButton";

describe("MainButton", () => {
  it("should render successfully", () => {
    render(<MainButton style={{}} label="Hello World" />);
  });
});