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
      backgroundClass : "",
      unit: "C",
    };
  },
  mounted() {
    this.$refs.cityName.focus();
    const lastCity = localStorage.getItem("lastCity");
    if(lastCity){
      this.city = lastCity;
      this.getWeatherData();
    }
  },
  methods: {
    validateInput(){
      const cityName = this.city.trim();
      if(!this.city){
        this.errorMessage = "City name cannot be empty!";
        return false;
      } else if (!isNaN(cityName)){
        this.errorMessage = "Hey don't try to type Numbers in City Name!";
        return false;
      }
      return true;
    },
    async getWeatherData() {
      if (!this.validateInput()) return;

      if (this.weather) {
        localStorage.setItem('lastCity', this.city);
      }
      this.isLoading = true;
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`);
        if(!response.ok){
          throw new Error(`${this.city} City is not found or May be a forgotten Ancient City`);
        }

        const data = await response.json();
        this.weather = data;
        this.errorMessage = null;

      } catch (error) {

        if (error.message.includes('City is not found')) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = "Network issue or API unavailable. Please try again later.";
        }

        this.weather = null;

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

    <input v-model="city" placeholder="Enter City Name" @keyup.enter="getWeatherData" ref="cityName" />
    <button @click="getWeatherData" :disabled="isLoading || !city.trim()" >Get Weather</button>
    <button @click="clearData" :disabled="isLoading || !city">Clear</button>

    <div v-if="weather">
      <label>
        <input type="radio" v-model="unit" value="C"> Celsius
      </label>
      <label>
        <input type="radio" v-model="unit" value="F"> Fahrenheit
      </label>
    </div>

    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>

    <div class="weatherContainer">

      <transition name="fade">
        <WeatherDisplay v-if="weather" :weather="weather" :condition="weather.weather[0].main.toLowerCase()" :unit="unit" />
      </transition>
      <div v-if="isLoading" class="spinner"></div>

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

button:disabled {
  cursor: not-allowed;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid #9e9e9e;
  border-left-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
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

.sunny {
  background: #fff917;
}

.rainy {
  background: #73ade6;
}

.clouds {
  background: #acc2d9;
}

.clear {
  background: #ffffff;
}

.default-bg {
  background: #333;
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
