<template>
  <div class="card border-secondary mx-auto mt-3" style="width: 50rem">
    <div class="card-header">
      <h2>{{ flight.flightName }}</h2>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p>Departure City: {{ flight.departureCity }}</p>
          <p>Departure Date: {{ flight.departureDateTime }}</p>
          <p>Arrival City: {{ flight.arrivalCity }}</p>
          <p>Arrival Date: {{ flight.arrivalDateTime }}</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <p>
            Price:
            {{ formatCurrency(flight.price) }}
          </p>
          <p>Scales: {{ flight.scales }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightCard",
  props: {
    flight: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatCurrency(price, currency = "USD") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
      }).format(price);
    },
  },
};
</script>

<style></style>
