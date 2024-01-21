import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export interface argsTypes {
    label: string;
    color?: string;
    radius?: string;
    className?: string;
    handleClick?: () => void;
}

const Button = (props: argsTypes) => {
    const style = {
        backgroundColor: props.color,
        borderRadius: props.radius
    };

    const handleClick = () => {
        if (props.handleClick) {
            props.handleClick();
        }
    };

    return (
        <button
            type="submit"
            onClick={handleClick}
            style={style}
            className="main-button"
        >
            {props.label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    radius: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;