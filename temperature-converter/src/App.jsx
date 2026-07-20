import { useState } from 'react'

function App(){
  const[temperature, setTemperature] = useState(0);
  const[isFahrenheit, setIsFahrenheit] = useState(false);

  function toggleUnit(){
    setIsFahrenheit(!isFahrenheit);
  }

  function getButton(){
    if(isFahrenheit){
      return "Switch to celsius"
    }
    else{
      return "Switch to Fahrenheit"
    }
  }

  function convertToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
  }

  function convertToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9
  }

  function getDisplayValue(){
    if(isFahrenheit){
      return convertToFahrenheit(temperature);
    }
    else{
      return temperature;
    }
  }

  return(
    <div>
      <h1>Temperature converter</h1>
      <input
    type='number'
    value={getDisplayValue()}
    onChange={(event) => {
      const inputValue = Number(event.target.value);
      if(isFahrenheit){
        setTemperature(convertToCelsius(inputValue));
      }
      else{
        setTemperature(inputValue);
      }
    }}
  />
      <button onClick={toggleUnit}>{getButton()}</button>
     
      <p>Celsius: {temperature}</p>
      <p>Fahrenheit: {convertToFahrenheit(temperature)}</p>

    </div>
  )

}
export default App