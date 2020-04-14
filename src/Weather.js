import React from "react"



function Weather(props) {
  // This method returns undefined or a JSX component
  if (this.state.weatherData === null) {
    // If there is no data return undefined
    return undefined
  }

  /*
  This next step needs another level of error checking. It's
  possible to get a JSON response for an invalid zip in which
  case the step below fails.
  */
  console.log(this.state.weatherData)
  // Take the weather data apart to more easily populate the component
  const { main, description, icon } = this.state.weatherData.weather[0]
  const { temp, pressure, humidity, temp_min, temp_max } = this.state.weatherData.main

  return (
    <div>
      <div>Title: {main}</div>
      <div>Desc: {description}</div>
      <div>Icon: {icon}</div>
      <div>Temp: {temp}</div>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Temp Min: {temp_min} Max:{temp_max}</div>
    </div>
  )
}

export default Weather;
