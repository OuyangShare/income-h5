import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Vant from 'vant';
import 'vant/lib/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Lazyload } from 'vant';

const app = createApp(App);
app.use(router);
app.use(Vant);
app.use(Lazyload);
app.mount('#app');

