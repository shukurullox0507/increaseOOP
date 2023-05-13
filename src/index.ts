const decreaseBtn = document.querySelector<HTMLButtonElement>('.decrease-btn');
const increaseBtn = document.querySelector<HTMLButtonElement>('.increase-btn');
const timeInput = document.querySelector<HTMLInputElement>('.input-time');
const stepInput = document.querySelector<HTMLInputElement>('.input-step');
const switchBtn = document.querySelector<HTMLLabelElement>('.switch');
const checkBox = document.querySelector<HTMLInputElement>(".checkbox");
const clearBtn = document.querySelector<HTMLButtonElement>('.clear');
const counter = document.querySelector<HTMLDivElement>('.counter');
let timeValue = timeInput?.value
let stepValue = stepInput?.value
// let counterValue = counter?.innerText


let increment_decrement = 0;
let disableBtn = true
let increaseTimeId: any;
let decreaseTimeId: any;
increaseBtn?.addEventListener('click', () => {
    if (disableBtn && Number(stepInput?.value) > 0) {
        increaseTimeId = setTimeout(() => {
            increment_decrement += Number(stepInput?.value);
            counter!.innerText = String(increment_decrement);
            // if (increment_decrement <=0) {
            //     counter!.innerText = ""
            // }
        }, parseInt(timeInput!.value) * 1000)
    }


});

decreaseBtn?.addEventListener('click', () => {
    if (disableBtn && Number(stepInput?.value) > 0 && counter!.innerText > "0") {
        decreaseTimeId = setTimeout(() => {
            increment_decrement -= Number(stepInput?.value);
            counter!.innerText = String(increment_decrement);
            // if (increment_decrement <=0) {
            //     Number( counter!.innerText) = 0
            // }
        }, parseInt(timeInput!.value) * 1000);
    }
});
function clearTime() {
    clearTimeout(increaseTimeId)
    clearTimeout(decreaseTimeId)
}

clearBtn?.addEventListener("click", clearTime => {
    timeInput!.value = "0"
})




checkBox?.addEventListener('chan    ge', () => {
    if (checkBox.checked) {
        checkBox.classList.add('checked');
        decreaseTimeId()
        increaseTimeId()
    } else {
        checkBox.classList.remove('checked');
    }
});


