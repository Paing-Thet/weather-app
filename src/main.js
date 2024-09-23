import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTemperatureHalf, faWind, faTint, faSun, faCloudSun, faTachometerAlt, faEye } from '@fortawesome/free-solid-svg-icons';

library.add(faTemperatureHalf, faWind, faTint, faSun, faCloudSun, faTachometerAlt, faEye);


const app = createApp(App);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);