import Middle from "../Middle/Middle";
import Titles from "../Titles/Titles";
import Todays from "../Todays/Todays";
import './Home.css'
import PickComp from "./PickSection/PickComp/PickComp";

const Home = () => {
    return (
        <div className="home">
            <div className="box">
                <Titles/>
                <Middle/>
                <Todays/>

            </div>
            <div>
                <PickComp/>
            </div>
        </div>
    );
};

export default Home;