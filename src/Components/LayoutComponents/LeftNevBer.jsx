import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNevBer = () => {

    const [cetagories, setCetagories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCetagories(data.data.news_category))
    }, []);

    return (
        <div>
            <h2 className="font-semibold">All Caterogy</h2>
            <div className="flex flex-col gap-2 mt-3">
                {
                    cetagories.map(cetagory => <NavLink to={`/cetagory/${cetagory.category_id}`} className="btn font-semibold" key={cetagory.category_id}>
                        {cetagory.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNevBer;