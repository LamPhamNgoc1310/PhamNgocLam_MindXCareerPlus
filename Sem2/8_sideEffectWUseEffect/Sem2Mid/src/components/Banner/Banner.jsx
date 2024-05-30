import React from "react";

export default function Banner ({ image, movieName, description }) {
    return (
        <>
            <div className="banner">
                <img src={image} alt="" />
                <div className="banner-content">
                    <p className="banner-name">{movieName}</p>
                    <p className="banner-desc">{description}</p>
                </div>
            </div>
        </>
    )
}