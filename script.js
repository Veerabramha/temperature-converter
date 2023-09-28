let inputEl = document.getElementById("temp");
let from = document.getElementById("from");
let to = document.getElementById("to");
let resultEl = document.getElementById("result");

function convert(){
    resultEl.classList.add("result");
    if(inputEl.value === ""){
        alert("Please enter a temperatue.");
        return flase;
    }

    let temp = parseFloat(inputEl.value);

    if(isNaN(temp)){
        alert("Please enter a valid number for temperatue.");
        return false;
    }

    if(from.value === "celsius" && to.value === "fahrenheit"){
        resultEl.innerHTML = `${temp}°C is equal to ${(temp * 9/5) + 32}°F`;
    }

    else if(from.value === "fahrenheit" && to.value === "celsius"){
        resultEl.innerHTML = `${temp}°F is equal to ${(temp - 32) * 5/9}°C`;
    }

    else if (from.value === to.value){
        resultEl.innerHTML = `${temp}°${from.value.toUpperCase()} is equal to ${temp}°${to.value.toUpperCase()}`;
    } 

    else if (from.value === "kelvin" && to.value === "celsius") {
        resultEl.innerHTML = `${temp}K is equal to ${(temp - 273.15)}°C`;
    } 

    else if (from.value === "fahrenheit" && to.value === "kelvin") {
        resultEl.innerHTML = `${temp}°F is equal to ${(temp + 459.67) * 5/9}K`;
    } 
    
    else if (from.value === "kelvin" && to.value === "fahrenheit") {
        resultEl.innerHTML = `${temp}K is equal to ${(temp * 9/5) - 459.67}°F`;
    } 
    
    else if (from.value === to.value) {
        resultEl.innerHTML = `${temp}°${from.value.toUpperCase()} is equal to ${temp}°${to.value.toUpperCase()}`;
    }


    return false;
}

function clearFields(){
    inputEl.value = "";
    from.value = "none";
    to.value = "none";
    resultEl.innerHTML = "";
    resultEl.classList.remove("result");
}
