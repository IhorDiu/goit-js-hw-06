
const ref = {
  counterValue: document.querySelector('#controls input'),
  createBoxesBtn: document.querySelector('[data-create]'),
  destroyBoxesBtn: document.querySelector('[data-destroy]'),
  boxesMarkup: document.querySelector('#boxes'),
};

ref.createBoxesBtn.addEventListener('click', onCreateBoxesBtn);
ref.destroyBoxesBtn.addEventListener('click', onDestroyBoxesBtn);

function createBoxes(amount) {
  let makeup = '';
  let step = 0;
  for (let i = 0; i < amount; i += 1) { 
  step = 30 + 10 * i;
  makeup += `<div style="width:${step}px; height:${step}px; 
  background-color: ${getRandomHexColor()}"></div>`;
  }
  return makeup;
};

 function onCreateBoxesBtn() {
 const counter = ref.counterValue.valueAsNumber;
 ref.boxesMarkup.insertAdjacentHTML('beforeend', createBoxes(counter));
};

function onDestroyBoxesBtn() {
ref.counterValue.value = '';
ref.boxesMarkup.innerHTML = '';
};

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

