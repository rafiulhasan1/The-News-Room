import { useLoaderData } from "react-router-dom";
import SingleNews from "../Components/SingleNews";
import FadeIn from "../Components/Common/FadeIn";

const HomeNews = () => {

    const { data: news } = useLoaderData();
    //console.log(news)
    return (
        <div>
            <h1 className="font-semibold mb-3">Dragon News Home</h1>
            {
                news.map((singleNews) => <FadeIn delay={0.2}>
                    <SingleNews key={singleNews._id}
                news={singleNews}></SingleNews>
                </FadeIn>)
            }
        </div>
    );
};

export default HomeNews;