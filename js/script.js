function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);
    handleButtonClick();
}

function calculateImc(weight, height) {
    return weight / (height * height);
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var imcRange = document.querySelector('#imc-range');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    var formattedImc = imc.toFixed(2).replace('.', ',');

    var imcr = measurement(imc);

    imcResult.textContent = formattedImc+".";
    imcRange.textContent = imcr;
}

function measurement(range) {
    if (range < 16) {
        return "IMC não se encontra dentro da faixa.";
    } else if (range <= 16.99) {
        return "Muito abaixo do peso.";
    }
    else if (range <= 18.49) {
        return "Abaixo do peso.";
    } else if (range <= 24.99) {
        return "Peso normal.";
    } else if (range <= 29.99) {
        return "Acima do peso.";
    } else if (range <= 34.99) {
        return "Obesidade grau I.";
    } else if (range <= 40) {
        return "Obesidade grau II.";
    }
}

console.log(start())