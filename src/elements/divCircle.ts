

const divCircle = () => {

    const div = document.createElement('div');

    const circumference = document.createElement('div');
    div.appendChild(circumference)

    return {
        div,
        circumference
    }
}

export default divCircle;