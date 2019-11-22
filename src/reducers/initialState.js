const initialState = {
  user: {
    factors: [],
    isLoggedIn: false,
    likes: [],
    dislikes: []
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
