// Лічильник складається зі спану і кнопок,
//  які по кліку повинні збільшувати і зменшувати
//   його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися
//  поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині 
// яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector('#value');
const addBtn = document.querySelector('[data-action="increment"]');
const subtractBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;


const onCounterFoo = function () {
   this.dataset.action === "increment" ? counterValue += 1 : counterValue -= 1;
   counter.textContent = counterValue;
};

addBtn.addEventListener('click', onCounterFoo);
subtractBtn.addEventListener('click', onCounterFoo);

