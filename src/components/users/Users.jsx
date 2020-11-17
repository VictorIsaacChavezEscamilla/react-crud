// import React, { Component } from 'react'
import {
//   BrowserRouter as Router,
  Switch,
  Route,
//   Link,
  useRouteMatch,
//   useParams
} from "react-router-dom";

import UserList from './UserList'
import UserForm from './UserForm'

export default function Users(props) {
    let match = useRouteMatch();
    const { list } = props

    return (
        //className="flex mx-auto bg-white mt-32 md:mt-18"
        <Switch>
            <Route path={`${match.path}/form/:userId?`}>
                <UserForm />
            </Route>
            <Route path={match.path}>
                <UserList list={ list }/>
            </Route>
        </Switch>
    )
}
