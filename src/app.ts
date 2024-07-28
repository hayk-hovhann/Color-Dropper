import divCircle from "./elements/divCircle";
import imageContainer from "./elements/imageContainer";
import ulElement from "./elements/ulElement";
import {rgbToHex} from "./helpers";

export default () => {

    const {
        ul,
        liSolidWeightedAPI,
        liSolidColorAPI,
        liAlphaColorAPI} = ulElement()

    const divCircleAPI = divCircle()
    const imageContainerAPI = imageContainer()

    const canvas = document.createElement('canvas');

    document.addEventListener('DOMContentLoaded', () => {
        const context = canvas.getContext('2d');


        const width = imageContainerAPI.image.width;
        const height = imageContainerAPI.image.height;

        const MIN_X = imageContainerAPI.image.offsetLeft;
        const MAX_X = MIN_X + width - 1;
        const MIN_Y = imageContainerAPI.image.offsetTop;
        const MAX_Y = MIN_Y + height - 1;

        canvas.width = width;
        canvas.height = height;

        context.drawImage(imageContainerAPI.image, 0, 0, width, height);

        const imageDataData = context.getImageData(0, 0, width, height).data;

        function sampleColor(clientX: number, clientY: number) {
            if (clientX < MIN_X || clientX > MAX_X || clientY < MIN_Y || clientY > MAX_Y) {
                requestAnimationFrame(() => {
                    divCircleAPI.div.style.transform = `translate(${ clientX }px, ${ clientY }px)`;
                    liSolidColorAPI.divSolidRGBColor.innerText = liSolidColorAPI.span.style.background = 'rgb(0, 0, 0)';
                    liAlphaColorAPI.divAlphaColorRGBColor.innerText = liAlphaColorAPI.span.style.background = 'rgba(0, 0, 0, 0.00)';
                    liSolidWeightedAPI.divSolidWeightedRGBColor.innerText = liSolidWeightedAPI.span.style.background = 'rgb(0, 0, 0)';
                    divCircleAPI.circumference.style.borderColor = "black"
                    imageContainerAPI.hash.innerHTML = "#ffffff"
                });

                return;
            }

            const imageX = clientX - MIN_X;
            const imageY = clientY - MIN_Y;

            const i = (imageY * width + imageX) * 4;

            // A single pixel (R, G, B, A) will take 4 positions in the array:
            const R = imageDataData[i];
            const G = imageDataData[i + 1];
            const B = imageDataData[i + 2];
            const A = imageDataData[i + 3] / 255;
            const iA = 1 - A;

            // Alpha-weighted color:
            const wR = (R * A + 255 * iA) | 0;
            const wG = (G * A + 255 * iA) | 0;
            const wB = (B * A + 255 * iA) | 0;

            // Update UI:
            requestAnimationFrame((params) => {
                console.log(params)
                divCircleAPI.div.style.transform = `translate(${ clientX }px, ${ clientY }px)`;

                liSolidColorAPI.divSolidRGBColor.innerText = liSolidColorAPI.span.style.background
                    = `rgb(${ R }, ${ G }, ${ B })`;

                liAlphaColorAPI.divAlphaColorRGBColor.innerText = liAlphaColorAPI.span.style.background
                    = `rgba(${ R }, ${ G }, ${ B }, ${ A.toFixed(2) })`;

                liSolidWeightedAPI.divSolidWeightedRGBColor.innerText = liSolidWeightedAPI.span.style.background
                    = `rgb(${ wR }, ${ wG }, ${ wB })`;
                divCircleAPI.circumference.style.borderColor = rgbToHex(wR, wG, wB)
                imageContainerAPI.hash.innerHTML = rgbToHex(wR, wG, wB)
            });
        }

        document.onmousemove = (e) => {
            if (divCircleAPI.div.className) sampleColor(e.clientX, e.clientY)
        };

        imageContainerAPI.dropper.onclick = () => {
            const body = document.body

            body.classList.toggle('cursor-none');
            divCircleAPI.div.classList.toggle('divCircle')
            divCircleAPI.circumference.classList.toggle('circumference')
        }

        sampleColor(MIN_X, MIN_Y);
    });

    const body = document.body;
    body.appendChild(imageContainerAPI.imageContainer)
    body.appendChild(divCircleAPI.div)
    body.appendChild(ul)

    return body
};