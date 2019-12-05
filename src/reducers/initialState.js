const initialState = {
  user: {
    factors: [],
    isLoggedIn: false,
    likes: [],
    dislikes: []
  },
  displayedCities: [],
  topCities: { score_total: [] },
  isFetching: false,
  error: ""
};

export default initialState;
