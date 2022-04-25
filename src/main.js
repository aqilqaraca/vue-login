import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import { router } from "./router/router";
import { initializeApp } from "firebase/app";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
const firebaseConfig = {
  apiKey: "AIzaSyBsGL9a_U8hGujJXG24erWXJooE-IB9-lE",
  authDomain: "vue-test-9c4af.firebaseapp.com",
  projectId: "vue-test-9c4af",
  storageBucket: "vue-test-9c4af.appspot.com",
  messagingSenderId: "738763656858",
  appId: "1:738763656858:web:34a14226ecead7d7619923",
};
initializeApp(firebaseConfig);
const app = createApp(App);
app.use(store);
app.use(VueToast);
app.use(router);
app.mount("#app");


