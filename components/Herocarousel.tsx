"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Heroimgs = [
    { imgUrl: "/assets/images/cpu-1.png", legend: "cpu" },
    { imgUrl: "/assets/images/monitor-1.png", legend: "monitors" },
    { imgUrl: "/assets/images/rtx4090.png", legend: "rtx4090" },
    { imgUrl: "/assets/images/laptop.png", legend: "laptop" },
    { imgUrl: "/assets/images/amdgpu.png", legend: "amd-gpu" },
];
const Herocarousel = () => {
    return (
        <div className=" relative w-full pb-0 pt-0 mb-9 mt-0 rounded-[30px] bg-gray-200 sm:pt-20 sm:px-10 sm:mx-auto  ">
            <Carousel
                //autoPlay
                infiniteLoop
                //interval={3000}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
            >
                {Heroimgs.map((img) => (
                    <Image
                        src={img.imgUrl}
                        alt={img.legend}
                        width={500}
                        height={300}
                        className="object-contain"
                        key={img.legend}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default Herocarousel;
