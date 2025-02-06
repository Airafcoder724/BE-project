import React from "react";
import hero_img from "../assets/Hero.png";
import hand_icon from "../assets/Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../assets/Assets/Frontend_Assets/arrow.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] pt-20">
      {/* Left Section - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:pl-16">
        <h2 className="text-[#090909] text-xl md:text-2xl font-semibold">
          Latest Events Near You!!
        </h2>
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <p className="text-[#171717] text-3xl md:text-4xl font-light">
              Upcoming Events
            </p>
            <img src={hand_icon} alt="Hand" className="w-16 md:w-24" />
          </div>
          <p className="text-[#171717] text-3xl md:text-5xl font-light">
            Grab the Opportunity!!
          </p>
          <p className="text-[#171717] text-3xl md:text-5xl font-light">
            Register Now!
          </p>
        </div>
        <div className="flex items-center justify-start gap-4 mt-8 w-[200px] h-[50px] rounded-full bg-[#ff4141] text-white text-xl font-medium">
          <div>Latest Events</div>
          <img src={arrow_icon} alt="Arrow" />
        </div>
      </div>

      {/* Right Section - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <img
          src={hero_img}
          alt="Hero"
          className="max-w-full md:max-w-[500px] h-auto"
        />
      </div>
    </div>
  );
};
export default Hero;
