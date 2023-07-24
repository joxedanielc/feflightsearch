<template>
  <div>
    <h1>Flight Search</h1>
    <el-input v-model="departureCity" placeholder="Departure City"></el-input>
    <el-input v-model="arrivalCity" placeholder="Arrival City"></el-input>
    <el-input v-model="departureDate" placeholder="Departure Date"></el-input>
    <el-input v-model="arrivalDate" placeholder="Arrival Date"></el-input>
    <el-button type="primary" @click="searchFlights">Search Flights</el-button>
    <flight-card
      v-for="flight in flights"
      :key="flight.id"
      :flight="flight"
    ></flight-card>
  </div>
</template>

<script>
//import { useStore } from "pinia";
//import { Button, Input } from "element-plus";
import axios from "axios";
import FlightCard from "./FlightCard.vue";

export default {
  name: "FlightSearch",
  components: {
    FlightCard,
  },
  data() {
    return {
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
      arrivalDate: "",
      flights: [],
    };
  },
  methods: {
    searchFlights() {
      axios
        .get("https://localhost:7191/api/Flight", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT",
          },
        })
        .then((response) => {
          this.flights = response.data;
        });
    },
  },
};
</script>
