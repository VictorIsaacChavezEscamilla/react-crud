import { NavLink } from 'react-router-dom'

export default function CustomNavLink(props) {
    const { children, to } = props

    return (
        <li className="mr-3">
            <NavLink exact to={to} className="inline-block py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline" activeStyle={{color:'white'}}>
                {children}
            </NavLink>
        </li>
    )
}
