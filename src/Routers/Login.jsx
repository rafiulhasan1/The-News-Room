import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <h1 className="text-2xl font-semibold  text-center pb-6 border-b">Login your account</h1>
                        <label className="label mt-3 font-semibold">Email</label>
                        <input type="email" className="input w-full" placeholder="Enter Your Email address" />
                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input w-full" placeholder="Enter Your Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <div className="text-xs font-semibold">
                            Dont Have An Account ? <Link className="text-red-600" to="/auth/register">Register</Link>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;