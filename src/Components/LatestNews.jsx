import { useEffect, useState } from "react";
import * as MarqueeModule from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquee = MarqueeModule.default.default ?? MarqueeModule.default;

const LatestNews = () => {

    const [loadTitle, setLoadTitle] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/category/08")
            .then(res => res.json())
            .then(data => setLoadTitle(data.data))
    }, [])

    return (
        <div className="flex items-center gap-2 bg-gray-100 p-3">
            <p className="bg-[#D72050] text-white py-1 px-2">Latest</p>
            <Marquee speed={100} >
                {
                    loadTitle.map((news) => <p className="font-semibold mr-8 text-gray-600" key={news._id}>{news.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;