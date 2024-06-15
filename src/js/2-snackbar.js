
// import

import iziToast from "izitoast";

// =================================================================================



// finding elements

document.querySelector('.form').addEventListener('submit', async (event) => {
    event.preventDefault();

const delayInput = document.querySelector('[name="delay"]');
const stateInput = document.querySelector('[name="state"]:checked');

// =================================================================================



// converting a value to a number
    
    const delay = parseInt(delayInput.value, 10);

    // =================================================================================
    
    
    // Creating promise and function from iziToast

try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
               
                if (stateInput.value === 'fulfilled') {
                    resolve(`✅ Fulfilled promise in ${delay} ms`);
                } else {
                    reject(`❌ Rejected promise in ${delay} ms`);
                }
            }, delay);
            
            delayInput.value = '';
        });


        iziToast.settings({
            icon: '',
        });




        iziToast.success({
            message: result,
            position: 'topRight',
        });
    } catch (error) {
        iziToast.error({
            message: error,
            position: 'topRight',
        });
    }
});
          
// =================================================================================