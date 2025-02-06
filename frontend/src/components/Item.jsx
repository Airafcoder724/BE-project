import React from "react";
import { Link } from "react-router-dom";

const Item = ({ event, handleRegistertion, userId }) => {
  const isRegistered = event.attendees.includes(userId);

  return (
    <div className="w-full max-w-[300px] mx-auto transform transition-transform duration-300 hover:scale-105 mb-6">
      <Link to={`/events/${event._id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={event.image_url}
          alt="event image"
          className="w-full h-[200px] object-cover rounded-[30px] border border-black"
        />
      </Link>
      <p className="text-lg font-bold mt-2 text-center">{event.name}</p>
      <div className="flex justify-center gap-2 mt-1"></div>
      <div className="flex justify-center mt-3">
        {!isRegistered ? (
          <button
            onClick={() => handleRegistertion(event._id)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        ) : (
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">
            Done!!
          </button>
        )}
      </div>
    </div>
  );
};

export default Item;
