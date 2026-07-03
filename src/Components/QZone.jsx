import classes from "../assets/class.png"
import playGround from "../assets/playground.png"
import swimming from "../assets/swimming.png"

const QZone = () => {
    return (
        <div className="my-8 p-5 bg-gray-100">
            <h1 className="text-xl font-semibold">Q-Zone</h1>
            <div>
                <img src={classes} alt="" />
                <img src={playGround} alt="" />
                <img src={swimming} alt="" />
            </div>
        </div>
    );
};

export default QZone;