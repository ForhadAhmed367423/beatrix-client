import UsePickTodays from "../../../../../Hooks/UsePickTodays";
import PickTodayCard from "./PickTodayCard";

const PickToday = () => {
    const [picktodaysData] = UsePickTodays();
    return (
        <div className="pickToday">
            <h1 className="PickHead font">Todays Pick</h1>
            <div>
                {
                    picktodaysData.map(items =><PickTodayCard key={items._id} items={items}/>)
                }
            </div>
        </div>
    );
};

export default PickToday;