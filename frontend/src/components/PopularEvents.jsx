import React, { useEffect } from "react";
import Item from "./Item";
import { useEventStore } from "../store/eventStore";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import EventItem from "./EventItem";
const PopularEvents = () => {
  const { events, fetchEvents, registerForEvent } = useEventStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleRegistertion = (eventId) => {
    if (!user) {
      navigate("/login");
      return;
    }
    registerForEvent(eventId, user._id);
  };

  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px]">
      <div className="">
        <h1 className="text-[#171717] w-[65%] mx-[37%] text-[50px] font-semibold">
          Popular Events
        </h1>
        <hr className="w-48 h-1.5 bg-[#252525] rounded-lg mx-auto mb-12" />

        <div
          className="grid grid-cols-4 mt-[50px] gap-[30px] 
        max-[1280px]:gap-[10px] max-[1280px]:mt-[30px]
        max-[1024px]:grid-cols-4 max-[1024px]:gap-[5px] max-[1024px]:mt-[20px]
        max-[800px]:grid-cols-2 max-[800px]:gap-[5px] max-[800px]:mt-[20px]
        max-[500px]:grid-cols-2 max-[500px]:gap-[20px]"
        >
          {events.map((item, i) => (
            <Item
              key={i}
              event={item}
              handleRegistertion={handleRegistertion}
              userId={user._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
