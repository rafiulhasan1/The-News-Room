import { useLoaderData } from "react-router-dom";

const HomeNews = () => {

    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>The data is Loded {data.length}</h1>
        </div>
    );
};

export default HomeNews;