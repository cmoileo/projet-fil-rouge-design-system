import React from "react";
import "../../../variables.scss"
import "../../../utils.scss"
import PropTypes from "prop-types";

export interface argsTypes {
    label: string;
    style?: string;
    handleClick?: () => void;
}

const Button = (props: argsTypes) => {
    const style = props.style ? props.style : "";

    const handleClick = () => {
        if (props.handleClick) {
            props.handleClick();
        }
    };

    return (
        <button
            type="submit"
            onClick={handleClick}
            className={style}
        >
            {props.label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;