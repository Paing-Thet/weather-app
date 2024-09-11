<script>
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay.vue';

export default {
  components: {
    WeatherDisplay,
  },
  data() {
    return {
      city: "",
      weather: null,
      errorMessage: null,
      isLoading: false,
    };
  },
  methods: {
    async getWeatherData() {
      this.isLoading = true;
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`);
        if(!response.ok){
          throw new Error(`${this.city} City is not found`);
        }

        const data = await response.json();
        this.weather = data;
        this.errorMessage = null;

      } catch (error) {

        this.weather = null;
        this.errorMessage = error.message;

      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div id="app" class="text-center">
    <h1 class="main-title">Weather App</h1>

    <input v-model="city" placeholder="Enter City Name" />
    <button @click="getWeatherData">Get Weather</button>

    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- <vue-simple-spinner v-if="isLoading" size="40" color="#42b883" /> -->

    <WeatherDisplay v-else-if="weather && weather.main" :weather="weather" />

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

.error-message {
  color: red;
  font-weight: bold;
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
