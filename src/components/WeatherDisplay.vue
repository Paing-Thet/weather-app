<script>
    export default {
        data() {
          return {
            unit: 'free',
          };
        },

        props: ['weather', 'condition'],

        methods: {
          formatTime(unixTime) {
            const date = new Date(unixTime * 1000);
            return date.toLocaleTimeString();
          }
        }
    }
</script>

<template>
    <div class="unitContainer">
      <label>
        <input type="radio" v-model="unit" value="free"> Free
      </label>
      <label>
        <input type="radio" v-model="unit" value="pro"> Pro
      </label>
    </div>
    <div v-if="unit=='free'" class="simpleContainer">
      <h2>Free</h2>
      <div :class="['weather-info', condition]">
        <div class="simpleMain">
          <h3>{{ weather.name }}</h3>
          <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="Weather Icon" class="weather-icon" />
          <h2><font-awesome-icon icon="temperature-half" /> {{ Math.round(weather.main.temp) }}°C / {{ Math.round((weather.main.temp * 9/5) + 32) }}°F</h2>
          <p><strong>{{ weather.weather[0].description }}</strong></p>
        </div>
        <div class="simpleData">
          <p> <font-awesome-icon icon="wind" /> : {{ weather.wind.speed }} m/s</p>
          <p> <font-awesome-icon icon="sun" /> : {{ formatTime(weather.sys.sunrise) }}</p>
          <p> <font-awesome-icon icon="cloud-sun" /> : {{ formatTime(weather.sys.sunset) }}</p>
        </div>
      </div>
    </div>

    <div v-if="unit=='pro'" class="detailsContainer">
      <h2>Pro</h2>
      <div :class="['weather-info', condition]">
        <div class="detailsMain">
          <h3>{{ weather.name }}</h3>
          <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="Weather Icon" class="weather-icon" />
          <h2><font-awesome-icon icon="temperature-half" /> {{ Math.round(weather.main.temp) }}°C / {{ Math.round((weather.main.temp * 9/5) + 32) }}°F</h2>
          <p>Feels like : {{ Math.round(weather.main.feels_like) }}°C / {{ Math.floor((weather.main.feels_like * 9/5) + 32) }}°F</p>
          <p><strong>{{ weather.weather[0].description }}</strong></p>
        </div>

        <div class="detailsData">
          <p> <font-awesome-icon icon="tint" /> {{ weather.main.humidity }} %</p>
          <p> <font-awesome-icon icon="wind" /> {{ weather.wind.speed }} m/s</p>
          <p> <font-awesome-icon icon="tachometer-alt" /> {{ weather.main.pressure }} hPa</p>
          <p> <font-awesome-icon icon="eye" /> {{ weather.visibility / 1000 }} km</p>
          <p> <font-awesome-icon icon="sun" /> {{ formatTime(weather.sys.sunrise) }}</p>
          <p> <font-awesome-icon icon="cloud-sun" /> {{ formatTime(weather.sys.sunset) }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>

.sunny {
  background-color: #ffeb3b;
}

.rainy {
  background-color: #2196f3;
}

.clouds {
  background-color: #90a4ae;
}

.snow {
  background-color: #e1f5fe;
}

.clear {
  background-color: #4caf50;
}

.default-bg {
  background-color: #f0f0f0;
}

.unitContainer {
  margin-top: 50px;
}

.simpleContainer {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
.simpleContainer  .weather-icon {
    width: 100px;
    height: 100px;
    background: #999;
}
.simpleContainer  .weather-info {
    margin: 50px 0px;
    max-width: 1280px;
    width: 400px;
    background-color: #d9e2e8;
    padding: 20px;
    border-radius: 25px;
    color: #333;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center
}
.simpleMain p{
  text-transform: capitalize;
}
.simpleData {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.detailsContainer {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
  .detailsContainer  .weather-icon {
        width: 100px;
        height: 100px;
        background: #999;
    }
  .detailsContainer  .weather-info {
        margin: 50px 0px;
        max-width: 1280px;
        width: 600px;
        background-color: #d9e2e8;
        padding: 30px;
        border-radius: 15px;
        color: #333;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: space-evenly;
        gap: 50px;
    }
.detailsMain p {
  text-transform: capitalize;
}
.detailsData {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
}
.detailsData p {
  margin: 8px 0px ;
}

    

    @media only screen and (max-width: 600px) {
      .simpleContainer .weather-info {
        width: 300px;
        gap: 20px;
      }
      .simpleData {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
        align-self: center;
        align-content: flex-start;
      }
      .simpleData p {
        margin: 0px;
      }
      .detailsContainer  .weather-info {
        flex-direction: column;
        width: 300px;
        gap: 20px;
      }
      .detailsData {
        display: block;
        column-count: 2;
      }
      .detailsData p {
        display: block;
        text-align: left;
        margin: 0px 0px;
        padding: 10px 0px;
      }
    }
</style>