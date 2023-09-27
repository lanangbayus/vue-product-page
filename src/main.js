import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

createApp(App).use(router).mount("#app");
