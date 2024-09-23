<script>
export default {
  props: ['cityInput', 'isLoading'],
  emits: ['updateCity', 'getWeather', 'clearData'],

  methods: {
    getWeather() {
      this.$emit('getWeather');
    },
    clearData() {
      this.$emit('clearData');
    },
    updateCityInput(event) {
      this.$emit('update:cityInput', event.target.value);
    }
  }
};
</script>

<template>
    <div class="city-input">
      <input :value="cityInput" @input="updateCityInput" placeholder="Enter City Name" @keyup.enter="getWeather" ref="cityName" />
      <button @click="getWeather" :disabled="isLoading || !cityInput.trim()">Get Weather</button>
      <button @click="clearData" :disabled="isLoading || !cityInput">Clear</button>
    </div>
  </template>

<style>
    .city-input {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 20px;
    }

    button:disabled {
        cursor: not-allowed;
    }


</style>