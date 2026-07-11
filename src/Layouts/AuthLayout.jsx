import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import FooterPage from "../Components/FooterPage";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
            <header className="mt-8">
                <Navber></Navber>
            </header>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
    );
};

export default AuthLayout;