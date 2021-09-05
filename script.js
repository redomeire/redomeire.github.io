const scriptURL =
    'https://script.google.com/macros/s/AKfycbwfFTX6d9H7sz1yK3fRYkcwqBxSyY6KOf5xPFjXF0jyORcrGrxaWuOZzQgW1Nnc_cMJ-Q/exec'
const form = document.forms['submit-to-google-sheet'];
const loadBar = document.querySelector('loading-bar');
const alertSuccess = document.querySelector('.notifikasi');
const alertUnsuccess = document.querySelector('.notifikasi2');
const buttonKirim = document.querySelector('.btn-kirim');
const buttonLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', e => {
    e.preventDefault()
    buttonKirim.classList.toggle('d-none');
    buttonLoading.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            console.log('Success!', response)
            buttonKirim.classList.toggle('d-none');
            buttonLoading.classList.toggle('d-none');
            alertSuccess.classList.toggle('d-none');
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message)
            buttonKirim.classList.toggle('d-none');
            buttonLoading.classList.toggle('d-none');
            alertUnsuccess.classList.toggle('d-none');
            form.reset();
        })
})