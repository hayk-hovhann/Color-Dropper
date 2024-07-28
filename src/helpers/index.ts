// Hex color
export const rgbToHex = (r: number,g: number,b: number)=> {
    let rString = r.toString(16);
    let gString= g.toString(16);
    let bString = b.toString(16);

    if (rString.length == 1)
        rString = "0" + rString;
    if (gString.length == 1)
        gString = "0" + gString;
    if (bString.length == 1)
        bString = "0" + bString;

    return "#" + rString + gString + bString;
}