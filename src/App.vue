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
      if (this.city.trim() === "") {
        this.errorMessage = "City name cannot be empty!";
        this.weather = null;
        return;
      }
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
    clearData() {
    this.city = "";
    this.weather = null;
    this.errorMessage = null;
  }
  },
};
</script>

<template>
  <div id="app" class="text-center">
    <h1 class="main-title">Weather App</h1>

    <input v-model="city" placeholder="Enter City Name" />
    <button @click="getWeatherData">Get Weather</button>
    <button @click="clearData" :disabled="isLoading || !city">Clear</button>

    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- <vue-simple-spinner v-if="isLoading" size="40" color="#42b883" /> -->
    <div v-if="isLoading" class="spinner"></div>

    <WeatherDisplay v-if="weather" :weather="weather" />

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

button:disabled {
  cursor: not-allowed;
}

.spinner {
  border: 4px solid #ccc;
  border-left-color: #42b883;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-top: 20px;
}

.error-message {
  color: #ffdb4e;
  font-size: 1.2em;
  text-shadow: 0px 0px 15px #b48505, 5px 5px 15px #b48505, -5px -5px 15px #b48505;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;
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
