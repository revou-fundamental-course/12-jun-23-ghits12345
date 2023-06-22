function convertCelsiusToFahrenheit() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = (celsius * 9/5) + 32;
  fahrenheitInput.value = fahrenheit.toFixed(2);
}

function convertFahrenheitToCelsius() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var fahrenheit = parseFloat(fahrenheitInput.value);
  var celsius = (fahrenheit - 32) * 5/9;
  celsiusInput.value = celsius.toFixed(2);
}

function reset () {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  document.getElementById("result").innerHTML = "";
}

function reverse () {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = parseFloat(fahrenheitInput.value);
  celsiusInput.value = fahrenheit.toFixed(2);
  fahrenheitInput.value = celsius.toFixed(2);
}