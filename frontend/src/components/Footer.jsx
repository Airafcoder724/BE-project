import React from "react";
import footer_logo from "../assets/footer_logo.jpeg";
import insta_icon from "../assets/Assets/Frontend_Assets/instagram_icon.png";
import printrest_icon from "../assets/Assets/Frontend_Assets/pintester_icon.png";
import wp_icon from "../assets/Assets/Frontend_Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center  items-center gap-[5px]">
      <div className="flex items-center  gap-[7px]">
        <img
          src={footer_logo}
          alt="Logo"
          className="w-[35px] h-[35px] max-[800px]:w-[20px] max-[800px]:h-[20px]"
        />
        <p className="text-[#383838] font-bold text-[26px] max-[600px]:text-[15px]">
          Event.io
        </p>
      </div>

      <ul className="list-none flex gap-[20px] text-[#252525] text-[10px] max-[600px]:text-[10px] max-[600px]:gap-[5px]">
        {["Company", "Events", "Offices", "About", "Contact"].map(
          (link, index) => (
            <li key={index} className="cursor-pointer">
              {link}
            </li>
          )
        )}
      </ul>

      <div className="flex gap-[10px] cursor-pointer max-[800px]:w-[11px] max-[600px]:ml-[-100px]">
        {[insta_icon, printrest_icon, wp_icon].map((item, index) => (
          <div
            key={index}
            className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] hover:transform hover:scale-110 hover:rotate-[10deg] transition-transform duration-300"
          >
            <img src={item} alt="Social Icon" className="w-[15px] h-[15px]" />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-[15px] w-full mb-[15px] text-[#1a1a1a] text-[10px] max-[800px]:text-[7px]">
        <hr className="w-[60%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>Copyright@2024- All Rights Reserved!</p>
      </div>
    </div>
  );
};

export default Footer;
