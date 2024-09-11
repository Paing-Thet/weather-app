<script>
    export default {
        props: {
            weather: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<template>
    <div>
        <h2>{{ weather.name }}</h2>
        <p>Temperature : {{ weather.main.temp }}°C</p>
        <p>Condition : {{ weather.weather[0].description }}</p>
        <p>Humidity : {{ weather.main.humidity }} %</p>
        <p>Wind Speed : {{ weather.wind.speed }} m/s</p>
    </div>
</template>