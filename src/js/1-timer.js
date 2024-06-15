// imports

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

// =============================================================






// finding elements
   const startBtn = document.querySelector('[data-start]');
   const input = document.querySelector('#datetime-picker')
    
   const clock = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
   };

// =============================================================





// "Please choose a date in the future"

// click to button

startBtn.addEventListener('click', () => {
const initTime = Date.now();


    startBtn.disabled = true;
    input.disabled = true;

    setInterval(() => {
        const currentTime = Date.now();
        const differenceInTime = currentTime - initTime;
        const time = convertMS(differenceInTime);
        const strTime = getTime(time);
        
        
}, 1000);

});

// =============================================================






// convert mls to date-obj

function convertMS(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60) % 60;
    const h = Math.floor(s / 3600) % 24;
    const d = Math.floor(s / 86400);
    const seconds = s % 60;

    if (initTime < Date.now()) {
        alert("Please choose a date in the future");
        input.value = ' ';
        e.stopPropagation();
        return {d:0, h:0, m:0, s:0};
    }
    
    return { d, h, m, s: seconds };
}

// =============================================================






// function from ftatpickr

let initTime;

flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    onClose: (selectedDates) => {
        const userDate = selectedDates[0];
        initTime = userDate;
        requestAnimationFrame(updateCountdown);
    },
});

function updateCountdown() {
    const currentTime = Date.now();
    const differenceInTime = initTime - currentTime;
    const time = convertMS(differenceInTime);
    const strTime = getTime(time);
    console.log(strTime);
    requestAnimationFrame(updateCountdown);
}

// =============================================================






// setting string and updating values

function getTime({d, h, m, s}) {
    const days = d.toString().padStart(2, '0');
    const hours = h.toString().padStart(2, '0');
    const minutes = m.toString().padStart(2, '0');
    const seconds = s.toString().padStart(2, '0');


    clock.days.textContent = days;
    clock.hours.textContent = hours;
    clock.minutes.textContent = minutes;
    clock.seconds.textContent = seconds;

    return `${days}:${hours}:${minutes}:${seconds}`;
}

 // =============================================================



