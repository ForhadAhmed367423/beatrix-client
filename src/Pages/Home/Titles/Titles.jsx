import useFirstData from '../../../Hooks/UseFirstData';
import './titles.css'
const Titles = () => {
    const [FirstData] = useFirstData();
    return (
        <div  className="title">
           <> 
           {
            FirstData.map(items => <div key={items._id}>
                <h1>hello</h1>
            </div>)
           }
           </>
        </div>
    );
};

export default Titles;