// Let size be between 1 to 100 only
// Create a webpage with a 16x16 grid of square divs.
const width = 960;
const height = 760;

const container = document.querySelector("#container");
const size = 2;
const divWidth = width/size, divHeight = height/size;

container.style.setProperty('--grid-width', width + 'px');
container.style.setProperty('--grid-height', height + 'px');

function handleEvent(event) {
  if (event.type === "mouseenter") {
    /* handle a full screen toggle */
    event.target.style.setProperty('--grid-color', 'black');
  } else {
    /* handle a full screen toggle error */
    console.log('he')
  }
}

for(let i = 0; i < size; i++) { //row
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("outer")
    container.appendChild(outerDiv);

    for(let j = 0; j < size; j++) { //col
        const innerDiv = document.createElement("div");
        //innerDiv.textContent = "o";
        innerDiv.classList.add("inner")
        innerDiv.addEventListener('mouseenter', handleEvent);
        outerDiv.appendChild(innerDiv);
    }
}

container.style.setProperty('--cell-width', divWidth + 'px');
container.style.setProperty('--cell-height', divHeight + 'px');

