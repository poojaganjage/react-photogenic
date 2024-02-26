import React from "react";
import BannerImage from "../images/home-bg.png";

function Banner() {
    return(
        <div id="banner">
            <img className="home-bg" alt="home-bg" src={BannerImage}></img>
            <div className="banner-text">
                <p className="banner-title">Everyone is Photogenic</p>
                <h5 className="banner-heading">Today’s SPECIAL MOMENTS</h5>
                <p className="banner-description">Creating a timeless look, coupled with a flawless moment</p>
            </div>
        </div>  
    );
}
export default Banner;
