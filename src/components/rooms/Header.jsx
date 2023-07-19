import React from "react";
import Heading from "../heading/Heading";

const Header = () => {
  return (
    <>
      <Heading title="Beluvana Bali - Owl Bamboo House" subtitle="Sidemen, Indonesia"></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl ">
        <img
          className="object-cover w-full"
          src="https://plus.unsplash.com/premium_photo-1677636665512-d210c919fe74"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
