import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
const Hero = () => {
    return (
        <section className="hero-wrapper paddings">
            <div className="hero-container paddings ">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Discover <br></br> Most Suitable <br></br> Property</h1>
                    </div>
                    <div className="flexColStart secondaryText hero-des">
                        <span>Find a variety of properties that suits you very easily</span>
                        <span>Forget all difficulties in finding a residence  for you</span>
                    </div>

                    <div className="search-bar  ">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input className="secondaryText" type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="stats flexCenter" >
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={5500} end={7000} duration={5} />
                                <span className="orangeText">+</span>
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={1020} end={2470} duration={5} />
                                <span className="orangeText">+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp end={24}/>
                                <span className="orangeText">+</span>
                            </span>
                            <span className="secondaryText">Award Winning</span>
                        </div>


                    </div>




                </div>
                <div className="hero-right flexCenter">
                    <div className="image-container">
                        <img src="./hero-image.png"></img>
                    </div>

                </div>

            </div>
        </section>
    );
}
export default Hero;