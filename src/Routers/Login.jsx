import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {

                setUser(result.user);

                navigate(location?.state || "/");

            })
            .catch((error) => {

                alert(error.code);

            });

    };

    return (

        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 via-white to-red-50 px-4">

            <div className="w-full max-w-md">

                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">

                    <div className="text-center mb-8">

                        <h1 className="text-4xl font-bold text-gray-800">

                            Welcome Back

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Login to continue reading the latest news.

                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Email */}

                        <div>

                            <label className="font-semibold text-gray-700">

                                Email Address

                            </label>

                            <div className="relative mt-2">

                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D72050] duration-300"
                                />

                            </div>

                        </div>

                        {/* Password */}

                        <div>

                            <label className="font-semibold text-gray-700">

                                Password

                            </label>

                            <div className="relative mt-2">

                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D72050] duration-300"
                                />

                            </div>

                        </div>

                        <button
                            className="
                            w-full
                            bg-[#D72050]
                            hover:bg-[#b71d44]
                            text-white
                            font-semibold
                            py-3
                            rounded-xl
                            transition-all
                            duration-300
                            hover:shadow-xl
                            hover:-translate-y-1
                            cursor-pointer
                            "
                        >
                            Login
                        </button>

                    </form>

                    <div className="mt-8 text-center">

                        <p className="text-gray-600">

                            Don't have an account?

                            <Link
                                to="/auth/register"
                                className="ml-2 font-semibold text-[#D72050] hover:underline"
                            >

                                Register

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Login;