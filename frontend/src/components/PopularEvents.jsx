import React, { useEffect } from "react";
import Item from "./Item";
import { useEventStore } from "../store/eventStore";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
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
    <div className="w-full px-4 md:px-8 lg:px-16 py-12">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-[#171717] mb-6">
          Popular Events
        </h1>
        <hr className="w-48 h-1.5 bg-[#252525] rounded-lg mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center">
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
