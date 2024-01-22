import React from "react";
import "../../../variables.scss"
import "../../../utils.scss"
import PropTypes from "prop-types";
import {Style} from "../../types";
import {Sizes} from "../../types";

export interface argsTypes {
    label: string;
    style: Style;
    handleClick?: () => void;
}

const FilterPill = (props: argsTypes) => {
    const style: Style = {
        className: props.style.className ? props.style.className : "",
        backgroundColor: props.style.backgroundColor ? props.style.backgroundColor : "blue_100_bg",
        cursor: props.style.cursor ? props.style.cursor : "pointer",
        radius: props.style.radius ? props.style.radius : "desktop_radius_full",
        paddingHorizontal: props.style.paddingHorizontal ? props.style.paddingHorizontal : "desktop_padding_300_horizontal",
        paddingVertical: props.style.paddingVertical ? props.style.paddingVertical : "desktop_padding_100_vertical",
        hoverBgColor: props.style.hoverColor ? props.style.hoverColor : "blue_200_bg_hover",
        transition: props.style.transition ? props.style.transition : "transition_1",
        typo: props.style.typo ? props.style.typo : "paragraph_S",
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
        <span
            onClick={handleClick}
            className={stringStyle}
        >
            {props.label}
        </span>
    );
};

FilterPill.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    handleClick: PropTypes.func,
    size: Sizes,
}

export default FilterPill;