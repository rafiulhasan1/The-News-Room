import bgPng from "../assets/bg.png";

const RightSideBanner = () => {
    return (
        <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            my-8
            shadow-xl
            group
            "
            style={{
                backgroundImage: `url(${bgPng})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>

            {/* Content */}

            <div className="relative z-10 px-8 py-16 text-center">

                <span className="
                inline-block
                bg-[#D72050]
                text-white
                text-xs
                font-semibold
                px-4
                py-2
                rounded-full
                uppercase
                tracking-widest
                mb-5
                ">
                    Advertisement
                </span>

                <h1 className="text-3xl font-bold text-white leading-tight">

                    Create an Amazing Newspaper

                </h1>

                <p className="text-gray-200 leading-8 mt-5">

                    Discover thousands of layouts, beautiful widgets,
                    premium UI components and modern newspaper templates.

                </p>

                <button
                    className="
                    mt-8
                    px-8
                    py-3
                    rounded-full
                    bg-[#D72050]
                    hover:bg-white
                    hover:text-[#D72050]
                    text-white
                    font-semibold
                    shadow-lg
                    hover:scale-105
                    duration-300
                    cursor-pointer
                    "
                >
                    Learn More →
                </button>

            </div>

        </div>
    );
};

export default RightSideBanner;