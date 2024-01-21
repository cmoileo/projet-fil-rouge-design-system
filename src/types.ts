export interface Style {
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

export enum Sizes {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
}