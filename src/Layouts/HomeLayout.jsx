import { Outlet } from "react-router-dom";
import Home from "../Components/Home";
import LatestNews from "../Components/LatestNews";
import LeftNevBer from "../Components/LayoutComponents/LeftNevBer";
import RightNavBer from "../Components/LayoutComponents/RightNavBer";
import Navber from "../Components/Navber";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Home></Home>
                <section className="w-11/12 mx-auto">
                    <LatestNews/>
                </section>
            </header>
            <nav className="w-11/12 mx-auto mt-4">
                <Navber/>
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-3 mt-8">
                <aside className="col-span-3"><LeftNevBer></LeftNevBer></aside>
                <section className="col-span-6">
                    <Outlet/>
                </section>
                <aside className="col-span-3"><RightNavBer></RightNavBer></aside>
            </main>
        </div>
    );
};

export default HomeLayout;