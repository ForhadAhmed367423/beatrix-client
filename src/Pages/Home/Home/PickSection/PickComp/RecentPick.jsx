import UseRecentPick from "../../../../../Hooks/UseRecentPick";
import RecentPickCard from "./RecentPickCard";

const RecentPick = () => {
    const [recentPickData]= UseRecentPick();
    return (
        <div className="recent"> 
           <h1 className="PickHead font">Most Recent</h1>
           <div className="recentCard">
            {
                recentPickData.map(items=><RecentPickCard key={items._id} items={items}/>)
            } 
           </div>
        </div>
    );
};

export default RecentPick;