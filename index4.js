const refsButtonDescrement = document.querySelector('[data-action="decrement"]');
const refsButtonIncrement = document.querySelector('[data-action="increment"]');
const refsSpan = document.querySelector('#value');

refsButtonDescrement.addEventListener('click', onBtnDescrementClick);
refsButtonIncrement.addEventListener('click', onBtnIncrementClick);

let CounterValue = 0;

function onBtnDescrementClick() {
    CounterValue = CounterValue - 1;
    refsSpan.innerHTML = CounterValue;
};

onBtnDescrementClick()

function onBtnIncrementClick() {
    CounterValue += 1;
    refsSpan.innerHTML = CounterValue;
};

onBtnIncrementClick()
console.log(refsButtonDescrement)



