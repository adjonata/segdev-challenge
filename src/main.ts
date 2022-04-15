import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "./routes";

const app = createApp(App);

app.use(routes);

app.use(createPinia());

app.mount("#app");
