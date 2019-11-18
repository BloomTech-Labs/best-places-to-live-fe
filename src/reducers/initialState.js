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
  topTen: [],
  isFetching: false,
  fetchLocationsByFactorsError: "",
  fetchLocationsByNameError: "",
  fetchFactorsError: "",
  loginError: "",
  signupError: "",
  fetchTopTenError: ""
};

export default initialState;
