import { Link } from "react-router-dom";
import navLogo from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-3">

                {/* Mobile Menu */}
                <div className="navbar-start">

                    <div className="dropdown lg:hidden">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-xl w-52"
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    {
                        user?.email && (
                            <p className="hidden lg:block text-sm text-gray-500 font-medium">
                                Welcome, {user.email}
                            </p>
                        )
                    }

                </div>

                {/* Desktop Menu */}

                <div className="navbar-center hidden lg:flex">

                    <ul className="flex items-center gap-8 font-medium text-gray-700">

                        <li>
                            <Link
                                to="/"
                                className="hover:text-[#D72050] transition duration-300"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/career"
                                className="hover:text-[#D72050] transition duration-300"
                            >
                                Career
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="hover:text-[#D72050] transition duration-300"
                            >
                                About
                            </Link>
                        </li>

                    </ul>

                </div>

                {/* Right Side */}

                <div className="navbar-end gap-4">

                    <img
                        src={user?.photoURL || navLogo}
                        alt="User"
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#D72050]"
                    />

                    {
                        user ? (
                            <button
                                onClick={logOut}
                                className="btn bg-[#D72050] hover:bg-[#b51a44] text-white border-none rounded-full px-7"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="btn bg-[#D72050] hover:bg-[#b51a44] text-white border-none rounded-full px-7"
                            >
                                Login
                            </Link>
                        )
                    }

                </div>

            </div>
        </header>
    );
};

export default Navber;