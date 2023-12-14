import React from "react";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import Cert from "../../assets/img/Cert.png";

const Intro = () => {
  return (
    <div className="mt-20">
      <div className="w-full">
        <p className="text-center text-blue-400 font-extrabold px-1">
          Your Dentist in Memphis, TN, and Surrounding Areas of Mississippi and
          Arkansas
        </p>
        <div className=" mt-16 p-8 md:gap-10 md:flex">
          <div className="md:w-2/6">
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="building"
              className="lazyload"
            />
          </div>
          <div className="md:w-4/6">
            <h1 className="uppercase text-center text-xl font-bold">
              Welcome to our practice <br /> Dr.j.whitley wills
            </h1>
            <p className="text-justify	">
              Welcome to the office of Dr.J. Whitely Wills! Our dentist has been
              providing exceptional general,cosmetic,implant,restorative and
              preventative dentistry in Memphis, Tennesse, and the surroundings
              since 1993, Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Illo qui aliquam corporis quis tempore nesciunt. Reiciendis
              asperiores modi, obcaecati ut, aliquid quisquam optio quidem
              nesciunt nemo quibusdam dolor provident doloribus. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Nostrum rem a
              necessitatibus unde praesentium, quae aliquam, nihil ea maiores,
              ex obcaecati quia? Officiis minima iusto, quibusdam enim quasi
              nemo corporis?
            </p>
            <div className="flex items-center justify-center mt-6">
              <button className=" border-2 border-blue-400 text-sm p-1  ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="uppercase text-blue-500 text-center font-extrabold text-lg">
          Meet the doctor
        </p>
        <article className="md:flex  p-8 md:relative h-full overflow-hidden	w-full md:gap-3 lg:gap-4 xl:gap-36">
          <img
            src="https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="opacity-30 hidden md:block lazyload"
          />
          <div className="absolute top-0 bottom-0 left-0  text-justify h-fit m-auto font-medium hidden md:block    md:right-1/4 md:w-2/4 lg:w-1/4 lg:right-1/3 xl:right-2/4 xl:w-1/4  ">
            <h1 className="uppercase text-center   md:text-xl xl:mb-5">
              Dr. Whitley Wills,Dds
            </h1>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident facilis, cupiditate eligendi praesentium error nobis
              deserunt asperiores velit autem accusamus dolores, deleniti
              perspiciatis rem. Odio in beatae culpa voluptate delectus. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sint dolore
              quos delectus possimus ratione doloremque, distinctio,
              consequuntur illo magnam officia, nostrum aut maiores deserunt
              quibusdam quasi rem natus quo accusantium!
            </p>
          </div>
          <div className="lg:w-3/4 xl:w-3/4">
            <img
              src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full  object-cover lazyload"
            />
          </div>
        </article>
        <img src={Cert} alt="cert" />
      </div>
    </div>
  );
};

export default Intro;
