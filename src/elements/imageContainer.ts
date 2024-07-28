import {easterEggs} from "../base64";
import dropperIcon from "../assets/IconColorPicker.svg";


const imageContainer = () => {

    const imageContainer = document.createElement('div');
    imageContainer.className = "imageContainer"

    const image = document.createElement("img")
    image.id= "image"
    image.src = easterEggs

    const dropperActionsContainer = document.createElement('div');
    dropperActionsContainer.className = "dropperActionsContainer";

    const dropper = document.createElement('div');
    dropper.className = "dropperContainer"
    dropper.innerHTML = dropperIcon

    const hash = document.createElement('div');
    hash.className = "hashContainer"
    hash.innerText = 'No color yet'

    dropperActionsContainer.appendChild(dropper)
    dropperActionsContainer.appendChild(hash)
    imageContainer.appendChild(dropperActionsContainer)
    imageContainer.appendChild(image)

    return {
        imageContainer,
        image,
        hash,
        dropper
    }
}

export default imageContainer;