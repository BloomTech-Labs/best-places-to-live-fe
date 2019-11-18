const initialState = {
  user: {
    factors: [
      "Job Market",
      "Food",
      "Chicken",
      "Number of Diapers",
      "Proximity to Rack City"
    ],
    isLoggedIn: false
  },
  displayedCities: [],
  topCities: [],
  isFetching: false,
  fetchLocationsByFactorsError: "",
  fetchLocationsByNameError: "",
  fetchFactorsError: "",
  loginError: "",
  signupError: "",
  fetchTopCitiesError: ""
};

export default initialState;
