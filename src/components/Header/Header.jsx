import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const Contents = [
    {
      title: "ONLINE FORMS",
      img: "https://images.pexels.com/photos/5531322/pexels-photo-5531322.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "MEET DR. WILLS",
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "PATIENT REVIEWS",
      img: "https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "FUN TEAM PHOTOS",
      img: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="h-full">
      {/* Navbar */}
      <nav>
        <div className="flex  items-center justify-center py-2">
          <img
            src="https://gp-assets-1.growthplug.com/website_files/4985/logo_2.png"
            alt=""
            className="h-10  "
          />
        </div>
        <div className="relative bg-blue-400 h-12  md:flex md:items-center md:justify-around ">
          <div className="hidden md:block">
            <ul className="uppercase text-white font-light md:flex md:gap-4 ">
              <li>Home</li>
              <li>Our Practice</li>
              <li>Services</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="hidden md:block md:flex md:gap-3">
            <button className="uppercase bg-gray-700 text-white px-4 py-1 text-xs">
              Request an appoinment
            </button>
            <div className="md:flex">
              <CallIcon style={{ fill: "white" }} />
              <p className="text-white">(901) 734-4556</p>
            </div>
          </div>
          <button
            className="float-right pt-2 pr-4 transition-all md:hidden"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            {navbarOpen ? (
              <MdClose style={{ width: "32px", height: "32px" }} />
            ) : (
              <FiMenu
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            )}
          </button>

          {/* Responsive Navbar List */}

          {navbarOpen && (
            <div className="absolute top-12 bg-blue-500 w-full h-96 z-10	 md:hidden">
              <ul className="uppercase flex flex-col items-center justify-evenly text-xl font-bold text-white h-full">
                <li>Home</li>
                <li>Our Practise</li>
                <li>Service</li>
                <li>Reviews</li>
                <li>Contacts</li>
                <button className="uppercase bg-black p-2 rounded-md">
                  Request an Appoinment
                </button>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="relative">
          <img
            src="https://gp-assets-1.growthplug.com/website_files/4985/MicrosoftTeams-image_83.png"
            alt="fcds"
            className="lazyload opacity-100 grayscale-[40%] object-cover md:h-96 md:w-full "
          />
          <div className=" absolute text-white flex flex-col text-center items-center justify-center left-[14%] bottom-10 md:bottom-32  sm:left-[30%]  md:left-[20%] lg:left-[26%]  xl:left-[30%]">
            <h1 className="uppercase  font-extrabold   md:text-4xl ">
              Creating Unforgettable Smiles
            </h1>
            <p className=" md:pt-6 font-extrabold ">
              Memphis,<span className="">TN</span>
            </p>
            <button className="p-1 md:mt-4 border-2 text-xs font-extrabold uppercase border-white md:p-2">
              Request an Appoinment
            </button>
            <div className="mt-4 flex gap-4">
              <GoogleIcon />
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2 w-full text-center h-max bg-gradient-to-b from-blue-500 p-8 flex-wrap md:flex-nowrap">
            {Contents.map((data) => (
              <>
                <div className="w-max p-8 bg-white " key={data.title}>
                  <h2 className="text-blue-400 font-bold">{data.title}</h2>
                  <img src={data.img} alt="Img" className="lazyload" />
                </div>
              </>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
