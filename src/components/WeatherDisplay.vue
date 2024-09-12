<script>
    export default {
        props: ['weather'],
    }
</script>

<template>
    <div class="weather-info">
        <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="Weather Icon" class="weather-icon" />
        <h2>{{ weather.name }}</h2>
        <p>Temperature : {{ Math.round(weather.main.temp) }}°C</p>
        <p>Condition : {{ weather.weather[0].description }}</p>
        <p>Humidity : {{ weather.main.humidity }} %</p>
        <p>Wind Speed : {{ weather.wind.speed }} m/s</p>
    </div>
</template>

<style scoped>
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
            gap: 10px;
        }
    }
</style>