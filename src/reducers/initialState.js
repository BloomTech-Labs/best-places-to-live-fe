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
  fetchTopCitiesError: "",
  addLikedCitiesError: "",
  addDislikedCitiesError: ""
};

export default initialState;
