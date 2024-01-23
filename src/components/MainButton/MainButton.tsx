import React from "react";
import PropTypes from "prop-types";
import {Style} from "../../types";
import {Sizes} from "../../types";
import "../../../variables.scss"
import "../../../utils.scss"

export interface argsTypes {
    label: string;
    style: Style;
    handleClick?: () => void;
    size?: Sizes;
}

const MainButton = (props: argsTypes) => {
    const style: Style = {
        className: props.style.className ? props.style.className : "",
        backgroundColor: props.style.backgroundColor ? props.style.backgroundColor : "blue_600_bg",
        radius: props.style.radius ? props.style.radius : "radius_100",
        color: props.style.color ? props.style.color : "white",
        paddingHorizontal: props.style.paddingHorizontal ? props.style.paddingHorizontal : "padding_400_horizontal",
        paddingVertical: props.style.paddingVertical ? props.style.paddingVertical : "padding_100_vertical",
        cursor: props.style.cursor ? props.style.cursor : "pointer",
        border: props.style.border ? props.style.border : "border_none",
        typo: props.size ? `paragraph_${props.size}` : "paragraph_XL",
        transition: props.style.transition ? props.style.transition : "transition_1",
        hoverBgColor: props.style.hoverColor ? props.style.hoverColor : "transparent_bg_hover",
        hoverColor: props.style.hoverColor ? props.style.hoverColor : "blue_600_hover",
        borderColor: props.style.borderColor ? props.style.borderColor : "blue_600_border",
        hoverBorderColor: props.style.hoverBorderColor ? props.style.hoverBorderColor : "blue_600_border_hover",
        borderWith: props.style.borderWith ? props.style.borderWith : "border_width_200",
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

MainButton.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    handleClick: PropTypes.func,
    size: Sizes,
}

export default MainButton;