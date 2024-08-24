import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import monitor from '../../dist/monitor.esm';

const app = createApp(App);

app.use(monitor, { url: 'http://localhost:9800/reportData' });

app.mount('#app');
