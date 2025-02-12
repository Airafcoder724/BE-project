import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Calendar } from "lucide-react";
import { formatDate } from "../utils/Date";
import CoinDialog from "./CoinDialog";
const Item = ({ event, handleRegistertion, userId }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isRegistered = event.registered?.includes(userId);
  const formatedDate = formatDate(event.event_date);

  const date = formatedDate.split(",")[0] + "," + formatedDate.split(",")[1];
  const time = formatedDate.split(",")[2];
  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
    return text;
  };

  const handleClick = () => {
    handleRegistertion(event._id);
    setIsDialogOpen(true);
    setTimeout(() => setIsDialogOpen(false), 3000); // Close after 3 seconds
  };

  return (
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Section 1: Image */}
      <Link to={`/event/${event._id}`}>
        <div className="relative w-full h-44 overflow-hidden">
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={event.image_url}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* title and description  */}
      <div className="h-[125px] p-4 border-b">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{event.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          Techfest presents{" "}
          {truncateText(event.description, 5) ||
            "Join us for an amazing event filled with innovation and technology"}
        </p>
      </div>

      {/* Section 3: Event Details */}
      <div className="p-4">
        <div className="flex justify-between mb-4">
          {/* Left subsection */}
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm line-clamp-1">
                {event.location || "Venue TBA"}
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{time || "9:00 PM"}</span>
            </div>
          </div>

          {/* Right subsection */}
          <div className="text-right space-y-2">
            <div className="flex items-center justify-end text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{date || "TBA"}</span>
            </div>
            <div className="text-green-600 font-medium">₹Free</div>
          </div>
        </div>

        {/* Register Button */}
        {!isRegistered ? (
          <button
            onClick={() => handleClick()}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium"
          >
            Register
          </button>
        ) : (
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 font-medium">
            Done!!
          </button>
        )}
      </div>
      <CoinDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Item;
