const initialState = {
  user: {
    isLoggedIn: false,
    likes: [],
    dislikes: []
  },
  selectedFactors: [],
  displayedCities: [],
  topCities: {},
  isFetching: false,
  error: ""
};

export default initialState;
