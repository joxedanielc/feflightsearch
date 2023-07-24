import Vue from "vue";
import Router from "vue-router";
import FlightSearch from "./components/FlightSearch";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: FlightSearch,
  },
];

const router = new Router({ routes });

export default router;
