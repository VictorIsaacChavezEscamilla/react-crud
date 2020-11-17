import React, { Component } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

import { getUsers, addUser, deleteUser, updateUser } from "./reducers/Users";

import Users from "./components/users/Users";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CustomNavLink from "./components/CustomNavLink";

import logo from "./logo.svg";
class App extends Component {
  constructor(props) {
    super(props);
    const { getUsers } = props;
    getUsers();
  }
  render() {
    const {
      Users: { data: users }
    } = this.props;

    return (
      <Router>
        <div className="font-sans leading-normal tracking-normal">
          <Navbar logo={logo} title="React CRUD">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/users">Users</CustomNavLink>
          </Navbar>
          <Switch>
            <Route path="/users">
              <Users list={users} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          {/* <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18">
        </div> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  addUser: payload => dispatch(addUser(payload)),
  updateUser: payload => dispatch(updateUser(payload)),
  deleteUser: payload => dispatch(deleteUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
