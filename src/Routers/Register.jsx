import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaImage
} from "react-icons/fa";

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createNewUser(email, password)
            .then((result) => {

                setUser(result.user);
                navigate(location?.state || "/")

            })
            .catch((error) => {

                alert(error.code);

            });

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-red-50 flex justify-center items-center px-4 py-10">

            <div className="w-full max-w-xl">

                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">

                    <div className="text-center mb-8">

                        <h1 className="text-4xl font-bold text-gray-800">
                            Create Account
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Join The News Room today.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Name */}

                        <div>

                            <label className="font-semibold text-gray-700">

                                Full Name

                            </label>

                            <div className="relative mt-2">

                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D72050] transition duration-300"
                                />

                            </div>

                        </div>

                        {/* Photo */}

                        <div>

                            <label className="font-semibold text-gray-700">

                                Photo URL

                            </label>

                            <div className="relative mt-2">

                                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Paste your photo URL"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D72050] transition duration-300"
                                />

                            </div>

                        </div>

                        {/* Email */}

                        <div>

                            <label className="font-semibold text-gray-700">

                                Email

                            </label>

                            <div className="relative mt-2">

                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D72050] transition duration-300"
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
                                    placeholder="Create a password"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D72050] transition duration-300"
                                />

                            </div>

                        </div>

                        {/* Checkbox */}

                        <label className="flex items-center gap-3 mt-2">

                            <input
                                type="checkbox"
                                className="checkbox checkbox-error"
                            />

                            <span className="text-sm text-gray-600">

                                I accept the Terms & Conditions

                            </span>

                        </label>

                        {/* Button */}

                        <button
                            className="
                            w-full
                            py-3
                            rounded-xl
                            bg-[#D72050]
                            hover:bg-[#b51a44]
                            text-white
                            font-semibold
                            hover:shadow-xl
                            hover:-translate-y-1
                            transition-all
                            duration-300
                            "
                        >
                            Create Account
                        </button>

                    </form>

                    <div className="text-center mt-7">

                        <p className="text-gray-600">

                            Already have an account?

                            <Link
                                to="/auth/login"
                                className="text-[#D72050] font-semibold ml-2 hover:underline"
                            >

                                Login

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Register;