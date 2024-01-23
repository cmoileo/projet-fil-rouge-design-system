import React from 'react';
import PropTypes from 'prop-types';

interface Style {
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    border?: string;
    radius?: string;
    padding?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingHorizontal?: string;
    paddingVertical?: string;
    margin?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginHorizontal?: string;
    marginVertical?: string;
    width?: string;
    height?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flexWrap?: string;
    boxShadow?: string;
    typo?: string;
    transition?: string;
    hoverBgColor?: string;
    hoverColor?: string;
    borderWith?: string;
    borderColor?: string;
    hoverBorderColor?: string;
    [key: string]: string | undefined;
}
declare enum Sizes {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = "XL"
}

interface argsTypes$2 {
    label: string;
    style: Style;
    handleClick?: () => void;
    size?: Sizes;
}
declare const MainButton: {
    (props: argsTypes$2): React.JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
        style: PropTypes.Requireable<object>;
        handleClick: PropTypes.Requireable<(...args: any[]) => any>;
        size: typeof Sizes;
    };
};

interface argsTypes$1 {
    label: string;
    style: Style;
    handleClick?: () => void;
}
declare const SecondaryButton: {
    (props: argsTypes$1): React.JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
        style: PropTypes.Requireable<object>;
        handleClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
};

interface argsTypes {
    label: string;
    style: Style;
    handleClick?: () => void;
}
declare const FilterPill: {
    (props: argsTypes): React.JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
        style: PropTypes.Requireable<object>;
        handleClick: PropTypes.Requireable<(...args: any[]) => any>;
        size: typeof Sizes;
    };
};

export { FilterPill, MainButton, SecondaryButton };
