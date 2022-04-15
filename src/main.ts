import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import routes from "./routes";

const app = createApp(App);

app.use(routes);

const pinia = createPinia().use(piniaPluginPersistedstate);

app.use(pinia);

app.mount("#app");
