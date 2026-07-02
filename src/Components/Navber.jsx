import { Link } from "react-router-dom";
import navLogo from "../assets/user.png"

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link to="/">Home</Link>
                            <Link to="/career">Career</Link>
                            <Link to="/about">About</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-gray-600 gap-3">
                        <Link to="/">Home</Link>
                        <Link to="/career">Career</Link>
                        <Link to="/about">About</Link>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div>
                        <img src={navLogo} alt="" />
                    </div>
                    <a className="btn btn-neutral px-8">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;