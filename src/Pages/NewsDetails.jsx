import moment from "moment";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import RightNavBer from "../Components/LayoutComponents/RightNavBer";
import Navber from "../Components/Navber";

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
        <div>
            <Navber />

            <div className="w-11/12 mx-auto grid grid-cols-12 gap-6 mt-10">

                {/* Left Side */}
                <section className="col-span-9">

                    <h2 className="text-xl font-semibold mb-5">
                        News Room
                    </h2>

                    <div className="border-0  shadow-xl rounded-lg p-6">

                        <img
                            src={image_url}
                            alt={title}
                            className="w-full rounded-lg"
                        />

                        <h1 className="text-4xl font-bold my-6 leading-tight">
                            {title}
                        </h1>

                        <p className="text-gray-500 mb-5">
                            {moment(author.published_date).format("dddd, MMMM Do YYYY")}
                        </p>

                        <p className="text-gray-600 leading-8">
                            {details}
                        </p>

                        <Link
                            to={`/cetagory/${category_id}`}
                            className="btn btn-error mt-8 text-white"
                        >
                            <FaArrowLeft />
                            All news in this category
                        </Link>

                    </div>

                </section>

                {/* Right Side */}
                <aside className="col-span-3">
                    <RightNavBer />
                </aside>

            </div>
        </div>
    );
};

export default NewsDetails;