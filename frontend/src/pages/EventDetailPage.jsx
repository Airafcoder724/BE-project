import React, { useEffect } from "react";
import { Calendar, MapPin, Users, Tag } from "lucide-react";
import { useEventStore } from "../store/eventStore";
import { useLocation } from "react-router-dom";
import { formatDate } from "../utils/Date.js";
const EventDetailPage = () => {
  // Sample event data - in real app this would come from props or API
  const { fetchEventById, event } = useEventStore();
  const { pathname } = useLocation();
  const domain = pathname.split("/")[2];

  console.log(domain);
  useEffect(() => {
    fetchEventById(domain); // replace with actual event ID
  }, []);

  return (
    <div className="container flex justify-center items-center min-h-screen mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Event Image */}
        <div className="w-full">
          <img
            src={event.image_url}
            alt={event.name}
            className="rounded-lg shadow-lg w-full h-[500px] object-cover"
          />
        </div>

        {/* Right Section - Event Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{event.name}</h1>

          <div className="rounded-lg border border-gray-200 shadow-sm p-6 bg-white">
            <div className="space-y-4">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-2">About Event</h2>
                <p className="text-gray-600">{event.description}</p>
              </div>

              {/* Date and Time */}
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium">{formatDate(event.event_date)}</p>
                  <p className="text-gray-600">{event.time}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <p className="text-gray-600">{event.location}</p>
              </div>

              {/* Community */}
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <p className="text-gray-600">{event.community}</p>
              </div>

              {/* Domain */}
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-blue-500" />
                <p className="text-gray-600">{event.domain}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
