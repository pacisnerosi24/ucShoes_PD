import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from "./router";

const app = createApp(App);

app.use(router); // 🔹 Habilitamos Vue Router antes de montar la app
app.mount('#app'); // 🔹 Ahora montamos la aplicación correctamente
