// import React, { Component } from 'react'
import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  Link,
  useRouteMatch,
  //useParams
} from "react-router-dom";
import { UsersOutline, PencilOutline, TrashOutline, PlusOutline } from "@graywolfai/react-heroicons";

export default function UserList(props) {
    let match = useRouteMatch();
    const {list} = props
    const keys = Object.keys(list);
    return (
        <div className= "container shadow-lg mx-auto bg-white mt-24 md:mt-18">
            <div className="w-full mt-12">
                <div className="clearfix">
                    <div className="uppercase float-left text-2xl pb-3 pt-1 pl-3 flex items-center">
                        <UsersOutline className="h-6 w-6" /> Users
                    </div>
                    <Link className="lowercase float-right text-base pr-4 pt-3 flex items-end text-green-400"
                        to={`${match.path}/form`}>
                        <PlusOutline className="h-6 w-6" /> add user
                    </Link>
                </div>
                <div className="bg-white overflow-auto">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Phone
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Website
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {keys.map(key =>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {list[key].name}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {list[key].username}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {list[key].email}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {list[key].phone}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {list[key].website}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex justify-center">
                                            <Link to={`${match.path}/form/${key}`}>
                                                <PencilOutline className="h-6 w-6 text-green-500" />
                                            </Link>
                                            <TrashOutline className="h-6 w-6 ml-1 text-red-500 cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
