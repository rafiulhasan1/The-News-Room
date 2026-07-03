import FindOut from "../FindOut";
import QZone from "../QZone";
import RightSideBanner from "../RightSideBanner";
import SocialLogin from "../SocialLogin";

const RightNavBer = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindOut></FindOut>
            <QZone></QZone>
            <RightSideBanner></RightSideBanner>
        </div>
    );
};

export default RightNavBer;