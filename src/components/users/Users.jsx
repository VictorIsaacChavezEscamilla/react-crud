import React, { Component } from 'react'
import UserList from './UserList'
import UserForm from './UserForm'

export default class Users extends Component {
    render() {
        const { list } =this.props
        return (
            <div className="pt-2">
                <UserForm />
                <UserList list={ list}/>
            </div>
        )
    }
}
