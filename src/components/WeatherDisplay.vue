<script>
    export default {
        data() {
          return {
            unit: 'free',
          };
        },

        props: ['weather', 'condition', 'isUserLoggedIn'],

        methods: {
          formatTime(unixTime) {
            const date = new Date(unixTime * 1000);
            return date.toLocaleTimeString();
          },
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
          <div class="dataContainer"><p> <font-awesome-icon icon="wind" style="font-size: 28px;" /> </p><p> {{ weather.wind.speed }} m/s</p></div>
          <div class="dataContainer"><p> <font-awesome-icon icon="sun" style="font-size: 28px;" /> </p><p> {{ formatTime(weather.sys.sunrise) }}</p></div>
          <div class="dataContainer"><p> <font-awesome-icon icon="cloud-sun" style="font-size: 28px;" /> </p><p> {{ formatTime(weather.sys.sunset) }}</p></div>
        </div>
      </div>
    </div>

    <div v-if="unit=='pro'" class="detailsContainer">
      <h2>Pro</h2>

      <div v-if="!this.isUserLoggedIn" class="lockAccess">
        <p><font-awesome-icon icon="triangle-exclamation" style="color: goldenrod; font-size: 72px;" /></p>
        <p><strong>Pro feature is only for registered users. Please log in to access.</strong></p>
      </div>

      <div v-if="this.isUserLoggedIn" :class="['weather-info', condition]">
        <div class="detailsMain">
          <h3>{{ weather.name }}</h3>
          <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="Weather Icon" class="weather-icon" />
          <h2><font-awesome-icon icon="temperature-half" /> {{ Math.round(weather.main.temp) }}°C / {{ Math.round((weather.main.temp * 9/5) + 32) }}°F</h2>
          <p>Feels like : {{ Math.round(weather.main.feels_like) }}°C / {{ Math.floor((weather.main.feels_like * 9/5) + 32) }}°F</p>
          <p><strong>{{ weather.weather[0].description }}</strong></p>
        </div>

        <div v-if="this.isUserLoggedIn" class="detailsData">
          <div class="dataRow">
            <div class="dataContainer"><p> <font-awesome-icon icon="tint" style="font-size: 24px;" /> </p><p> {{ weather.main.humidity }} %</p></div>
            <div class="dataContainer"><p> <font-awesome-icon icon="wind" style="font-size: 24px;" /> </p><p> {{ weather.wind.speed }} m/s</p></div>
          </div>
          <div class="dataRow">
            <div class="dataContainer"><p> <font-awesome-icon icon="tachometer-alt" style="font-size: 24px;" /> </p><p> {{ weather.main.pressure }} hPa</p></div>
            <div class="dataContainer"><p> <font-awesome-icon icon="eye" style="font-size: 24px;" /> </p><p> {{ weather.visibility / 1000 }} km</p></div>
          </div>
          <div class="dataRow">
            <div class="dataContainer"><p> <font-awesome-icon icon="sun" style="font-size: 24px;" /> </p><p> {{ formatTime(weather.sys.sunrise) }}</p></div>
            <div class="dataContainer"><p> <font-awesome-icon icon="cloud-sun" style="font-size: 24px;" /> </p><p> {{ formatTime(weather.sys.sunset) }}</p></div>
          </div>
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
.unitContainer label {
  display: inline-block;
  box-shadow: 0px 4px 12px #00000060;
  padding: 10px;
  width: 100px;
  margin: 0px 20px;
  border-radius: 15px;
  background-color: #1f2034;
  transition: 0.3s ease;
}
.unitContainer label:hover {
  box-shadow: 0px 0px 24px #e1f5fe;
  transition: 0.3s ease;
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
    width: 450px;
    background-color: #1f2034;
    padding: 20px;
    padding-bottom: 50px;
    border-radius: 25px;
    color: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center
}
.weather-info img{
  border-radius: 250px;
}
.simpleMain p{
  text-transform: capitalize;
}
.simpleData {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.dataContainer {
  margin-top: 20px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px #00000060;
  background-color: #25253d;
  color: #fff;
  transition: 0.3s ease;
}
.dataContainer:hover {
  box-shadow: 0px 4px 6px #00a3d5, 0px 4px 24px #00a3d5;
  text-shadow: 0px 0px 6px #00a3d5, 0px 0px 12px #00a3d5, 0px 0px 24px #00a3d5;
  transition: 0.3s ease;
  scale: 1.05;
}

.dataRow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
  .lockAccess {
    margin: 50px 0px;
    max-width: 1280px;
    width: 600px;
    height: 350px;
    background-color: #1f2034;
    padding: 30px;
    border-radius: 15px;
    color: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .lockAccess p {
    font-size: 32px;
  }
  .detailsContainer  .weather-info {
        margin: 50px 0px;
        max-width: 1280px;
        width: 600px;
        background-color: #1f2034;
        padding: 30px;
        padding-bottom: 50px;
        border-radius: 15px;
        color: #fff;
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
        flex-direction: column;
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
      }
      .detailsData p {
        display: block;
        text-align: left;
        margin: 0px 0px;
        padding: 10px 0px;
      }
    }
</style>