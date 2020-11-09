import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers, addUser, deleteUser, updateUser } from "./reducers/Users";

import { TailwindNavbar } from "tailwind-navbar-react";
import Users from "./components/users/Users";

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
      <>
        <TailwindNavbar
          brand={<img src={logo} width="40" height="40" alt="Brand logo" />}
          className="py-1">
          <nav>
            <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
              <li>
                <a
                  className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                  href="/">
                  A Link
                </a>
              </li>
              <li>
                <a
                  className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                  href="/">
                  A Link 2
                </a>
              </li>
              <li>
                <a
                  className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                  href="/">
                  A Link 3
                </a>
              </li>
            </ul>
          </nav>
        </TailwindNavbar>
        <div className="container mx-auto px-4 pt-16">
          <Users list={users} />
        </div>
      </>
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
