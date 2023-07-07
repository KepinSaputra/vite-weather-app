import axios from "axios"

export async function getWeather(city) {
  const weather = await axios.get(
    import.meta.env.VITE_BASE_URL +
      `/current.json?key=` +
      import.meta.env.VITE_API_KEY +
      `&q=${city}&aqi=no`
  )
  return weather.data
}
