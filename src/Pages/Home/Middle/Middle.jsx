import UseMiddleData from '../../../Hooks/UseMiddleData';
import MiddleCard from './MiddleCard';
import './middle.css'
const Middle = () => {
    const [MiddleData,refetch] = UseMiddleData();
    return (
        <div className="middle">
           <>
            {
                MiddleData.map(items=><MiddleCard key={items._id} items={items}/>)
            }
           </>
        </div>
    );
};

export default Middle;