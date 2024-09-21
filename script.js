function converter() {
    let temp = document.getElementById("temp").value;
    let temptype = document.getElementById("temptype").value;
    if (temptype == "celsius") {
      document.getElementById("converted_value").innerHTML = temp * (9 / 5) + 32;    
    } else if(temptype == "fahrenheit"){
      document.getElementById("converted_value").innerHTML = (temp - 32) * (5 / 9);    
    }
    else{
      document.getElementById("converted_value").innerHTML = Invalid;
    }
  
    return false;
  } 