import moment from "moment";
import logo from "../assets/logo.png";

const Home = () => {
    return (
        <header className="py-10 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">

            <div className="max-w-7xl mx-auto text-center px-4">

                <img
                    src={logo}
                    alt="The News Room"
                    className="w-80 mx-auto hover:scale-105 duration-500"
                />

                <p className="mt-5 text-lg text-gray-500 tracking-wide">
                    Journalism Without Fear or Favor
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-gray-600 text-sm bg-white shadow-sm border border-gray-200 rounded-full px-5 py-2">

                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>

                    {moment().format("dddd, MMMM Do YYYY • h:mm A")}

                </div>

            </div>

        </header>
    );
};

export default Home;