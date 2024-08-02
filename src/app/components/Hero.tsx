"use client";
import React, { useEffect } from "react";
import BannerImageComp from "./BannerImageComp";
import { UserData } from "../types";
import { useEditStore } from "../store/ModalShow";

type HeroProps = {
  data: UserData[];
};

function Hero({ data }: HeroProps) {
  const setData = useEditStore((state) => state.setData);

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  const storedData = useEditStore((state) => state.data);

  return (
    <div className="min-h-screen max-w-full p-[1vw]  flex flex-wrap items-center justify-center">
      {storedData?.map((user) => (
        <BannerImageComp
          key={user.id}
          title={user.title}
          image={user.image}
          id={user.id}
          Description={user.description}
          button={user.button}
          clipPath={user.clipPath}
          clipImage={user.clipImage}
        />
      ))}
    </div>
  );
}

export default Hero;
