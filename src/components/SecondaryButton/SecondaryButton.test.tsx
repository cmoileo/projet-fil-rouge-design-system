import React from "react";
import { render } from "@testing-library/react";

import SecondaryButton from "./SecondaryButton";
import MainButton from "../MainButton";

describe("SecondaryButton", () => {
    it("should render successfully", () => {
        render(<SecondaryButton style={{}} label="Hello World" />);
    });
});