const add = document.querySelector('.add') 
const minus = document.querySelector('.minus') 
const number = document.querySelector('.cnt') 

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

function handleAdd() {
  count += 1;
  updateText();
}

function handleMinus() {
  count -= 1;
  updateText();
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)