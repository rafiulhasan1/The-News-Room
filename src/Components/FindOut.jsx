import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindOut = () => {
    return (
        <div className="mt-8">
            <h1 className="font-semibold">Find Us On</h1>
            <div className="*:w-full">
                <button className="btn flex mt-3">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn flex mt-3">
                    <FaTwitter/> Twitter
                </button>
                <button className="btn flex mt-3">
                    <FaInstagram/> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindOut;