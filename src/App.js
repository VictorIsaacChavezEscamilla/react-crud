import logo from "./logo.svg";

import { TailwindNavbar } from "tailwind-navbar-react";

function App() {
  return (
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
        </ul>
      </nav>
    </TailwindNavbar>
  );
}

export default App;
