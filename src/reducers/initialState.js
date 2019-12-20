const initialState = {
  user: {
    isLoggedIn: false,
    likes: [],
    dislikes: [],
    name: "",
    email: "",
    location: ""
  },
  selectedFactors: [],
  displayedCities: [],
  comparedCities: [],
  topCities: {},
  isFetching: false,
  error: ""
};

export default initialState;
