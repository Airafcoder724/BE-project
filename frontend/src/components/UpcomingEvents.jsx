import React from "react";
import new_collections from "../assets/Assets/Frontend_Assets/new_collections";
import EventItem from "./EventItem";
import { useEventStore } from "../store/eventStore";

const UpcomingEvents = () => {
  const { events } = useEventStore();

  const sortUpcomingEvents = (events) => {
    const currentDate = new Date();
    const fiveDaysFromNow = new Date(currentDate);
    fiveDaysFromNow.setDate(currentDate.getDate() + 5);
    fiveDaysFromNow.setHours(0, 0, 0, 0);

    return events
      .filter((event) => {
        // Convert event date to Date object and set to start of day
        const eventDate = new Date(event.event_date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= fiveDaysFromNow;
      })
      .sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
  };

  // Usage
  const upcomingEventsData = sortUpcomingEvents(events);

  return (
    <div className="mt-[-80px] flex flex-col items-center gap-[10px] mb-[100px]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        Upcoming Events
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div
        className="grid grid-cols-4 mt-[50px] gap-[30px] 
        max-[1280px]:gap-[10px] max-[1280px]:mt-[30px]
        max-[1024px]:grid-cols-4 max-[1024px]:gap-[5px] max-[1024px]:mt-[20px]
        max-[800px]:grid-cols-2 max-[800px]:gap-[5px] max-[800px]:mt-[20px]
        max-[500px]:grid-cols-2 max-[500px]:gap-[20px]"
      >
        {new_collections.map((item, i) => (
          <EventItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
