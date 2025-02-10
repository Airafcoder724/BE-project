import React from "react";
import { Link } from "react-router-dom";

const EventItem = ({ id, image, name, old_price, new_price }) => {
  return (
    <div className="w-[320px] max-[1280px]:w-[280px] max-[800px]:w-[160px] hover:scale-105 transition-transform duration-300">
      <Link to={`/events/${id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={image}
          alt="Event"
          className="w-[300px] h-[200px] rounded-[30px] border border-black ml-[10px] 
                     max-[1280px]:w-[260px] max-[1280px]:h-[180px] 
                     max-[800px]:w-[140px] max-[800px]:h-[100px]"
        />
      </Link>
      <p
        className="font-bold text-[20px] ml-[50px] my-[3px] 
                    max-[1280px]:ml-[30px] 
                    max-[800px]:ml-[10px] max-[800px]:text-[12px]"
      >
        {name}
      </p>
      <div className="flex gap-[10px]">
        <div
          className="text-[#374151] text-[18px] line-through 
                        max-[1280px]:text-[16px] 
                        max-[800px]:text-[12px]"
        >
          <p>₹{old_price}</p>
        </div>
        <div
          className="text-[#374151] text-[18px] 
                        max-[1280px]:text-[16px] 
                        max-[800px]:text-[12px] max-[800px]:ml-0"
        >
          <p>Book for ₹{new_price} Only</p>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
