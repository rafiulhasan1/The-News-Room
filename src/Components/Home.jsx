
import moment from "moment";
import logo from "../assets/logo.png"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center py-3">
            <div className="logo">
                <img className="w-[400px]"  src={logo} alt="" />
            </div>
            <div className="text-gray-500">
                <h2>Journalism Without Fear or Favor</h2>
            </div>
            <div className="font-bold text-gray-500">
                {moment().format("dddd, MMMM Do YYYY, h:mm a")}
            </div>
        </div>
    );
};

export default Home;