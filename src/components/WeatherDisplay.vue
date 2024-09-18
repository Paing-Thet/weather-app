<script>
    export default {
        props: ['weather', 'condition', 'unit'],

        computed: {
          displayTemperature() {
            return this.unit === "C"
            ? Math.round(this.weather.main.temp)
            : Math.round((this.weather.main.temp * 9/5) + 32);
          }
        },

        methods: {
          formatTime(unixTime) {
            const date = new Date(unixTime * 1000);
            return date.toLocaleTimeString();
          }
        }
    }
    // console.log(this.unit);
</script>

<template>
    <div :class="['weather-info', condition]">
        <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="Weather Icon" class="weather-icon" />
        <h2>{{ weather.name }}</h2>
        <p>Temperature : {{ displayTemperature }}°{{ unit }}</p>
        <p>Condition : {{ weather.weather[0].description }}</p>
        <p>Humidity : {{ weather.main.humidity }} %</p>
        <p>Wind Speed : {{ weather.wind.speed }} m/s</p>
        <p>Pressure : {{ weather.main.pressure }} hPa</p>
        <p>Visibility : {{ weather.visibility / 1000 }} km</p>
        <p>Sunrise : {{ formatTime(weather.sys.sunrise) }}</p>
        <p>Sunset : {{ formatTime(weather.sys.sunset) }}</p>
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
    .weather-icon {
        width: 100px;
        height: 100px;
        background: #999;
    }
    .weather-info {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
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

    

    @media only screen and (max-width: 600px) {
      .weather-info {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        color: #333;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
    }
</style>