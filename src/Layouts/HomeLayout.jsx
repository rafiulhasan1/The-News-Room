import Home from "../Components/Home";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Home></Home>
                <section className="w-9/12 mx-auto">
                    <LatestNews/>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;