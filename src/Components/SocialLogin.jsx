import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold mb-2">Login With</h1>
            <div className="*:w-full space-y-2">
                <button className="btn flex items-center">
                    <FaGoogle></FaGoogle> Login With Google
                </button>
                <button className="btn flex items-center">
                    <FaGithub></FaGithub> Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;