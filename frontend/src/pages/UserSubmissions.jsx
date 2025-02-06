import React from "react";

const UserSubmissions = () => {
  const events = [
    {
      name: "Tech Conference 2025",
      status: "Registered",
      date: "March 15, 2025",
      location: "San Francisco, CA",
    },
    {
      name: "AI Workshop",
      status: "Pending",
      date: "April 5, 2025",
      location: "New York, NY",
    },
    {
      name: "Web Dev Summit",
      status: "Registered",
      date: "May 20, 2025",
      location: "Los Angeles, CA",
    },
    {
      name: "Cyber Security Forum",
      status: "Cancelled",
      date: "June 10, 2025",
      location: "Chicago, IL",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Registered Events</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Event Name</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Date of Event</th>
              <th className="py-2 px-4 border">Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="text-center border-t">
                <td className="py-2 px-4 border text-blue-600">{event.name}</td>
                <td
                  className={`py-2 px-4 border ${
                    event.status === "Registered"
                      ? "text-green-600"
                      : event.status === "Cancelled"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {event.status}
                </td>
                <td className="py-2 px-4 border">{event.date}</td>
                <td className="py-2 px-4 border">{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSubmissions;
