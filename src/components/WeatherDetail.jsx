import React from "react"

export default function WeatherDetail({ current }) {
  return (
    <div className="grid-content">
      <div className="desc">
        Feels Like
        <span id="feels-like">{Math.ceil(current.feelslike_c)}℃</span>
      </div>
      <div className="desc">
        Humidity<span id="humid">{current.humidity}%</span>
      </div>
      <div className="desc">
        Wind<span id="wind">{current.wind_mph} mp/h</span>
      </div>
      <div className="desc">
        UV Radiation<span id="uv">{current.uv}</span>
      </div>
    </div>
  )
}
