import React from "react";
import PropTypes from "prop-types";
import { Style } from "../../types";
import { Sizes } from "../../types";
export interface argsTypes {
    label: string;
    style: Style;
    handleClick?: () => void;
    size?: Sizes;
}
declare const MainButton: {
    (props: argsTypes): React.JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
        style: PropTypes.Requireable<object>;
        handleClick: PropTypes.Requireable<(...args: any[]) => any>;
        size: typeof Sizes;
    };
};
export default MainButton;
