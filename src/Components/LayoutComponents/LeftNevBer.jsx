import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNevBer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category));
    }, []);

    return (
        <aside className="sticky top-24">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                All Categories
            </h2>

            <div className="space-y-3">

                {categories.map((category) => (
                    <NavLink
                        key={category.category_id}
                        to={`/cetagory/${category.category_id}`}
                        className={({ isActive }) =>
                            `group flex items-center justify-between
                            px-5 py-4 rounded-xl
                            font-medium
                            transition-all duration-300
                            border

                            ${
                                isActive
                                    ? "bg-[#D72050] text-white border-[#D72050] shadow-lg"
                                    : "bg-white border-gray-200 text-gray-700 hover:bg-red-50 hover:border-[#D72050] hover:text-[#D72050] hover:translate-x-2"
                            }`
                        }
                    >
                        <span>{category.category_name}</span>

                        <span
                            className="
                            text-lg
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            "
                        >
                            →
                        </span>
                    </NavLink>
                ))}

            </div>

        </aside>
    );
};

export default LeftNevBer;