import React, { useEffect } from "react";
import { useUserStore } from "../../store/userStore.js";
const MangeUsers = () => {
  const { users, fetchUsers } = useUserStore();
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div className="flex-2 ml-64 p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Registered Events
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border ">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Location</th>
              <th className="py-2 px-4 border">Event Entries</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((event) => (
              <tr key={event._id} className="text-center border-t">
                <td className="py-2 px-4 border text-blue-600">{event.name}</td>
                <td className={`py-2 px-4 border`}>{event.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeUsers;
