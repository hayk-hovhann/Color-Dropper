

const liAlphaColor = ()=>{

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.id = "alphaColor"
    span.className = "sample"

    const div = document.createElement('div');
    div.className = "sampleLabel"
    div.innerText = "alphaColor"


    const divAlphaColorRGBColor = document.createElement('div');
    divAlphaColorRGBColor.className = "sampleCode"
    divAlphaColorRGBColor.id = "alphaColorCode"
    divAlphaColorRGBColor.innerText = "\\rrgba(0, 0, 0, 0.00)"

    li.appendChild(span)
    li.appendChild(div)
    li.appendChild(divAlphaColorRGBColor)

    return {
        li,
        span,
        divAlphaColorRGBColor
    }
}

export default liAlphaColor