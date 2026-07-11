import { Outlet } from "react-router-dom";
import Home from "../Components/Home";
import LatestNews from "../Components/LatestNews";
import LeftNevBer from "../Components/LayoutComponents/LeftNevBer";
import RightNavBer from "../Components/LayoutComponents/RightNavBer";
import Navber from "../Components/Navber";
import FooterPage from "../Components/FooterPage";
import FadeIn from "../Components/Common/FadeIn";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Home></Home>
                <section className="w-11/12 mx-auto">
                    <FadeIn>
                        <LatestNews />
                    </FadeIn>
                </section>
            </header>
            <nav className="w-11/12 mx-auto mt-4">
                <Navber />
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-3 mt-8">
                <aside className="col-span-3">
                    <FadeIn delay={0.1}>
                        <LeftNevBer />
                    </FadeIn>
                </aside>
                <section className="col-span-6">
                    <Outlet />
                </section>
                <aside className="col-span-3">
                    <FadeIn delay={0.3}>
                        <RightNavBer />
                    </FadeIn>
                </aside>
            </main>
                <FooterPage></FooterPage>
        </div>
    );
};

export default HomeLayout;