import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterPage = () => {
  return (
    <footer className="bg-[#111827] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}

          <div>

            <h1 className="text-3xl font-bold text-[#D72050]">
              The News Room
            </h1>

            <p className="mt-5 text-gray-400 leading-7">
              Stay informed with breaking news, politics,
              business, sports, entertainment and technology
              from around the world.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="hover:text-[#D72050] duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="hover:text-[#D72050] duration-300"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="hover:text-[#D72050] duration-300"
                >
                  Latest News
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="hover:text-[#D72050] duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Contact
            </h2>

            <div className="space-y-3 text-gray-400">

              <p>📍 Dhaka, Bangladesh</p>

              <p>📧 support@thenewsroom.com</p>

              <p>📞 +880 1234-567890</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Follow Us
            </h2>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0A66C2] duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 duration-300"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-5 md:flex-row justify-center items-center gap-3">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} The News Room. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default FooterPage;