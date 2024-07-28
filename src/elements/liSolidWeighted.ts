

const liSolidWeighted = () => {

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.id = "solidWeighted"
    span.className = "sample"

    const div = document.createElement('div');
    div.className = "sampleLabel"
    div.innerText = "solidWeighted (with white)"

    const divSolidWeightedRGBColor = document.createElement('div');
    divSolidWeightedRGBColor.className = "sampleLabel"
    divSolidWeightedRGBColor.id = "solidWeightedCode"
    divSolidWeightedRGBColor.innerText = "\\rgb(0, 0, 0)"

    li.appendChild(span)
    li.appendChild(div)
    li.appendChild(divSolidWeightedRGBColor)

    return {
        li,
        span,
        divSolidWeightedRGBColor
    }
}

export default liSolidWeighted;