import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {userLogin , setUser} = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email , password})
        userLogin(email , password)
            .then((result) =>{
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                alert(error.code);
            })
    }
    
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <h1 className="text-2xl font-semibold  text-center pb-6 border-b">Login your account</h1>

                        <label className="label mt-3 font-semibold">Email</label>
                        <input name="email" type="email" className="input w-full" placeholder="Enter Your Email address" />

                        <label className="label font-semibold">Password</label>
                        <input name="password" type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div className="text-xs font-semibold">
                            Dont Have An Account ? <Link className="text-red-600" to="/auth/register">Register</Link>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;