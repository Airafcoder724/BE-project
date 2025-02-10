import { create } from "zustand";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api/events"
    : "/api";

axios.defaults.withCredentials = true;

export const useEventStore = create((set) => ({
  events: [],
  event: {},
  error: null,
  isLoading: true,
  domainEvents: [],

  fetchEvents: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/getevents`);
      set({ events: response.data.event, isLoading: false });
    } catch (error) {
      set({ error: "Error fetching events", isLoading: false });
    }
  },

  fetchEventById: async (eventId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/geteventsbyid`, {
        id: eventId,
      });
      set({ event: response.data.event, isLoading: false });
      // console.log(response.data.event);
    } catch (error) {
      set({ error: "Error fetching events", isLoading: false });
    }
  },

  registerForEvent: async (eventId, userId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/${eventId}/register`, {
        userId,
      });

      set((state) => ({
        events: state.events.map((event) =>
          event._id === eventId
            ? {
                ...event,
                registered: event.registered
                  ? [...event.registered, userId]
                  : [userId],
              }
            : event
        ),
        isLoading: false,
      }));

      console.log(response.data);
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error registering for event",
      });
      throw error;
    }
  },

  createEvent: async (eventData) => {
    set({ isLoading: true, error: null });
    try {
      const formData = new FormData();

      // Append event data to the FormData
      formData.append("name", eventData.name);
      formData.append("description", eventData.description);
      formData.append("domain", eventData.domain);
      formData.append("location", eventData.location);
      formData.append("event_date", eventData.date); // Correct name for event date
      formData.append("event_time", eventData.time); // Correct name for event date
      formData.append("community", eventData.community);
      formData.append("image", eventData.image); // Attach the image file

      const response = await axios.post(`${API_URL}/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure correct content type for file upload
        },
      });

      set((state) => ({
        events: [...state.events, response.data.event],
        isLoading: false,
      }));
      console.log("event response ", response);
      return response.data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error creating event",
      });
      throw error;
    }
  },

  fetchDomainEvents: async (domain) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/getdomainevents/${domain}`);
      console.log(response);
      set({
        domainEvents: response.data.events || [],
        isLoading: false,
      });
      console.log(response.data);
    } catch (error) {
      set({ error: "Error fetching events", isLoading: false });
      console.error(error);
    }
  },
}));

// registerForEvent: async (eventId, userId) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_URL}/${eventId}/register`, {
//         userId,
//       });

//       // Update the event list with the new attendee
//       set((state) => ({
//         events: state.events.map((event) =>
//           event._id === eventId
//             ? { ...event, attendees: [...event.attendees, userId] }
//             : event
//         ),
//         isLoading: false,
//       }));

//       return response.data;
//     } catch (error) {
//       set({
//         isLoading: false,
//         error: error.response?.data?.message || "Error registering for event",
//       });
//       throw error;
//     }
//   },
