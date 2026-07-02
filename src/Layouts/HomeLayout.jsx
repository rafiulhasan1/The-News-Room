import Home from "../Components/Home";
import LatestNews from "../Components/LatestNews";
import Navber from "../Components/Navber";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Home></Home>
                <section className="w-9/12 mx-auto">
                    <LatestNews/>
                </section>
            </header>
            <nav className="w-9/12 mx-auto mt-4">
                <Navber/>
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;