import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
app
  .use(VueGoogleMaps, {
    load: {
      key: "apiKey",
      libraries: "visualization",
    },
  })
  .use(router)
  .mount("#app");
