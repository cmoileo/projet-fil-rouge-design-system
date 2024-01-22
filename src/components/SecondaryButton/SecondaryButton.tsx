import React from "react";
import "../../../variables.scss"
import "../../../utils.scss"
import PropTypes from "prop-types";
import {Style} from "../../types";

export interface argsTypes {
    label: string;
    style: Style;
    handleClick?: () => void;
}

const SecondaryButton = (props: argsTypes) => {
    const style: Style = {
        className: props.style.className && props.style ? props.style.className : "",
        backgroundColor: props.style.backgroundColor ? props.style.backgroundColor : "transparent_bg",
        radius: props.style.radius ? props.style.radius : "desktop_radius_100",
        color: props.style.color ? props.style.color : "grey_400",
        paddingHorizontal: props.style.paddingHorizontal ? props.style.paddingHorizontal : "desktop_padding_400_horizontal",
        paddingVertical: props.style.paddingVertical ? props.style.paddingVertical : "desktop_padding_100_vertical",
        cursor: props.style.cursor ? props.style.cursor : "pointer",
        border: props.style.border ? props.style.border : "border_none",
        typo: props.style.typo ? props.style.typo : "paragraph_XL",
        transition: props.style.transition ? props.style.transition : "transition_1",
        hoverBgColor: props.style.hoverColor ? props.style.hoverColor : "grey_200_bg_hover",
        hoverColor: props.style.hoverColor ? props.style.hoverColor : "grey_900",
        borderColor: props.style.borderColor ? props.style.borderColor : "blue_600_border",
        hoverBorderColor: props.style.hoverBorderColor ? props.style.hoverBorderColor : "blue_600_border_hover",
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

SecondaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    handleClick: PropTypes.func,
}

export default SecondaryButton;