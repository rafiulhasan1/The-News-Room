import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <h1 className="text-2xl font-semibold  text-center pb-6 border-b">Register your account</h1>

                        <label className="label mt-3 font-semibold">Your Name</label>
                        <input type="text" className="input w-full" placeholder="Enter Your Name" />

                        <label className="label mt-3 font-semibold">Photo URL</label>
                        <input type="text" className="input w-full" placeholder="Enter Your Photo URL" />

                        <label className="label mt-3 font-semibold">Email</label>
                        <input type="email" className="input w-full" placeholder="Enter Your Email Address" />

                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input w-full" placeholder="Enter Your Password" />

                        <label className="label py-4 border-b">
                            <input type="checkbox" className="checkbox" />
                            Accept Term & Conditions
                        </label>

                        <div className="text-xs font-semibold pt-2">
                           Already Have an account ? <Link className="text-red-600" to="/auth/login">Login</Link>
                        </div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;