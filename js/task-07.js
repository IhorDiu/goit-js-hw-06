

const sizeControl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');


sizeControl.addEventListener('input', event => 
     outputText.style.fontSize =
    `${event.currentTarget.value}px`
);



