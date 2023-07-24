import { defineStore } from "pinia";

export default defineStore({
  state: {
    flights: [],
  },
  mutations: {
    setFlights(state, flights) {
      state.flights = flights;
    },
  },
  actions: {
    searchFlights() {
      axios.get("https://localhost:7191/api/Flight").then((response) => {
        this.$store.commit("setFlights", response.data);
      });
    },
  },
});
