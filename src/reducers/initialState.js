const initialState = {
  user: {
    isLoggedIn: false,
    likes: [],
    dislikes: []
  },
  displayedCities: [],
  topCities: {},
  isFetching: false,
  error: ""
};

export default initialState;
