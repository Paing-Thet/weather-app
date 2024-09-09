<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: "",
      weather: null,
      // loading: false,
      // error: null,
    };
  },
  methods: {
    async getWeatherData() {
      // const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;

      // this.loading = true;
      // this.error = null;
      // this.weather = null;

      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`);
        // const response = await axios.get(url);
        const data = await response.json();
        this.weather = data;
        this.loading = false; 
      } catch (err) {
        if(err.response && err.response.status === 404){
          this.error = `${this.city} City is not found or It is lost city. Why not try again with different city`;
        } else {
          this.error = "Failed to fetch weather data"; 
        }
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div id="app">
    <h1 class="main-title">Weather App</h1>

    <input v-model="city" placeholder="Enter City Name" />
    <button @click="getWeatherData">Get Weather</button>

    <div v-if="loading" class="spinner"></div>

    <div v-if="!loading && weather">
      <h2>{{ weather.name }}</h2>
      <p>Temperature : {{ weather.main.temp }}°C</p>
      <p>Condition : {{ weather.weather[0].description }}</p>
      <p>Humidity : {{ weather.main.humidity }} %</p>
      <p>Wind Speed : {{ weather.wind.speed }} m/s</p>
    </div>

  </div>
</template>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
}

h1.main-title {
  color: #fff;
}
p {
  font-size: 1.2em;
  color: #bbb;
}

.spinner {
  border: 4px solid #9e9e9e;
  border-left-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
