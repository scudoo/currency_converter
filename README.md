# currency-converter by scudo
This is my first project uploaded to web using GitHub Pages. It's extremely simple as I'm just beginning my adventure with front-end. 

I **don't** consider updating this project in the future as I'm going to create new ones with more advanced code and structure. 

**Take a look at the currency-converter's JS**

```
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
```

*This is me (I'm pretty handsome)*

![me](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczOMacTpfRkPzqjr9UhS3x8w4-HHcJRXcN6xyeXSI_stDxIu7KRs3_7Hj_cPQuRLhB04&usqp=CAU)