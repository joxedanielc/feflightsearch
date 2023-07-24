import Vue from "vue";
import Router from "vue-router";
import FlightSearch from "./components/FlightSearch";
import FlightCard from "./components/FlightCard";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: FlightSearch,
  },
  {
    path: "/flight-card",
    component: FlightCard,
  },
];

const router = new Router({
  routes,
});

export default router;
