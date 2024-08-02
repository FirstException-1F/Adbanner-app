"use client";
import React, { useState } from "react";
import { useEditStore } from "../store/ModalShow";
import EditBannerTemplateBs from "./EditBannerTemplateBs";

type BannerImageCompProps = {
  image: string;
  title: string;
  id: number;
  Description: string;
  button: string;
  clipPath: string;
  clipImage: string;
};

function BannerImageComp({
  title,
  image,
  id,
  Description,
  button,
  clipPath,
  clipImage,
}: BannerImageCompProps) {
  const showEdit = useEditStore((state) => state.showEdit);
  const activeBannerId = useEditStore((state) => state.activeBannerId);
  const isEditVisible = useEditStore((state) => state.isEditVisible);
  const hideEdit = useEditStore((state) => state.hideEdit);

  const handleEditClick = () => {
    showEdit(id);
  };

  return (
    <div
      className="w-full sm:w-[45%] h-[80vh] sm:h-[90vh] mt-[5vw] sm:mt-[3vw] flex ml-1 sm:ml-4 relative flex-col sm:flex-row"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.7)] flex">
        <div className="w-1/2 p-[3vw] flex flex-col justify-evenly">
          <h1 className="text-[10vw] sm:text-[3vw] text-white font-semibold ">
            {title}
          </h1>
          <h2 className="text-[5vw] sm:text-[2vw] text-white">{Description}</h2>
          <button className="flex ">
            <h2 className="text-[5vw] sm:text-[1.5vw] text-white">{button}</h2>
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-end p-[2vw] sm:p-[1vw]">
          <div onClick={handleEditClick} className="p-[4vw] sm:p-[2vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,300,150"
              style={{ fill: "#FFFFFF" }}
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M19.17188,2c-0.72375,0 -1.4475,0.27562 -2,0.82813l-1.17187,1.17188l4,4l1.17188,-1.17187c1.104,-1.104 1.104,-2.895 0,-4c-0.5525,-0.5525 -1.27625,-0.82812 -2,-0.82812zM14.5,5.5l-11.5,11.5v4h4l11.5,-11.5z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div
            className="w-full h-[70%] flex items-center justify-center bg-cover bg-center"
            style={{
              clipPath: `${clipPath}`,
              backgroundImage: `url(${clipImage})`,
            }}
          ></div>
        </div>
      </div>
      {isEditVisible && activeBannerId === id && (
        <EditBannerTemplateBs
          key={id}
          hideEdit={hideEdit}
          title={title}
          image={image}
          id={id}
          Description={Description}
          button={button}
          clipImage={clipImage}
        />
      )}
    </div>
  );
}

export default BannerImageComp;
