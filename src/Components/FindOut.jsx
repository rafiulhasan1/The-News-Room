import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter
} from "react-icons/fa6";

const FindOut = () => {
    return (
        <div className="mt-8">

            <h2 className="text-xl font-bold text-gray-800 mb-5">
                Find Us On
            </h2>

            <div className="space-y-3">

                {/* Facebook */}

                <button
                    className="
                    w-full flex items-center gap-4
                    px-5 py-4
                    rounded-xl
                    border border-gray-200
                    bg-white
                    hover:bg-blue-50
                    hover:border-blue-500
                    hover:shadow-md
                    transition-all duration-300
                    group
                    "
                >
                    <div className="
                    w-10 h-10
                    rounded-full
                    bg-blue-100
                    flex items-center justify-center
                    group-hover:bg-blue-600
                    transition
                    ">

                        <FaFacebookF className="text-blue-600 group-hover:text-white" />

                    </div>

                    <div className="text-left">

                        <h3 className="font-semibold">
                            Facebook
                        </h3>

                        <p className="text-xs text-gray-500">
                            Follow our official page
                        </p>

                    </div>

                </button>

                {/* X */}

                <button
                    className="
                    w-full flex items-center gap-4
                    px-5 py-4
                    rounded-xl
                    border border-gray-200
                    bg-white
                    hover:bg-gray-900
                    hover:text-white
                    hover:border-gray-900
                    hover:shadow-md
                    transition-all duration-300
                    group
                    "
                >
                    <div className="
                    w-10 h-10
                    rounded-full
                    bg-gray-100
                    flex items-center justify-center
                    group-hover:bg-white
                    transition
                    ">

                        <FaXTwitter className="text-black" />

                    </div>

                    <div className="text-left">

                        <h3 className="font-semibold">
                            X (Twitter)
                        </h3>

                        <p className="text-xs opacity-70">
                            Latest updates
                        </p>

                    </div>

                </button>

                {/* Instagram */}

                <button
                    className="
                    w-full flex items-center gap-4
                    px-5 py-4
                    rounded-xl
                    border border-gray-200
                    bg-white
                    hover:bg-pink-50
                    hover:border-pink-500
                    hover:shadow-md
                    transition-all duration-300
                    group
                    "
                >
                    <div className="
                    w-10 h-10
                    rounded-full
                    bg-pink-100
                    flex items-center justify-center
                    group-hover:bg-pink-500
                    transition
                    ">

                        <FaInstagram className="text-pink-600 group-hover:text-white" />

                    </div>

                    <div className="text-left">

                        <h3 className="font-semibold">
                            Instagram
                        </h3>

                        <p className="text-xs text-gray-500">
                            Behind the scenes
                        </p>

                    </div>

                </button>

            </div>

        </div>
    );
};

export default FindOut;