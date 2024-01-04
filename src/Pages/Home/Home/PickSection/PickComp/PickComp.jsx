import PickToday from "./PickToday";
import RecentPick from "./RecentPick";

const PickComp = () => {
    return (
        <div>
            <div className="pickComp">
                <PickToday/>
                <RecentPick/>
            </div>
        </div>
    );
};

export default PickComp;