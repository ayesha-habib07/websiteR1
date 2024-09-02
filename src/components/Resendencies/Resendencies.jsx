import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import "./Resendencies.css";
import { sliderSettings } from "../../utils/common";

const Resendencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="r-card">
                                <img src={card.image} alt={`Card ${index}`} />
                                <div className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>$</span>
                                    <span>{card.price}</span>
                                </div>
                                <div className="primaryText">{card.name}</div>
                                <div className="secondaryText">{card.detail}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
export default Resendencies;
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => { swiper.slidePrev() }}>&lt;</button>
            <button onClick={() => { swiper.slideNext() }}>&gt;</button>
        </div>
    );
}