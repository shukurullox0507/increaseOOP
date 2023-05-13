"use strict";
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const timeInput = document.querySelector('.input-time');
const stepInput = document.querySelector('.input-step');
const switchBtn = document.querySelector('.switch');
const checkBox = document.querySelector(".checkbox");
const clearBtn = document.querySelector('.clear');
const counter = document.querySelector('.counter');
let timeValue = timeInput === null || timeInput === void 0 ? void 0 : timeInput.value;
let stepValue = stepInput === null || stepInput === void 0 ? void 0 : stepInput.value;
// let counterValue = counter?.innerText
let increment_decrement = 0;
let disableBtn = true;
let increaseTimeId;
let decreaseTimeId;
increaseBtn === null || increaseBtn === void 0 ? void 0 : increaseBtn.addEventListener('click', () => {
    if (disableBtn && Number(stepInput === null || stepInput === void 0 ? void 0 : stepInput.value) > 0) {
        increaseTimeId = setTimeout(() => {
            increment_decrement += Number(stepInput === null || stepInput === void 0 ? void 0 : stepInput.value);
            counter.innerText = String(increment_decrement);
            // if (increment_decrement <=0) {
            //     counter!.innerText = ""
            // }
        }, parseInt(timeInput.value) * 1000);
    }
});
decreaseBtn === null || decreaseBtn === void 0 ? void 0 : decreaseBtn.addEventListener('click', () => {
    if (disableBtn && Number(stepInput === null || stepInput === void 0 ? void 0 : stepInput.value) > 0 && counter.innerText > "0") {
        decreaseTimeId = setTimeout(() => {
            increment_decrement -= Number(stepInput === null || stepInput === void 0 ? void 0 : stepInput.value);
            counter.innerText = String(increment_decrement);
            // if (increment_decrement <=0) {
            //     Number( counter!.innerText) = 0
            // }
        }, parseInt(timeInput.value) * 1000);
    }
});
function clearTime() {
    clearTimeout(increaseTimeId);
    clearTimeout(decreaseTimeId);
}
clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.addEventListener("click", clearTime => {
    timeInput.value = "0";
});
checkBox === null || checkBox === void 0 ? void 0 : checkBox.addEventListener('chan    ge', () => {
    if (checkBox.checked) {
        checkBox.classList.add('checked');
        decreaseTimeId();
        increaseTimeId();
    }
    else {
        checkBox.classList.remove('checked');
    }
});
