import React from "react";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Gallery = () => {
  const Contents = [
    {
      img: "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3845724/pexels-photo-3845724.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3881181/pexels-photo-3881181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      {/* Insurance */}
      <div className="w-full h-full mt-20 text-center  flex flex-col gap-10 md:flex-row md:items-center md:justify-center  ">
        <div className="md:w-3/6">
          <div className="md:flex md:flex-col gap-4">
            <h1 className="uppercase text-blue-400 text-2xl font-bold">
              Insurance Information
            </h1>
            <p className="">
              In network with data dental premiere and Cigna DPPO Provider
            </p>
            <h2 className="uppercase text-lg font-bold text-blue-400">
              Apply for financing
            </h2>
          </div>
        </div>
        <div className="md:w-3/6 ">
          <img
            src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="lazyload"
          />
        </div>
      </div>
      {/* Gallery */}
      <div className="mt-20">
        <h1 className="text-blue-400 text-center font-bold text-lg">GALLERY</h1>
        <div className="md:flex">
          {Contents.map((d) => (
            <>
              <div className="flex flex-col p-8" key={d.img}>
                <img src={d.img} alt="img1" className="lazyload w-72 " />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
