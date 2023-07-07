import React, { useState } from "react"

export default function SearchWeather({ searchValue }) {
  const [inputValue, setInputValue] = useState("")

  function handleClick(e) {
    e.preventDefault()
    searchValue(inputValue)
    setInputValue("")
  }

  return (
    <div className="heading">
      <label htmlFor="search">
        <input
          type="text"
          className="search"
          id="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Seach any City / Country"
        />
      </label>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}
