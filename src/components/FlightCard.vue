<template>
    <div>
      <h2>{{ flight.flightName }}</h2>
      <p>Airline ID: {{ flight.airlineId }}</p>
      <p>Departure Date: {{ flight.departureDateTime }}</p>
      <p>Arrival Date: {{ flight.arrivalDateTime }}</p>
      <p>Departure City: {{ flight.departureCity }}</p>
      <p>Arrival City: {{ flight.arrivalCity }}</p>
      <p>Price: {{ flight.price }}</p>
      <p>Scales: {{ flight.scales }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FlightCard',
    props: {
      flight: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  