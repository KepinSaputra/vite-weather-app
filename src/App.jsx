import { useEffect, useState } from "react"
import "./index.css"
import { getWeather } from "./components/getWeather"
import SearchWeather from "./components/SearchWeather"
import WeatherDetail from "./components/WeatherDetail"

function App() {
  const [weather, setWeather] = useState("London")
  const [current, setCurrent] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    getWeather(weather)
      .then((result) => {
        setCurrent(result.current)
        setLocation(result.location)
      })
      .catch((err) => alert(err))
  }, [weather])

  const searchValue = (city) => {
    setWeather(city)
  }

  return (
    <>
      <div className="container">
        <SearchWeather searchValue={searchValue} />
        <div className="main-content">
          <div className="head-content">
            <h1 id="main-temp">{current.temp_c}℃</h1>
            <h1 id="location">{location.name}</h1>
            <h1 id="country">{location.country}</h1>
          </div>
        </div>
        <WeatherDetail current={current} />
      </div>
    </>
  )
}

export default App
