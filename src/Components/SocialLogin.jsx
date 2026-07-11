import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 mb-5">
                Login With
            </h2>

            <div className="space-y-4">

                {/* Google Button */}

                <button
                    className="
                    w-full flex items-center justify-center gap-3
                    py-3 rounded-xl
                    border-2 border-gray-200
                    bg-white
                    font-medium
                    text-gray-700
                    hover:bg-red-50
                    hover:border-[#D72050]
                    hover:text-[#D72050]
                    hover:-translate-y-1
                    hover:shadow-lg
                    transition-all duration-300
                    cursor-pointer
                    "
                >
                    <FaGoogle className="text-xl" />
                    Login with Google
                </button>

                {/* GitHub Button */}

                <button
                    className="
                    w-full flex items-center justify-center gap-3
                    py-3 rounded-xl
                    border-2 border-gray-200
                    bg-white
                    font-medium
                    text-gray-700
                    hover:bg-gray-900
                    hover:border-gray-900
                    hover:text-white
                    hover:-translate-y-1
                    hover:shadow-lg
                    transition-all duration-300
                    cursor-pointer
                    "
                >
                    <FaGithub className="text-xl" />
                    Login with GitHub
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;