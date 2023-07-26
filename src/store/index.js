import { defineStore } from "pinia";
import axios from "axios";

export const useFlightStore = defineStore("flightStore", {
  state: () => ({
    flights: [],
    params: {
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
      arrivalDate: "",
    },
  }),
  actions: {
    searchFlights({ departureCity, arrivalCity, departureDate, arrivalDate }) {
      axios
        .get("https://localhost:5056/api/Flight", {
          params: {
            departureCity,
            arrivalCity,
            departureDate,
            arrivalDate,
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT",
          },
        })
        .then((response) => {
          this.flights = response.data;
          this.clearParams();
        });
    },
    clearParams() {
      this.params = {};
    },
  },
});
