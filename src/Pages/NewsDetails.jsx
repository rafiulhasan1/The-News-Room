import moment from "moment";
import {
    FaArrowLeft,
    FaCalendarAlt,
    FaUserCircle,
    FaShareAlt,
    FaBookmark
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import RightNavBer from "../Components/LayoutComponents/RightNavBer";
import Navber from "../Components/Navber";
import FooterPage from "../Components/FooterPage";

const NewsDetails = () => {

    const { data } = useLoaderData();

    const news = data[0];

    const {
        title,
        image_url,
        details,
        author,
        category_id
    } = news;

    return (
        <>
            <Navber />

            <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8 py-10">

                {/* Left Side */}

                <section className="lg:col-span-9">

                    <p className="text-xl font-bold text-gray-800 mb-6">
                        News Details
                    </p>

                    <article className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg">

                        {/* Hero Image */}

                        <div className="overflow-hidden">

                            <img
                                src={image_url}
                                alt={title}
                                className="w-full h-[450px] object-cover hover:scale-105 duration-500"
                            />

                        </div>

                        <div className="p-8">

                            {/* Badge */}

                            <span className="inline-block bg-[#D72050] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">

                                Breaking News

                            </span>

                            {/* Title */}

                            <h1 className="text-4xl font-bold leading-tight text-gray-900">

                                {title}

                            </h1>

                            {/* Author */}

                            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pb-6 border-b border-gray-200">

                                <div className="flex items-center gap-4">

                                    <img
                                        src={author.img}
                                        alt=""
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#D72050]"
                                    />

                                    <div>

                                        <h3 className="font-semibold text-lg">

                                            {author.name}

                                        </h3>

                                        <div className="flex items-center gap-2 text-gray-500 text-sm">

                                            <FaCalendarAlt />

                                            {moment(author.published_date).format("MMMM DD, YYYY")}

                                        </div>

                                    </div>

                                </div>

                                {/* Actions */}

                                <div className="flex gap-3">

                                    <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#D72050] hover:text-white duration-300 flex items-center justify-center">

                                        <FaBookmark />

                                    </button>

                                    <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#D72050] hover:text-white duration-300 flex items-center justify-center">

                                        <FaShareAlt />

                                    </button>

                                </div>

                            </div>

                            {/* Article */}

                            <div className="mt-8">

                                <p className="text-gray-700 leading-9 text-[17px]">

                                    {details}

                                </p>

                            </div>

                            {/* Button */}

                            <Link
                                to={`/cetagory/${category_id}`}
                                className="inline-flex items-center gap-2 mt-10 bg-[#D72050] hover:bg-[#b11b43] text-white px-8 py-3 rounded-full font-semibold transition duration-300"
                            >

                                <FaArrowLeft />

                                Back to Category

                            </Link>

                        </div>

                    </article>

                </section>

                {/* Sidebar */}

                <aside className="lg:col-span-3">

                    <RightNavBer />

                </aside>

            </div>
            <FooterPage />

        </>
    );
};

export default NewsDetails;