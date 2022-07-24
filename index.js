import hCore, { store } from "@hsui/core";
import "./reset.css";
import hui from "h_ui";
import "h_ui/dist/h_ui.min.css";
import Vue from 'vue';
Vue.use(hui);

const app = hCore({
  extraModelOptions: {
    store,
  },
});

app.start();
