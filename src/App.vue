<script>
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay.vue';
import Mainmenu from './components/Mainmenu.vue';
import Mainfooter from './components/Mainfooter.vue';
import CityInput from './components/cityInput.vue';

export default {
  components: {
    WeatherDisplay,
    Mainmenu,
    Mainfooter,
    CityInput
  },
  data() {
    return {
      isUserLoggedIn: false,
      city: "",
      weather: null,
      errorMessage: null,
      isLoading: false,
      backgroundClass : "",
      
    };
  },
  mounted() {
    const lastCity = localStorage.getItem("lastCity");
    if(lastCity){
      this.city = lastCity;
      this.getWeatherData();
    }
  },
  methods: {
    handleLoginStatus(isLoggedIn) {
      this.isUserLoggedIn = isLoggedIn; 
    },
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
    <Mainmenu @updateLoginStatus="handleLoginStatus" :isUserLoggedIn="isUserLoggedIn" />

    <CityInput v-model:cityInput="city" :isLoading="isLoading" @getWeather="getWeatherData" @clearData="clearData" />

    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>

    <div v-if="!weather" class="spacer"></div>

    <WeatherDisplay v-if="weather" :weather="weather" :isUserLoggedIn="isUserLoggedIn" :condition="weather.weather[0].main.toLowerCase() " />
    <div v-if="isLoading" class="spinner"></div>
    
    <Mainfooter />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
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
.spacer {
  display: block;
  height: 800px;
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
