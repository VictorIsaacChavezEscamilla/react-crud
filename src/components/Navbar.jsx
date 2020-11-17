import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            close: true,
        };
    }

    toggleNavContent = e => {
        this.setState({
            close: !this.state.close,
        });
    }

    render() {
        const { logo, title, children } = this.props
        const { close } = this.state

        return (
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-6 fixed w-full z-10 top-0 h-16">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <div className="text-white no-underline hover:text-white hover:no-underline">
                        <span className="text-2xl pl-2 flex justify-center">
                        <img src={logo} width="40" height="40" alt="Brand logo" />
                        {title}
                        </span>
                    </div>
                </div>

                <div className="block lg:hidden">
                    <button id="nav-toggle" onClick={this.toggleNavContent}
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div className={"bg-gray-800 w-full flex-grow lg:flex lg:items-center lg:w-auto " + (close ? 'hidden' : '')  + " lg:block pt-6 lg:pt-0"} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        { children }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar
