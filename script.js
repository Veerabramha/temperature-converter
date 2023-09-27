let inputEl = document.getElementById("temp");
let from = document.getElementById("from");
let to = document.getElementById("to");
let resultEl = document.getElementById("result");

function convert(){
    resultEl.classList.add("result");
    if(inputEl.value === ""){
        alert("Please enter a temperatue.");
        return;
    }

    let temp = parseFloat(inputEl.value);

    if(isNaN(temp)){
        alert("Please enter a valid number for temperatue.");
        return;
    }

    if(from.value === "celsius" && to.value === "fahrenheit"){
        resultEl.innerHTML = `${temp}°C is equal to ${(temp * 9/5) + 32}°F`;
    }

    else if(from.value === "fahrenheit" && to.value === "celsius"){
        resultEl.innerHTML = `${temp}°F is equal to ${(temp - 32) * 5/9}°C`;;
    }

    else if (from.value == to.value){
        resultEl.innerHTML = `${temp}°${from.value.toUpperCase()} is equal to ${temp}°${to.value.toUpperCase()}`;
    } 

    return false;

}

