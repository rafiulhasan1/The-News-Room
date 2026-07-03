import { useLoaderData } from "react-router-dom";
import SingleNews from "../Components/SingleNews";

const HomeNews = () => {

    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div>
            <h1 className="font-semibold mb-3">Dragon News Home</h1>
            {
                news.map((singleNews) => <SingleNews key={singleNews._id}
                news={singleNews}></SingleNews>)
            }
        </div>
    );
};

export default HomeNews;