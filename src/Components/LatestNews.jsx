import * as MarqueeModule from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquee =
  MarqueeModule.default.default ?? MarqueeModule.default;

const LatestNews = () => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <div className="flex items-center">

        {/* Left */}

        <div className="bg-[#D72050] text-white px-6 py-4 flex items-center gap-2 font-semibold">

          <span className="w-3 h-3 rounded-full bg-white animate-pulse"></span>

          BREAKING

        </div>

        {/* Right */}

        <Marquee
          pauseOnHover
          speed={60}
          gradient={false}
          className="py-4 font-medium text-gray-700"
        >

          <Link
            className="mx-12 hover:text-[#D72050] duration-300"
            to="/"
          >
            📰 Bangladesh launches new digital policy.
          </Link>

          <Link
            className="mx-12 hover:text-[#D72050] duration-300"
            to="/"
          >
            ⚽ Argentina prepares for World Cup qualifiers.
          </Link>

          <Link
            className="mx-12 hover:text-[#D72050] duration-300"
            to="/"
          >
            💰 Global stock markets rise today.
          </Link>

        </Marquee>

      </div>

    </section>
  );
};

export default LatestNews;