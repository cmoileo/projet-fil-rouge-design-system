const fs = require('fs');

const jsonFile = fs.readFileSync('./tokens.json', 'utf8');
const tokens = JSON.parse(jsonFile);

const tokensToScss = (tokens) => {
    let scss = '';
    const purples = tokens['Colors/Mode 1']['Purples']

    Object.keys(purples).map((purple) => {
        scss += `$${purple}: ${purples[purple].value};\n`
    })

    const blues = tokens['Colors/Mode 1']['Blues']

    Object.keys(blues).map((blue) => {
        scss += `$${blue}: ${blues[blue].value};\n`
    })

    const greens = tokens['Colors/Mode 1']['Greens']

    Object.keys(greens).map((green) => {
        scss += `$${green}: ${greens[green].value};\n`
    })

    const greys = tokens['Colors/Mode 1']['Greys']

    Object.keys(greys).map((grey) => {
        scss += `$${grey}: ${greys[grey].value};\n`
    })

    const desktopSpacing = tokens['Spacing/Desktop']
    const padding = desktopSpacing['Padding']

    Object.keys(padding).map((pad) => {
        scss += `$desktop_${pad}: ${padding[pad].value};\n`
    })

    const margin = desktopSpacing['Margin']

    Object.keys(margin).map((marg) => {
        scss += `$desktop_${marg}: ${margin[marg].value};\n`
    })

    const borderRadius = desktopSpacing['Borders']

    Object.keys(borderRadius).map((border) => {
        scss += `$desktop_${border}: ${borderRadius[border].value};\n`
    })

    const tabletSpacing = tokens['Spacing/Tablet']
    const tabletPadding = tabletSpacing['Padding']

    Object.keys(tabletPadding).map((pad) => {
        scss += `$tablet_${pad}: ${tabletPadding[pad].value};\n`
    })

    const tabletMargin = tabletSpacing['Margin']

    Object.keys(tabletMargin).map((marg) => {
        scss += `$tablet_${marg}: ${tabletMargin[marg].value};\n`
    })

    const tabletBorderRadius = tabletSpacing['Borders']

    Object.keys(tabletBorderRadius).map((border) => {
        scss += `$tablet_${border}: ${tabletBorderRadius[border].value};\n`
    })

    const mobileSpacing = tokens['Spacing/Mobile']
    const mobilePadding = mobileSpacing['Padding']

    Object.keys(mobilePadding).map((pad) => {
        scss += `$mobile_${pad}: ${mobilePadding[pad].value};\n`
    })

    const mobileMargin = mobileSpacing['Margin']

    Object.keys(mobileMargin).map((marg) => {
        scss += `$mobile_${marg}: ${mobileMargin[marg].value};\n`
    })

    const mobileBorderRadius = mobileSpacing['Borders']

    Object.keys(mobileBorderRadius).map((border) => {
        scss += `$mobile_${border}: ${mobileBorderRadius[border].value};\n`
    })

    fs.writeFileSync('./variables.scss', scss);
};

tokensToScss(tokens);