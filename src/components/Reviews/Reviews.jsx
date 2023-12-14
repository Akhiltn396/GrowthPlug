import React from "react";
import Dental1 from "../../assets/img/implant.png";
import Dental2 from "../../assets/img/dental.png";
import Dental3 from "../../assets/img/dental-care.png";
import Dental4 from "../../assets/img/dental-veneer.png";
import Dental5 from "../../assets/img/tooth-filling.png";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteTwoToneIcon from "@mui/icons-material/FormatQuoteTwoTone";

const Reviews = () => {
  const Contents = [
    {
      title: "IMPLANT DENTISTRY",
      img: Dental1,
    },
    {
      title: "GLO TEETH WHITENING",
      img: Dental2,
    },
    {
      title: "REVEAL CLEAR ALIGNERS",
      img: Dental3,
    },
    {
      title: "PORCELIAN DENTAL VENEERS",
      img: Dental4,
    },
    {
      title: "DENTAL CROWN AND BRIDGE",
      img: Dental5,
    },
  ];
  return (
    <div>
      <div>
        {/* Services */}
        <div className="bg-gradient-to-r from-blue-200 via-white to-blue-200 h-full md:pb-14">
          <h1 className="uppercase text-center pt-20 text-blue-500 font-bold">
            Services
          </h1>
          <div className="flex  items-center justify-center gap-24 mt-10 flex-wrap ">
            {Contents.map((data) => (
              <>
                <div
                  className="flex flex-col gap-6 items-center "
                  key={data.title}
                >
                  <div className=" rounded-full w-36 h-36 bg-blue-400 flex items-center justify-center">
                    <img src={data.img} alt="" className="w-12 lazyload" />
                  </div>
                  <div className="text-center">{data.title}</div>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Reviews */}
        <div className="mt-20">
          <h1 className="text-blue-400 text-center font-bold text-lg">
            OUR REVIEWS
          </h1>
          <div className="mt-5 w-full md:flex md:flex-col md:items-center md:justify-center">
            <div className="flex gap-5 bg-blue-500 md:w-2/5 p-2 rounded ">
              <img
                src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="doctor"
                className="lazyload w-10 h-10 rounded-full border-2 border-white mt-4"
              />
              <div className="text-white">
                <h2>J WHITLEY WILLS,DDS</h2>
                <div className="">
                  <span className="text-yellow-500">5.0</span>
                  {Array(5).fill(<StarIcon style={{ fill: "yellow" }} />)}
                </div>
                <p>Based on 6 reviews</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="p-8 flex gap-10 items-center justify-center flex-wrap">
            <div>
              <div className="bg-blue-500 w-60 rounded p-3 text-white">
                <div className="text-justify">
                  <FormatQuoteTwoToneIcon />
                  {Array(5).fill(<StarIcon style={{ fill: "yellow" }} />)} Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                  dolor qui distinctio voluptate, odit nesciunt explicabo quae
                  commodi dolorem eum, id iure dolores. Iste dolor animi
                  voluptatem provident rem ratione.
                </div>
              </div>
              <div className="mt-3 flex gap-6">
                <div className="rounded-full bg-red-500 w-10 h-10 flex items-center justify-center">
                  V
                </div>
                <div>
                  <h1 className="font-bold">V.C</h1>
                  <p>1 Month Ago</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-blue-500 w-60 rounded p-3 text-white">
                <div className="text-justify ">
                  <FormatQuoteTwoToneIcon />
                  {Array(5).fill(<StarIcon style={{ fill: "yellow" }} />)} Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                  dolor qui distinctio voluptate, odit nesciunt explicabo quae
                  commodi dolorem eum, id iure dolores. Iste dolor animi
                  voluptatem provident rem ratione.
                </div>
              </div>
              <div className="mt-3 flex gap-6">
                <div className="rounded-full bg-yellow-500 w-10 h-10 flex items-center justify-center">
                  V
                </div>
                <div>
                  <h1 className="font-bold">V.C</h1>
                  <p>1 Month Ago</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-blue-500 w-60 rounded p-3 text-white">
                <div className="text-justify">
                  <FormatQuoteTwoToneIcon />
                  {Array(5).fill(<StarIcon style={{ fill: "yellow" }} />)} Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                  dolor qui distinctio voluptate, odit nesciunt explicabo quae
                  commodi dolorem eum, id iure dolores. Iste dolor animi
                  voluptatem provident rem ratione.
                </div>
              </div>
              <div className="mt-3 flex gap-6">
                <div className="rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center">
                  V
                </div>
                <div>
                  <h1 className="font-bold">V.C</h1>
                  <p>1 Month Ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-black text-white font-bold p-1 px-14">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
