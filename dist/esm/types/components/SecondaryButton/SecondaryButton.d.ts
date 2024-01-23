import React from "react";
import PropTypes from "prop-types";
import { Style } from "../../types";
export interface argsTypes {
    label: string;
    style: Style;
    handleClick?: () => void;
}
declare const SecondaryButton: {
    (props: argsTypes): React.JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
        style: PropTypes.Requireable<object>;
        handleClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default SecondaryButton;
