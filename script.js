// Let size be between 1 to 100 only
// Create a webpage with a 16x16 grid of square divs.
const width = 700;
const height = 500;

const container = document.querySelector("#container");
let marginOffset = null, divWidth = null, divHeight = null;

container.style.setProperty('--grid-width', width + 'px');
container.style.setProperty('--grid-height', height + 'px');

let renderedInner = null;

function renderGrid(newSize) {
  if(container.childElementCount !== null) {
    container.replaceChildren();
  }

  for(let i = 0; i < newSize; i++) { //row
      const outerDiv = document.createElement("div");
      outerDiv.classList.add("outer")
      container.appendChild(outerDiv);

      for(let j = 0; j < newSize; j++) { //col
          const innerDiv = document.createElement("div");
          //innerDiv.textContent = "o";
          innerDiv.classList.add("inner")
          innerDiv.addEventListener('mouseenter', handleEvent);
          outerDiv.appendChild(innerDiv);
      }
  }

  marginOffset = newSize*2;
  divWidth = (width-marginOffset)/newSize, divHeight = (height-marginOffset)/newSize;

  container.style.setProperty('--cell-width', divWidth + 'px');
  container.style.setProperty('--cell-height', divHeight + 'px');

  renderedInner = document.querySelectorAll(".inner"); // save rendered inner
  console.log(renderedInner);
}

renderGrid(16);

const btnCont = document.querySelector("#btn-cont");

const newSizeBtn = document.createElement("button");
newSizeBtn.textContent = "Select grid size";
btnCont.appendChild(newSizeBtn);

newSizeBtn.addEventListener('click', changeSize);

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear sketch";
btnCont.appendChild(clearBtn);

clearBtn.addEventListener('click', clearGrid);

function changeSize(event) {
  event.preventDefault();

  let invalidSize = true;
  while(invalidSize) {
    const newSize = prompt("Enter new grid size ");
    if(newSize < 1 || newSize > 100 || isNaN(newSize)) {
      alert("Invalid size. Enter from [1,100] only.")
    }
    else {
      size = newSize;
      renderGrid(size);
      invalidSize = false;
    }

  }
}

function handleEvent(event) {
  event.target.style.setProperty('--grid-color', 'black');
}

function clearGrid(event) {
  event.preventDefault();
  
  renderedInner.forEach(inner => {
    inner.style.backgroundColor = "white";
  })
}