import bgPng from "../assets/bg.png"

const RightSideBanner = () => {
    return (
        <div>
            <div className="text-center my-7 py-12 bg-gray-100"
                style={{
                    backgroundImage: `url(${bgPng})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className="text-2xl font-semibold p-3 my-4 text-white">Create an Amazing Newspaper</h1>
                <p className="p-3 my-4 text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-error text-white font-semibold mb-6">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideBanner;