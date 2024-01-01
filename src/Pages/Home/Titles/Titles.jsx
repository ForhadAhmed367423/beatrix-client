import useFirstData from '../../../Hooks/UseFirstData';
import TitleCard from './TitleCard';
import './titles.css'
const Titles = () => {
    const [FirstData] = useFirstData();
    return (
        <div  className="title">
           <> 
           {
            // eslint-disable-next-line react/no-unknown-property
            FirstData.map(items => <TitleCard key={items._id} items={items}/>
             )
           }
           </>
        </div>
    );
};

export default Titles;