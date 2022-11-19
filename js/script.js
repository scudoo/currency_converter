const calculateResult = (event) => { 
    event.preventDefault();
    const inputElement = document.querySelector(".js-labelInput");
    const selectElement = document.querySelector(".js-labelSelect");
    const result = inputElement.value / selectElement.value;   
    const resultElement = document.querySelector(".js-result");
    let currency;
    let rate = selectElement.value;

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
    resultElement.innerText = `${inputElement.value} PLN = ${result.toFixed(2)} ${currency}`;
};

const init = () => {
    const submitElement = document.querySelector(".js-submit");
    submitElement.addEventListener("click", calculateResult);
}

init();