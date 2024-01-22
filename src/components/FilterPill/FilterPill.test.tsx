import React from "react";
import { render } from "@testing-library/react";

import FilterPill from "./FilterPill";

describe("FilterPill", () => {
    it("should render successfully", () => {
        render(<FilterPill style={{}} label="Hello World" />);
    });
});