import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App);
app.use(mdiVue, { icons: mdijs });
app.use(VueSweetalert2);

app.mount("#app");
