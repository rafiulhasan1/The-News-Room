import FindOut from "../FindOut";
import QZone from "../QZone";
import RightSideBanner from "../RightSideBanner";
import SocialLogin from "../SocialLogin";

const RightNavBer = () => {
    return (
        <aside className="space-y-6">

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-lg duration-300">
                <SocialLogin />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-lg duration-300">
                <FindOut />
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 hover:shadow-lg duration-300">
                <QZone />
            </div>

            <RightSideBanner />

        </aside>
    );
};

export default RightNavBer;