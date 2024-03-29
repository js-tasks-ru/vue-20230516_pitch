import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import { createProgress } from './plugins/progress/index.js';

const progress = createProgress({ container: '#progress', router });

// createApp(App).use(router).mount('#app');
const app = createApp(App);
app.use(progress)
app.use(router)
app.mount('#app');
