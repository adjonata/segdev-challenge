import { createApp } from "vue";
import App from "./App.vue";
import { VueQueryPlugin } from "vue-query";
import routes from "./routes";

/**
 * Configs
 */
import { vueQueryDefaultOptions } from "./config/vueQuery";

const app = createApp(App);

app.use(VueQueryPlugin, vueQueryDefaultOptions);
app.use(routes);

app.mount("#app");
