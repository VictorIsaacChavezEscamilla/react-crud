import React, { Component } from 'react'
import { UsersOutline, PencilOutline, TrashOutline, PlusOutline } from "@graywolfai/react-heroicons";

export default class UserList extends Component {
    render() {
        const {list} = this.props
        const keys = Object.keys(list);
        return (
            <>
                <div className="flex justify-center">
                    <UsersOutline className="h-6 w-6" />
                    <h1 className="text-lg font-bold uppercase">
                        Users
                    </h1> 
                    <PlusOutline className="h-6 w-6 text-green-300" />
                </div>
                <table class="table-auto">
                <thead>
                    <tr>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">User Name</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Phone</th>
                    <th class="px-4 py-2">Website</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {keys.map(key =>
                        <tr key={key}>
                            <td class="border px-4 py-2">
                                {list[key].name}
                            </td>
                            <td class="border px-4 py-2">
                                {list[key].username}
                            </td>
                            <td class="border px-4 py-2">
                                {list[key].email}
                            </td>
                            <td class="border px-4 py-2">
                                {list[key].phone}
                            </td>
                            <td class="border px-4 py-2">
                                {list[key].website}
                            </td>
                            <td class="border px-4 py-2 flex justify-center">
                                    <PencilOutline className="h-6 w-6 text-green-500" />
                                    <TrashOutline className="h-6 w-6 text-red-500" />
                            </td>
                        </tr>
                    )}
                </tbody>
                </table>
            </>
        )
    }
}
