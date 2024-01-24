import React from "react";
import PropTypes from "prop-types";
import { Style } from "../../types";
import { Sizes } from "../../types";
import "../../../variables.scss";
import "../../../utils.scss";
import "./ProgressBar.scss";


export interface argsTypes {
    pt: number;
    style: Style;
    handleClick?: () => void;
}

const ProgressBar = (props: argsTypes) => {
    const style: Style = {
        className: props.style.className ? props.style.className : "progress-bar_c",
        typo: props.style.typo ? props.style.typo : "paragraph_M",
    }

    const stringStyle = Object.keys(style).map((key: string) => {
        return `${style[key]}` as string;
    }).join(" ");

    const handleClick = () => {
        if (props.handleClick) {
            props.handleClick();
        }
    };

    return (
        <div
            onClick={handleClick}
            className={stringStyle}
        >
            {props.pt}%
            <div className="bar"></div>
        </div>
    );
};

ProgressBar.propTypes = {
    pt: PropTypes.number.isRequired,
    style: PropTypes.object,
    handleClick: PropTypes.func,
    size: Sizes,
}

export default ProgressBar;