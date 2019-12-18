const initialState = {
  user: {
    isLoggedIn: false,
    likes: [],
    dislikes: []
  },
  selectedFactors: [],
  displayedCities: [],
  comparedCities: [],
  topCities: {},
  isFetching: false,
  error: ""
};

export default initialState;
