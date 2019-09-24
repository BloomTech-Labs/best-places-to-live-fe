import React, { Fragment, Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false, //if loading show a spinner, if false, show data.
    alert: null
  };

  // displays initial 30 users
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });
  }

// Search Github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };

  // Get a single Github user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(res.data)
    this.setState({ user: res.data, loading: false });
  };

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } }); // not going to display anything just going to put the alert into state

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, user, loading } = this.state;

    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path='/Userlist'
              render={props => (
              <Fragment>
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClear={users.length > 0 ? true : false} //passing an expression as a prop
                  setAlert={this.setAlert}
                />
                <Users loading={loading} users={users} user={user} />
             </Fragment>
            )}
           />
           <Route exact path='/UserList/user/:login' render={props => (
             <User {...props}
              getUser={this.getUser}
              user={user} //user state
              loading={loading} //loading state
              />
           )} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
