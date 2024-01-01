import UseTodaysData from '../../../Hooks/UseTodaysData';
import TodaysCard from './TodaysCard';
import './todays.css'
const Todays = () => {
    const [todaysData]= UseTodaysData();
    return (
        <div className="today">
            <>
            {
                todaysData.map(items=> <TodaysCard items={items} key={items._id}/>)
            }
            </>
        </div>
    );
};

export default Todays;