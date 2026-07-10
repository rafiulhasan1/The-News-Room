import moment from "moment";
import {
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNews = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    _id,
  } = news;
  console.log(news)

  return (
    <div className="card bg-white border border-gray-200 shadow-sm mb-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {moment(author.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-black" />
          <FaShareAlt className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h2 className="text-2xl font-bold leading-9 mb-5">
          {title}
        </h2>

        <img
          src={thumbnail_url}
          alt={title}
          className="w-full object-cover rounded-md mb-5"
        />

        <p className="text-gray-600 leading-8">
          {details.length > 180 ? (
            <>
              {details.slice(0, 180)}...
              <Link to={`/news/${_id}`} className="text-orange-500 font-semibold cursor-pointer">
                {" "}
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-4 border-t">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-orange-400" />
          ))}

          <span className="ml-2 font-semibold">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;