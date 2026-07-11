import classes from "../assets/class.png";
import playGround from "../assets/playground.png";
import swimming from "../assets/swimming.png";

const qZoneItems = [
    {
        title: "Online Classes",
        image: classes,
    },
    {
        title: "Play Ground",
        image: playGround,
    },
    {
        title: "Swimming Club",
        image: swimming,
    },
];

const QZone = () => {
    return (
        <div className="mt-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm p-6">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Q-Zone
            </h2>

            <div className="space-y-6">

                {
                    qZoneItems.map((item, index) => (

                        <div
                            key={index}
                            className="group cursor-pointer"
                        >

                            <div className="overflow-hidden rounded-xl">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                    w-full
                                    rounded-xl
                                    duration-500
                                    group-hover:scale-105
                                    "
                                />

                            </div>

                            <h3 className="
                            mt-3
                            text-center
                            font-semibold
                            text-gray-700
                            group-hover:text-[#D72050]
                            duration-300
                            ">
                                {item.title}
                            </h3>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default QZone;