<template>
  <div class="container">
    <div class="card border-dark mx-auto" style="width: 40rem">
      <div class="card-body">
        <h1 class="card-title">Flight Search</h1>
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <el-select
                  v-model="departureCity"
                  class="m-2"
                  placeholder="Departure City"
                >
                  <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <el-select
                  v-model="arrivalCity"
                  class="m-2"
                  placeholder="Arrival City"
                >
                  <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <el-date-picker
                  v-model="departureDate"
                  type="date"
                  placeholder="Departure Date"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <el-date-picker
                  v-model="arrivalDate"
                  type="date"
                  placeholder="Arrival Date"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mt-3 col-12">
            <el-button
              class="btn btn-secondary"
              type="primary"
              @click="searchFlights"
              >Search Flights</el-button
            >
          </div>
        </div>
      </div>
    </div>

    <flight-card
      v-for="flight in flightsFromStore"
      :key="flight.id"
      :flight="flight"
    ></flight-card>
  </div>
</template>

<script>
import { useFlightStore } from "../store";
import { ElButton, ElSelect, ElOption, ElDatePicker } from "element-plus";
import FlightCard from "./FlightCard.vue";

export default {
  name: "FlightSearch",
  components: {
    FlightCard,
    ElButton,
    ElDatePicker,
    ElSelect,
    ElOption,
  },
  data() {
    return {
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
      arrivalDate: "",
      flights: [],
      cities: [
        {
          value: "quito",
          label: "Quito",
        },
        {
          value: "guayaquil",
          label: "Guayaquil",
        },
        {
          value: "paris",
          label: "Paris",
        },
      ],
    };
  },
  computed: {
    flightStore() {
      return useFlightStore();
    },
    flightsFromStore() {
      return this.flightStore.flights;
    },
  },
  methods: {
    searchFlights() {
      this.flightStore.searchFlights({
        departureCity: this.departureCity,
        arrivalCity: this.arrivalCity,
        departureDate: this.departureDate,
        arrivalDate: this.arrivalDate,
      });

      console.log(this.flightStore);
    },
  },
};
</script>
