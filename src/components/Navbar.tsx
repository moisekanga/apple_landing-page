import React from "react";
import {navlinks} from "../constants"
const Navbar: React.FC = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple Logo" />
            <ul>
                {
                    navlinks.map(label => (
                        <li key={label.label}>
                            <a href={label.label}>{label.label}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
    )
}

export default Navbar;