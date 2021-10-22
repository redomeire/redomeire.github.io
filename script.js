const scriptURL =
    'https://script.google.com/macros/s/AKfycbwfFTX6d9H7sz1yK3fRYkcwqBxSyY6KOf5xPFjXF0jyORcrGrxaWuOZzQgW1Nnc_cMJ-Q/exec'
const form = document.forms['submit-to-google-sheet'];
const alertSuccess = document.querySelector('.notifikasi');
const alertUnsuccess = document.querySelector('.notifikasi2');
const buttonKirim = document.querySelector('.btn-kirim');
const buttonLoading = document.querySelector('.btn-loading');
const tangkapForm1 = document.querySelector('.notif1');
const tangkapForm2 = document.querySelector('.notif2');


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
            createAlertSuccess();
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message)
            buttonKirim.classList.toggle('d-none');
            buttonLoading.classList.toggle('d-none');
            createAlertUnsuccess();
            form.reset();
        })
})

const createAlertSuccess = () => {
    const div1 = document.createElement('div');
    div1.classList.add('notifikasi1');
    div1.classList.add('alert');
    div1.classList.add('alert-success');
    div1.classList.add('d-flex');
    div1.classList.add('align-items-center');
    div1.classList.add('justify-content-between');
    div1.classList.add('w-100');
    div1.setAttribute("role", "alert");

    const div2 = document.createElement('div');
    div2.classList.add("d-flex");
    div2.classList.add("flex-row");
    div2.classList.add("align-items-center");

    const svg = document.createElement("svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.style.display = "none";

    const symbol = document.createElement("symbol");
    symbol.setAttribute("id", "check-circle-fill");
    symbol.setAttribute("fill", "currentColor");
    symbol.setAttribute("viewBox", "0 0 16 16");

    const path = document.createElement("path");
    path.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");

    const svg2 = document.createElement("svg");
    svg2.classList.add("bi");
    svg2.classList.add("flex-shrink-0");
    svg2.classList.add("me-2");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Success:");

    const use = document.createElement("use");
    use.setAttribute("xlink:href", "#check-circle-fill");

    const strongDiv = document.createElement("div");
    strongDiv.innerHTML = `<strong>Selamat!</strong> pesan anda berhasil terkirim`;

    const buttonDiv = document.createElement("div");
    const button = document.createElement("button");
    button.classList.add("btn-close");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "alert");
    button.setAttribute("aria-label", "close");

    symbol.append(path);
    svg.append(symbol);
    div2.append(svg, svg2, strongDiv);
    buttonDiv.append(button);
    div1.append(div2,buttonDiv);
    tangkapForm1.append(div1);

}
const createAlertUnsuccess = () => {
    const div1 = document.createElement('div');
    div1.classList.add("notifikasi2");
    div1.classList.add("alert");
    div1.classList.add("alert-danger");
    div1.classList.add("d-flex");
    div1.classList.add("align-items-center");
    div1.classList.add("justify-content-between");
    div1.classList.add("w-100");
    div1.setAttribute("role", "alert");

    const div2 = document.createElement('div');
    div2.classList.add("d-flex");
    div2.classList.add("flex-row");
    div2.classList.add("align-items-center");

    const svg = document.createElement("svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.style.display = "none";

    const symbol = document.createElement("symbol");
    symbol.setAttribute("id", "exclamation-triangle-fill");
    symbol.setAttribute("fill", "currentColor");
    symbol.setAttribute("viewBox", "0 0 16 16");

    const path = document.createElement("path");
    path.setAttribute("d", "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z");

    const svg2 = document.createElement("svg");
    svg2.classList.add("bi");
    svg2.classList.add("flex-shrink-0");
    svg2.classList.add("me-2");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Danger:");

    const use = document.createElement("use");
    use.setAttribute("xlink:href", "#exclamation-triangle-fill");

    const strongDiv = document.createElement("div");
    strongDiv.innerHTML = `<strong>Maaf!</strong> pesan anda gagal terkirim`;

    const buttonDiv = document.createElement("div");
    const button = document.createElement("button");
    button.classList.add("btn-close");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "alert");
    button.setAttribute("aria-label", "close");

    symbol.append(path);
    svg.append(symbol);
    div2.append(svg, svg2, strongDiv);
    buttonDiv.append(button);
    div1.append(div2,buttonDiv);
    tangkapForm2.append(div1);
}