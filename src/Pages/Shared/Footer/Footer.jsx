import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { TbSend } from "react-icons/tb";





const Footer = () => {
    return (
        <div className='footerbg'>
            <div className='footer'>
            <div className='mfooter'>
                {/* col 1 */}
            <div>
                <img src="https://gossip-themes.com/beatrix-html/preview/assets/media/logo.svg" alt="" />
                <p className='footerdes font'>The stars will never align, and the traffic lights of life will never all be green at the same time.The stars will never align, and the traffic lights.</p>

                <div className='footericon'>
                    <Link className='ficons'><FaFacebookF/></Link>
                    <Link className='ficons'><FaXTwitter/></Link>
                    <Link className='ficons'><FaDiscord/></Link>
                    <Link className='ficons'><IoLogoLinkedin/></Link>

                </div>
            </div> 

            {/* cols 2 */}
            <div>
                <h1 className='font col2Title'>
                Resources
                </h1>

                <div>
                    <ul className='font recourseList'>
                        <li>
                            <Link>What’s New</Link>
                        </li>
                        <li>
                            <Link>Developers</Link>
                        </li>
                        <li>
                            <Link>Releases</Link>
                        </li>
                        <li>
                            <Link>Support</Link>
                        </li>
                        <li>
                            <Link>Cookie Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* cols 3 */}
            <div>
                <h1 className='font col2Title'>
                Useful Links
                </h1>

                <div>
                    <ul className='font recourseList'>
                        <li className='liHov'>
                            <Link>What’s New</Link>
                        </li>
                        <li>
                            <Link>Developers</Link>
                        </li>
                        <li className='liHov'>
                            <Link>Releases</Link>
                        </li>
                        <li className='liHov'>
                            <Link>Support</Link>
                        </li>
                        <li className='liHov'>
                            <Link>Cookie Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* cols 4 */}

            <div>
            <h1 className='font col2Title'>
                Subscribe Now
                </h1>

                <div className='fInput'>
                    <input type="email" name="" placeholder='your@gmail.com' className='font fotterInp' id="" />
                    <button className='footerbtn'><TbSend/></button>
                </div>
                <div>
                <label className="font inplabel">
                <input className='fcheck' type="checkbox"/>
                    I have read and accept the Terms &amp; Policy
                                            
                                            <span className="checkmark"></span>
                                            </label>
                </div>
            </div>

            </div>
            </div>
        </div>
    );
};

export default Footer;