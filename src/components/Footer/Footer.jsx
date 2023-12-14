import React from "react";
import Map from "../../assets/img/map.png";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-blue-500 w-full p-8 md:flex ">
        <div className="md:w-2/6">
          <img src={Map} alt="map" className="lazyload" />
        </div>
        <div className="md:w-2/6 text-center text-white md:px-20 ">
          <div className="">
            <h1 className="text-lg font-bold mb-2">J.WHITLEY WILLS, DDS</h1>
            <h1 className="text-lg font-bold">OFFICE HOURS</h1>
            <div className="md:flex md:justify-between ">
              <p>MON</p>
              <p>7.20 am - 3.00 pm</p>
            </div>
            <div className="md:flex md:justify-between ">
              <p>TUE</p>
              <p>8.00 am - 12.00 pm</p>
            </div>
            <div className="md:flex md:justify-between ">
              <p>WED-THU</p>
              <p>8.00 am - 5.00 pm</p>
            </div>
            <div className="md:flex md:justify-between ">
              <p>FRI-SUN</p>
              <p>Closed</p>
            </div>
            <h1 className="text-lg font-bold mb-2">LOCATION</h1>
            <div>
              <p>59 S Idiewild St.,</p>
              <p>Memphis, T N</p>
              <p>Phone: (901) 726-654</p>
              <p>Text us: (901) 887-644</p>
              <p>Email : office@jwhitleywills.com</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="md:w-2/6 text-center text-white ">
          <h1 className="text-lg font-bold mb-2 ">NAVIGATION</h1>
          <div className="md:flex md:flex-col md:gap-5">
            <p>Home</p>
            <p>Business</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      {/* Sub Footer */}
      <div className="hidden md:block md:flex md:justify-between px-8 py-2">
        <div className="md:flex gap-10">
          <GoogleIcon style={{ fill: "lightblue" }} />
          <FacebookIcon style={{ fill: "lightblue" }} />
          <TwitterIcon style={{ fill: "lightblue" }} />
          <YouTubeIcon style={{ fill: "lightblue" }} />
        </div>
        <div className="text-blue-400 font-bold md:flex md:gap-20">
          <p>© Copyright 2023 GrowthPlug, inc</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Accessibility Statement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
