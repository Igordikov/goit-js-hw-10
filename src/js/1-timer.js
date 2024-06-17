// imports

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";

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

startBtn.disabled = true;

let countdownActive = false;


// click to button

let initTime;

startBtn.addEventListener('click', () => {

    countdownActive = true;

    startBtn.disabled = true;
    input.disabled = true;

    

    setInterval(() => {
        const currentTime = Date.now();
        const differenceInTime = initTime - currentTime;
        const time = convertMS(differenceInTime);
        const strTime = getTime(time);
        
        
}, 1000);

});

// =============================================================






// convert mls to date-obj

let isErrorNotified = false;

function convertMS(ms, e = null) {
    let s = Math.floor(ms / 1000);
    let m = Math.floor(s / 60) % 60;
    let h = Math.floor(s / 3600) % 24;
    let d = Math.floor(s / 86400);
    s %= 60;
    m %= 60;
    h %= 24;

    if (initTime < Date.now()) {
        if (!isErrorNotified) {
       iziToast.error ({
        title: 'Помилка',
        message: 'Please choose a date in the future',
        position: "topRight",
        onClosing: function () {
            input.disabled = false;
            startBtn.disabled = false;
          }
       });
       isErrorNotified = true;
    }
       input.value = '';
        if (e) e.stopPropagation();
        return {d:0, h:0, m:0, s:0};
    
    } else {
        isErrorNotified = false;
    }
    
    return {d, h, m, s};
}

// =============================================================



function updateCountdown() {
    if (!countdownActive) return; // Если таймер не активен, выходим из функции

    const currentTime = Date.now();
    const differenceInTime = initTime - currentTime;
    
    if (differenceInTime <= 0) {
       
        countdownActive = false;
        input.disabled = false;
        startBtn.disabled = false;
        
        return;
    }

    const time = convertMS(differenceInTime);
    const strTime = getTime(time);
    console.log(strTime);
    requestAnimationFrame(updateCountdown);
}




// function from ftatpickr

flatpickr(input, {
    // ...
    onClose: (selectedDates) => {
        const userDate = selectedDates[0];
        initTime = userDate;
       
        startBtn.disabled = false;
        requestAnimationFrame(updateCountdown);
    },
});


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



