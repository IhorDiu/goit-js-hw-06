const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', checkTextInput);

    
function checkTextInput(event) {
    
    return event.currentTarget.value.length
      === Number(textInput.dataset.length)
      ? toggleClass(textInput, 'valid', 'invalid')
      : toggleClass(textInput, 'invalid', 'valid');
};

function toggleClass(ref, add, rem) {
  ref.classList.add(add);
  ref.classList.remove(rem);
}
