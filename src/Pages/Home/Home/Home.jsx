import Middle from "../Middle/Middle";
import Titles from "../Titles/Titles";
import Todays from "../Todays/Todays";
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="box">
                <Titles/>
                <Middle/>
                <Todays/>

            </div>
        </div>
    );
};

export default Home;