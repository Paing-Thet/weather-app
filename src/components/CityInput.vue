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
      <button @click="getWeather" :disabled="isLoading || !cityInput.trim()" class="getBtn">Get Weather</button>
      <button @click="clearData" :disabled="isLoading || !cityInput" class="resetBtn">Clear</button>
    </div>
  </template>

<style>
    .city-input {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 20px;
    }
    .city-input input {
      padding-left: 10px;
      border-radius: 15px;
      background: #1f2034;
      color: #fff;
    }
    .getBtn {
      background-color: #5ca5b4;
      color: #fff;
    }
    .resetBtn {
      background-color: tomato;
    }

    button:disabled {
        cursor: not-allowed;
    }

    @media only screen and (max-width: 600px) {
      .city-input {
        width: 400px;
        flex-direction: column;
        align-items: center;
      }
      .city-input input {
        width: 250px;
        height: 30px;
      }
      .city-input button {
        display: inline-block;
      }
    }

</style>