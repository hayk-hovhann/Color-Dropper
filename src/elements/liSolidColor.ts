

const liSolidColor = () => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.id = "solidColor"
    span.className = "sample"

    const divSolidCode = document.createElement('div');
    divSolidCode.className = "sampleLabel"
    divSolidCode.innerText = "solidColor"


    const divSolidRGBColor = document.createElement('div');
    divSolidRGBColor.id = "solidColorCode"
    divSolidRGBColor.className = "sampleLabel"
    divSolidRGBColor.innerText = "\\rgb(0, 0, 0)"

    li.appendChild(span)
    li.appendChild(divSolidCode)
    li.appendChild(divSolidRGBColor)

    return {
        li,
        span,
        divSolidRGBColor
    }
}

export default liSolidColor