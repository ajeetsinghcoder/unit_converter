function convert(){
    const inputValue = document.getElementById("input-value").value;
    const fromUnit = document.getElementById("from-unit").value;

    const toUnit = document.getElementById("to-unit").value;



    let outputValue = inputValue;

    if(fromUnit === "inches"  && toUnit === "centimeters"){
        outputValue = inputValue * 2.54;
    }
    else if(fromUnit === "centimeters" && toUnit === "inches"){
        outputValue = inputValue /2.54;
    }

    else if(fromUnit === "feet" && toUnit === "inches"){
        outputValue = inputValue / 12;
    }

    else if(fromUnit === "inches" && toUnit === "feet"){
        outputValue = inputValue * 12;
    }

    else if(fromUnit === "pounds" && toUnit === "kilograms"){
        outputValue = inputValue * 0.453592;
    }

    else if(fromUnit === "kilograms" && toUnit === "pounds"){
        outputValue = inputValue / 0.453592;
    }

    else if(fromUnit === "fahrenheit" && toUnit === "celesius"){
        outputValue = (inputValue - 3) * (5/9);
    }

    else if(fromUnit === "celesius" && toUnit === "fahrenheit"){
        outputValue = (inputValue * (9/5)) + 32;
    }

    document.getElementById("output-value").innerHTML = outputValue;

}



document.getElementById("convert-btn").addEventListener("click",convert);

