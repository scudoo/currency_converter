let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-labelInput");
let selectElement = document.querySelector(".js-labelSelect");
let submitElement = document.querySelector(".js-submit");
let resultElement = document.querySelector(".js-result");



submitElement.addEventListener("click", (event) => {
    event.preventDefault();

    let rate = selectElement.value;
    let baseCurrency = inputElement.value;
    let result = baseCurrency * rate;
    let currency;

    switch (rate) {
        case "4.55":
            currency = "USD";
            break;
        case "4.71":
            currency ="EUR";
            break;
        case "4.83":
            currency = "CHF";
            break;
        case "3.32":
            currency = "SGD";
            break;
        default:
            currency = "";
    }

    console.log(currency);

    if(inputElement.value === "") {
        return;
    }

    resultElement.innerText = `${inputElement.value} PLN = ${result.toFixed(2)} ${currency}`;
})






