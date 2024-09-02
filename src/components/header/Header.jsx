import React from "react";
import './Header.css';
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && "-100%"}
        }
    }
    return (
        <section className="h-wrapper flexCenter">
            <div className=" paddings   h-container">
                <img src="./logo.png" alt="Logo" width={100}></img>
             <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
             <div className="h-menu" style={getMenuStyles(menuOpened)}>
                    <a>Resendencies</a>
                    <a>Contact Us</a>
                    <a>Get Started</a>
                    <button className="button">
                        <a>Contact</a>
                    </button>
                </div>
             </OutsideClickHandler>
            </div>
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                <BiMenuAltRight size={30}></BiMenuAltRight>
            </div>

        </section>

    );

}
export default Header;
