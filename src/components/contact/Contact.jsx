import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className=" flexColStart c-left ">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">We always ready to help by providing the best services  for you.
                        <br></br>
                        We believe a good place to live can make you life better</span>
                    <div className="flexColStart contactModes">
                        {/* First Row */}
                        <div className="flexStart row">
                            {/* first mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} ></MdCall>
                                    </div>
                                    <div className="flexColStart  detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">021 123 133 55</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart  detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">021 123 133 55</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            {/* third mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} ></BsFillChatDotsFill>
                                    </div>
                                    <div className="flexColStart  detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">021 123 133 55</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>
                            {/* fourth mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart  detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">021 123 133 55</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg"></img>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Contact;