import liSolidColor from "./liSolidColor";
import liAlphaColor from "./liAlphaColor";
import liSolidWeighted from "./liSolidWeighted";


const ulElement = () => {
    const liSolidColorAPI = liSolidColor()
    const liAlphaColorAPI = liAlphaColor()
    const liSolidWeightedAPI = liSolidWeighted()

    const ul = document.createElement('ul');
    ul.id= "samples"

    ul.appendChild(liSolidColorAPI.li)
    ul.appendChild(liAlphaColorAPI.li)
    ul.appendChild(liSolidWeightedAPI.li)

    return {
        ul,
        liSolidColorAPI,
        liAlphaColorAPI,
        liSolidWeightedAPI
    }
}

export default ulElement