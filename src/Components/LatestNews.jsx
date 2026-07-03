import * as MarqueeModule from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquee = MarqueeModule.default.default ?? MarqueeModule.default;

const LatestNews = () => {

    return (
        <div className="flex items-center gap-2 bg-gray-100 p-3">
            <p className="bg-[#D72050] text-white py-1 px-2">Latest</p>
            <Marquee >
                <Link to="/news" className="mx-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur saepe ipsum laborum nulla quos dicta maiores itaque a ipsa.
                </Link>
                <Link to="/news" className="mx-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur saepe ipsum laborum nulla quos dicta maiores itaque a ipsa.
                </Link>
                <Link to="/news" className="mx-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur saepe ipsum laborum nulla quos dicta maiores itaque a ipsa.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;