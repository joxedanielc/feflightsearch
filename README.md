# feflightsearch

This project uses Vue.js and other components to get all flights via API and store the response in state using Pinia.

## Features

- Load all flights
- Filter flights by departure, arrival city & dates
- Use APIs call to get data
- Use pinio to save the api response

# Table of contents

1. [Tech Stack](https://github.com/joxedanielc/feflightsearch.git#tech-stack)
2. Code Explanation
   1. [MVP](https://github.com/joxedanielc/feflightsearch.git#mvp)
   2. [Components](https://github.com/joxedanielc/feflightsearch.git#components)
3. [Run Locally](https://github.com/joxedanielc/feflightsearch.git#run-locally)
4. [Feedback](https://github.com/joxedanielc/feflightsearch.git#feedback)
5. [License](https://github.com/joxedanielc/feflightsearch.git#license)

## Tech Stack

* Vue.js V3
* Element Plus 
* Vue Router
* Pinia
* Bootstrap V5

## Code Explanation

#### MVP
* The FlightStore store: This store stores the state of the application, including the list of flights.
* The searchFlights() method: This method is used to search for flights from the API.
* The flightsFromStore computed property: This property returns the list of flights from the FlightStore store.

#### Components
The component FlightSearch is where we can fin the filters that will be use in the search, if any filter is used, then GET will bring all flights.

The child component is FlightCard where the response is render showing the information.

## Run Locally

### Important:

Clone the project

```bash
  git clone https://github.com/joxedanielc/feflightsearch.git
```

Go to the project directory

```bash
cd feflightsearch
```

Install packages:

```bash
npm install
```

Run

```bash
npm run serve
```

**Important:** Verify in what port the app running at


## Feedback

If you have any feedback, please leave a comment.

## License

[MIT](https://choosealicense.com/licenses/mit/)