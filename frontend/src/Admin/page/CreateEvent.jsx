import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Layers,
  FileTextIcon,
  Calendar,
  Users,
  CalendarDays,
  ImageIcon,
  Clock,
} from "lucide-react";
import { useEventStore } from "../../store/eventStore";
const CreateEvent = () => {
  const { error, isLoading, createEvent } = useEventStore();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    domain: "--select--",
    location: "",
    community: "--select--",
    date: "",
    time: "",
    image: null,
    imagePreview: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      description,
      domain,
      community,
      location,
      date,
      time,
      image,
    } = eventData;

    if (
      !name ||
      !description ||
      domain === "--select--" ||
      community === "--select--" ||
      !location ||
      !date ||
      !time ||
      !image
    ) {
      alert("Please fill in all the fields!");
      return;
    }

    try {
      await createEvent(eventData);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }

    // console.log("Event Created:", eventData);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 md:ml-64 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-emerald-500">
            Create Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              icon={Calendar}
              type="text"
              placeholder="Event Name"
              value={eventData.name}
              onChange={(e) =>
                setEventData({ ...eventData, name: e.target.value })
              }
            />
            <Input
              icon={FileTextIcon}
              type="text"
              placeholder="Description in short"
              value={eventData.description}
              onChange={(e) =>
                setEventData({ ...eventData, description: e.target.value })
              }
            />
            <Input
              icon={Layers}
              type="select"
              options={[
                "--select--",
                "sports",
                "technical",
                "cultural",
                "others",
              ]}
              value={eventData.domain}
              onChange={(e) =>
                setEventData({ ...eventData, domain: e.target.value })
              }
            />
            <Input
              icon={Users}
              type="select"
              options={["--select--", "TPO", "GDSC", "ITSA", "others"]}
              value={eventData.community}
              onChange={(e) =>
                setEventData({ ...eventData, community: e.target.value })
              }
            />
            <Input
              icon={MapPin}
              type="text"
              placeholder="Location of Event"
              value={eventData.location}
              onChange={(e) =>
                setEventData({ ...eventData, location: e.target.value })
              }
            />
            <Input
              icon={CalendarDays}
              type="date"
              placeholder="Date of Event"
              value={eventData.date}
              onChange={(e) =>
                setEventData({ ...eventData, date: e.target.value })
              }
            />
            <Input
              icon={Clock}
              type="string"
              placeholder="Time of Event"
              value={eventData.time}
              onChange={(e) =>
                setEventData({ ...eventData, time: e.target.value })
              }
            />
            <Input
              icon={ImageIcon}
              type="file"
              // name="image"
              accept="image/*"
              placeholder="Choose a file"
              onChange={handleImageChange}
            />
            {eventData.imagePreview && (
              <div className="mt-4">
                <img
                  src={eventData.imagePreview}
                  alt="Event preview"
                  className="w-52 h-32 object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
