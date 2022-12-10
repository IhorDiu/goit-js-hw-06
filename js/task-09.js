
const ref = {
  bgColor: document.querySelector('.color'),
  widgetBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};

ref.widgetBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  let changeBgColor = getRandomHexColor();
  ref.bgColor.innerHTML = changeBgColor;
  ref.body.style.background = changeBgColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



