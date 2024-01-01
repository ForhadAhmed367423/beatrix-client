import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { TbSend } from "react-icons/tb";


const Navbar = () => {
    const navLinks = 
    <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Features</NavLink></li>
        <li><NavLink>Fashion</NavLink></li>
        <li><NavLink>Lifestyle</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>
    return (
       <>
        <div className="nav">
            <div>
                <img src="/public/logo.svg" alt="" />
            </div>      
            <div>
                <ul className="navlinks">
                    {
                        navLinks
                    }
                </ul>
            </div> 
            <div>
                <button className="navbtn"><span className="flex"><TbSend/> Subscribe</span></button>
            </div>   

        
        </div>
        <hr className="hr"/>
       </>
    );
};

export default Navbar;