const fs = require('fs');

const jsonFile = fs.readFileSync('./tokens.json', 'utf8');
const tokens = JSON.parse(jsonFile);

const tokensToScss = (tokens) => {
    let scss = '';

    ////////////////////////////////////////////////////////////////
    //////////////////////////// COLORS ////////////////////////////
    ////////////////////////////////////////////////////////////////

    const purples = tokens['Colors/Mode 1']['Purples']

    Object.keys(purples).map((purple) => {
        scss += `$${purple}: ${purples[purple].value};\n`
        scss += `.${purple} {
color: $${purple};
};\n`
        scss += `.${purple}_bg {
background-color: $${purple};
};\n`
        scss += `.${purple}_bg_hover:hover {
background-color: $${purple};
};\n`
        scss += `.${purple}_border {
border-color: $${purple};
};\n`
        scss += `.${purple}_border_hover:hover {
border-color: $${purple};
};\n`
        scss += `.${purple}_hover:hover {
color: $${purple};
};\n`
    })

    const blues = tokens['Colors/Mode 1']['Blues']

    Object.keys(blues).map((blue) => {
        scss += `$${blue}: ${blues[blue].value};\n`
        scss += `.${blue} {
color: $${blue};
};\n`
        scss += `.${blue}_bg {
background-color: $${blue};
};\n`
        scss += `.${blue}_bg_hover:hover {
background-color: $${blue};
};\n`
        scss += `.${blue}_border {
border-color: $${blue};
};\n`
        scss += `.${blue}_border_hover:hover {
border-color: $${blue};
};\n`
        scss += `.${blue}_hover:hover {
color: $${blue};
};\n`
    })

    const greens = tokens['Colors/Mode 1']['Greens']

    Object.keys(greens).map((green) => {
        scss += `$${green}: ${greens[green].value};\n`
        scss += `.${green} {
color: $${green};
};\n`
        scss += `.${green}_bg {
background-color: $${green};
};\n`
        scss += `.${green}_bg_hover:hover {
background-color: $${green};
};\n`
        scss += `.${green}_border {
border-color: $${green};
};\n`
        scss += `.${green}_border_hover:hover {
border-color: $${green};
};\n`
        scss += `.${green}_hover:hover {
color: $${green};
};\n`
    })

    const greys = tokens['Colors/Mode 1']['Greys']

    Object.keys(greys).map((grey) => {
        scss += `$${grey}: ${greys[grey].value};\n`
        scss += `.${grey} {
color: $${grey};
};\n`
        scss += `.${grey}_bg {
background-color: $${grey};
};\n`
        scss += `.${grey}_bg_hover:hover {
background-color: $${grey};
};\n`
        scss += `.${grey}_border {
border-color: $${grey};
};\n`
        scss += `.${grey}_border_hover:hover {
border-color: $${grey};
};\n`
        scss += `.${grey}_hover:hover {
color: $${grey};
};\n`
    })



    ////////////////////////////////////////////////////////////////
    //////////////////////////// SPACING ///////////////////////////
    ////////////////////////////////////////////////////////////////


    const desktopSpacing = tokens['Spacing/Desktop']
    const padding = desktopSpacing['Padding']

    Object.keys(padding).map((pad) => {
        scss += `$desktop_${pad}: ${padding[pad].value};\n`
        scss += `.${pad} {
    @media (min-width: 1024px) {
        padding: $desktop_${pad};
    }
};\n`
        scss += `.${pad}_right {
    @media (min-width: 1024px) {
        padding-right: $desktop_${pad};
    }
};\n`
        scss += `.${pad}_left {
    @media (min-width: 1024px) {
        padding-left: $desktop_${pad};
    }
};\n`
        scss += `.${pad}_top {
    @media (min-width: 1024px) {
        padding-top: $desktop_${pad};
    }
};\n`
        scss += `.${pad}_bottom {
    @media (min-width: 1024px) {
        padding-bottom: $desktop_${pad};
    }
};\n`
        scss += `.${pad}_horizontal {
    @media (min-width: 1024px) {
        padding-left: $desktop_${pad};
        padding-right: $desktop_${pad};
    }
};\n`
        scss += `.${pad}_vertical {
    @media (min-width: 1024px) {
        padding-top: $desktop_${pad};
        padding-bottom: $desktop_${pad};
    }
};\n`
    })

    const margin = desktopSpacing['Margin']

    Object.keys(margin).map((marg) => {
        scss += `$desktop_${marg}: ${margin[marg].value};\n`
        scss += `.${marg} {
    @media (min-width: 1024px) {
        margin: $desktop_${marg};
    }
};\n`
        scss += `.${marg}_right {
    @media (min-width: 1024px) {
        margin-right: $desktop_${marg};
    }
};\n`
        scss += `.${marg}_left {
    @media (min-width: 1024px) {
        margin-left: $desktop_${marg};
    }
};\n`
        scss += `.${marg}_top {
    @media (min-width: 1024px) {
        margin-top: $desktop_${marg};
    }
};\n`
        scss += `.${marg}_bottom {
    @media (min-width: 1024px) {
        margin-bottom: $desktop_${marg};
    }
};\n`
        scss += `.${marg}_horizontal {
    @media (min-width: 1024px) {
        margin-left: $desktop_${marg};
        margin-right: $desktop_${marg};
    }
};\n`
        scss += `.${marg}_vertical {
    @media (min-width: 1024px) {
        margin-top: $desktop_${marg};
        margin-bottom: $desktop_${marg};
    }
};\n`
    })

    const borderRadius = desktopSpacing['Borders']

    Object.keys(borderRadius).map((border) => {
        scss += `$desktop_${border}: ${borderRadius[border].value};\n`
        scss += `.${border} {
    @media (min-width: 1024px) {
        border-radius: $desktop_${border};
    }
};\n`
    })

    const tabletSpacing = tokens['Spacing/Tablet']
    const tabletPadding = tabletSpacing['Padding']

    Object.keys(tabletPadding).map((pad) => {
        scss += `$tablet_${pad}: ${tabletPadding[pad].value};\n`
        scss += `.${pad} {
    @media (max-width: 1023px) {
        padding: $tablet_${pad};
    }
};\n`
        scss += `.${pad}_right {
    @media (max-width: 1023px) {
        padding-right: $tablet_${pad};
    }
};\n`
        scss += `.${pad}_left {
    @media (max-width: 1023px) {
        padding-left: $tablet_${pad};
    }
};\n`
        scss += `.${pad}_top {
    @media (max-width: 1023px) {
        padding-top: $tablet_${pad};
    }
};\n`
        scss += `.${pad}_bottom {
    @media (max-width: 1023px) {
        padding-bottom: $tablet_${pad};
    }
};\n`
        scss += `.${pad}_horizontal {
    @media (max-width: 1023px) {
        padding-left: $tablet_${pad};
        padding-right: $tablet_${pad};
    }
};\n`
        scss += `.${pad}_vertical {
    @media (max-width: 1023px) {
        padding-top: $tablet_${pad};
        padding-bottom: $tablet_${pad};
    }
};\n`
    })

    const tabletMargin = tabletSpacing['Margin']

    Object.keys(tabletMargin).map((marg) => {
        scss += `$tablet_${marg}: ${tabletMargin[marg].value};\n`
        scss += `.${marg} {
    @media (max-width: 1023px) {
        margin: $tablet_${marg};
    }
};\n`
        scss += `.${marg}_right {
    @media (max-width: 1023px) {
        margin-right: $tablet_${marg};
    }
};\n`
        scss += `.${marg}_left {
    @media (max-width: 1023px) {
        margin-left: $tablet_${marg};
    }
};\n`
        scss += `.${marg}_top {
    @media (max-width: 1023px) {
        margin-top: $tablet_${marg};
    }
};\n`
        scss += `.${marg}_bottom {
    @media (max-width: 1023px) {
        margin-bottom: $tablet_${marg};
    }
};\n`
        scss += `.${marg}_horizontal {
    @media (max-width: 1023px) {
        margin-left: $tablet_${marg};
        margin-right: $tablet_${marg};
    }
};\n`
        scss += `.${marg}_vertical {
    @media (max-width: 1023px) {
        margin-top: $tablet_${marg};
        margin-bottom: $tablet_${marg};
    }
};\n`
    })

    const tabletBorderRadius = tabletSpacing['Borders']

    Object.keys(tabletBorderRadius).map((border) => {
        scss += `$tablet_${border}: ${tabletBorderRadius[border].value};\n`
        scss += `.${border} {
    @media (max-width: 1023px) {
        border-radius: $tablet_${border};
    }
};\n`
    })

    const mobileSpacing = tokens['Spacing/Mobile']
    const mobilePadding = mobileSpacing['Padding']

    Object.keys(mobilePadding).map((pad) => {
        scss += `$mobile_${pad}: ${mobilePadding[pad].value};\n`
        scss += `.${pad} {
    @media (max-width: 768px) {
        padding: $mobile_${pad};
    }
};\n`
        scss += `.${pad}_right {
    @media (max-width: 768px) {
        padding-right: $mobile_${pad};
    }
};\n`
        scss += `.${pad}_left {
    @media (max-width: 768px) {
        padding-left: $mobile_${pad};
    }
};\n`
        scss += `.${pad}_top {
    @media (max-width: 768px) {
        padding-top: $mobile_${pad};
    }
};\n`
        scss += `.${pad}_bottom {
    @media (max-width: 768px) {
        padding-bottom: $mobile_${pad};
    }
};\n`
        scss += `.${pad}_horizontal {
    @media (max-width: 768px) {
    padding-left: $mobile_${pad};
    padding-right: $mobile_${pad};
    };
};\n`
        scss += `.${pad}_vertical {
    @media (max-width: 768px) {
        padding-top: $mobile_${pad};
        padding-bottom: $mobile_${pad};
    };
};\n`
    })

    const mobileMargin = mobileSpacing['Margin']

    Object.keys(mobileMargin).map((marg) => {
        scss += `$mobile_${marg}: ${mobileMargin[marg].value};\n`
        scss += `.${marg} {
    @media (max-width: 768px) {
        margin: $mobile_${marg};
    }
};\n`
        scss += `.${marg}_right {
    @media (max-width: 768px) {
        margin-right: $mobile_${marg};
    }
};\n`
        scss += `.${marg}_left {
    @media (max-width: 768px) {
        margin-left: $mobile_${marg};
    }
};\n`
        scss += `.${marg}_top {
    @media (max-width: 768px) {
        margin-top: $mobile_${marg};
    };
};\n`
        scss += `.${marg}_bottom {
    @media (max-width: 768px) {
        margin-bottom: $mobile_${marg};
    };
};\n`
        scss += `.${marg}_horizontal {
    @media (max-width: 768px) {
        margin-left: $mobile_${marg};
        margin-right: $mobile_${marg};
    };
};\n`
        scss += `.${marg}_vertical {
    @media (max-width: 768px) {
        margin-top: $mobile_${marg};
        margin-bottom: $mobile_${marg};
    };
};\n`
    })

    const mobileBorderRadius = mobileSpacing['Borders']

    Object.keys(mobileBorderRadius).map((border) => {
        scss += `$mobile_${border}: ${mobileBorderRadius[border].value};\n`
        scss += `.${border} {
    @media (max-width: 768px) {
        border-radius: $mobile_${border};
    }
};\n`
    })


      //////////////////////////////////////////////////////////////
     //////////////////////////// TYPO /////////////////////////////
    ////////////////////////////////////////////////////////////////


    const typos = tokens['Typos']
    const fontSizes = typos['fontSize']

    Object.keys(fontSizes).map((size) => {
        scss += `$typo_size_${size}: ${fontSizes[size].value}px;\n`
    })

    const fontFamily = typos['fontFamilies']

    Object.keys(fontFamily).map((family) => {
        scss += `$typo_family_${family}: ${fontFamily[family].value};\n`
    })

    const lineHeight = typos['lineHeights']

    Object.keys(lineHeight).map((line) => {
        scss += `$typo_line_${line}: ${lineHeight[line].value};\n`
    })

    const fontWeight = typos['fontWeights']

    Object.keys(fontWeight).map((weight) => {
        scss += `$typo_weight_${weight}: ${fontWeight[weight].value};\n`
    })

    const letterSpacing = typos['letterSpacing']

    Object.keys(letterSpacing).map((letter) => {
        scss += `$typo_letter_${letter}: ${letterSpacing[letter].value};\n`
    })

    const paragraphSpacing = typos['paragraphSpacing']

    Object.keys(paragraphSpacing).map((para) => {
        scss += `$typo_para_${para}: ${paragraphSpacing[para].value};\n`
    })

    const paragraphs = typos['Paragraphs']

    Object.keys(paragraphs).map((para) => {
        const typoName = para
        const typoValue = paragraphs[para].value
        const typoFontFamily = `typo_family_${typoValue['fontFamily'].replace(/[{}]/g, '').split('.')[1]}`
        const typoFontWeight = `typo_weight_${typoValue['fontWeight'].replace(/[{}]/g, '').split('.')[1]}`
        const typoLineHeight = `typo_line_${typoValue['lineHeight'].replace(/[{}]/g, '').split('.')[1]}`
        const typoSize = `typo_size_${typoValue['fontSize'].replace(/[{}]/g, '').split('.')[1]}`
        const typoLetterSpacing = `typo_letter_${typoValue['letterSpacing'].replace(/[{}]/g, '').split('.')[1]}`

        scss += `.${typoName} {
font-family: $${typoFontFamily};
font-weight: $${typoFontWeight};
font-size: $${typoSize};
line-height: $${typoLineHeight};
letter-spacing: $${typoLetterSpacing};
};\n`
    })

    const headings = typos['Headings']

    Object.keys(headings).map((heading) => {
        const typoName = heading
        const typoValue = headings[heading].value
        const typoFontFamily = `typo_family_${typoValue['fontFamily'].replace(/[{}]/g, '').split('.')[1]}`
        const typoFontWeight = `typo_weight_${typoValue['fontWeight'].replace(/[{}]/g, '').split('.')[1]}`
        const typoLineHeight = `typo_line_${typoValue['lineHeight'].replace(/[{}]/g, '').split('.')[1]}`
        const typoSize = `typo_size_${typoValue['fontSize'].replace(/[{}]/g, '').split('.')[1]}`
        const typoLetterSpacing = `typo_letter_${typoValue['letterSpacing'].replace(/[{}]/g, '').split('.')[1]}`

        scss += `.${typoName} {
font-family: $${typoFontFamily};
font-weight: $${typoFontWeight};
font-size: $${typoSize};
line-height: $${typoLineHeight};
letter-spacing: $${typoLetterSpacing};
};\n`
    })



    fs.writeFileSync('./variables.scss', scss);
};

tokensToScss(tokens);