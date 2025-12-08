// Create a webpage with a 16x16 grid of square divs.
const width = 700;
const height = 500;

const container = document.querySelector("#container");
const size = 20;
const divWidth = width/size, divHeight = height/size;

container.style.setProperty('--grid-width', width + 'px');
container.style.setProperty('--grid-height', height + 'px');

for(let i = 0; i < size; i++) { //row
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("outer")
    container.appendChild(outerDiv);

    for(let j = 0; j < size; j++) { //col
        const innerDiv = document.createElement("div");
        innerDiv.textContent = "o";
        innerDiv.classList.add("inner")
        outerDiv.appendChild(innerDiv);
    }
}

container.style.setProperty('--cell-width', divWidth + 'px');
container.style.setProperty('--cell-height', divHeight + 'px');

