//something like this
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
  isFetching: false,
  fetchLocationsByFactorsError: "",
  fetchLocationsByNameError: "",
  fetchFactorsError: "",
  loginError: "",
  signupError: ""
};

export default initialState;
