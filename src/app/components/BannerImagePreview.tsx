"use client";
import React, { useState } from "react";

type BannerImageCompProps = {
  image: string;
  title: string;
  id: number;
  Description: string;
  clipImage: string;
  clipPath: string;
  button: string;
};

function BannerImagePreview({
  title,
  image,
  id,
  Description,
  clipImage,
  clipPath,
  button,
}: BannerImageCompProps) {
  return (
    <div
      className="w-full h-[25vh] sm:h-[30vh] flex ml-2 sm:ml-4 relative flex-col sm:flex-row"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.9)] flex overflow-y-scroll overflow-x-hidden p-[2vw]  sm:p-[0vw]">
        <div className="w-1/2 pl-[1vw] pt-2 flex flex-col justify-evenly">
          <h1 className="text-[6vw] sm:text-[2vw] text-white font-semibold ">
            {title}
          </h1>
          <h2 className="text-[5vw] sm:text-[1.5vw] text-white">
            {Description}
          </h2>
          <button className="flex">
            <h2 className="text-[4vw] sm:text-[1.3vw] text-white">{button}</h2>
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-end p-[2vw] sm:p-[1vw]">
          <div
            className="w-full h-full flex items-center justify-center bg-cover bg-center "
            style={{
              clipPath: `${clipPath}`,
              backgroundImage: `url(${clipImage})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BannerImagePreview;
