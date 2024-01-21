import React from "react";
import "../../../variables.scss"
import "../../../utils.scss"
import PropTypes from "prop-types";

export interface Style {
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    border?: string;
    radius?: string;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flexWrap?: string;
    boxShadow?: string;
    [key: string]: string | undefined;
}
export interface argsTypes {
    label: string;
    style: Style;
    handleClick?: () => void;
}

const Button = (props: argsTypes) => {
    const style: Style = {
        backgroundColor: props.style.backgroundColor ? props.style.backgroundColor : "blue_600_bg",
        radius: props.style.radius ? props.style.radius : "desktop_radius_100",
        color: props.style.color ? props.style.color : "white",
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
        <button
            type="submit"
            onClick={handleClick}
            className={stringStyle}
        >
            {props.label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    handleClick: PropTypes.func
}

export default Button;