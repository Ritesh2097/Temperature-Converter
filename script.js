function converter() {
    let temperatureInput = document.getElementById("temperatureInput").value;
    let temperaturetype = document.getElementById("temperaturetype").value;
    if (temperaturetype == "celsius") {
      document.getElementById("convertedvalue").innerHTML = temperatureInput * (9 / 5) + 32;    
    } else if(temperaturetype == "fahrenheit"){
      document.getElementById("convertedvalue").innerHTML = (temperatureInput - 32) * (5 / 9);    
    }
    else{
      document.getElementById("convertedvalue").innerHTML = Invalid;
    }
  
    return false;
  } 