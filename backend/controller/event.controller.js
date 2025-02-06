import mongoose from "mongoose";
import { Event } from "../models/events.model.js";
import { uploadOnCloudinary } from "../utitls/cloudinary.js";

export const createEvents = async (req, res) => {
  const { name, domain, description, location, event_date, community } =
    req.body;
  const localFilePath = req.file.path;
  try {
    if (
      !name ||
      !domain ||
      !description ||
      !location ||
      !event_date ||
      !community
    ) {
      throw new Error("All fields are required");
    }
    const url = await uploadOnCloudinary(localFilePath);

    const event = new Event({
      name,
      domain,
      description,
      location,
      event_date,
      community,
      image_url: url,
    });

    await event.save();
    res.status(200).json({
      success: true,
      message: "Event created successfully",
      event, // need to be remove later
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "problem with storing event" });
    console.log("error in event creation", error);
  }
};

export const getEvents = async (req, res) => {
  try {
    const { domain, sortBy, order = "asc" } = req.query;
    const filter = domain ? { domain } : {};
    const sortOptions = { [sortBy || "createdAt"]: order === "asc" ? 1 : -1 };

    const event = await Event.find({}).sort(sortOptions);
    if (!event) {
      res.status(204).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, event });
    return event;
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "problem with fetching events" });
    console.log("error in fetching events", error);
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }
    res.status(200).json({ success: true, event });
    return event;
  } catch (error) {
    console.error("Error in fetching event:", error);
    res
      .status(500)
      .json({ success: false, message: "Problem with fetching event" });
  }
};
export const getDomainEvents = async (req, res) => {
  try {
    const { domain } = req.params; // Ensure the param name matches the route
    const events = await Event.find({ domain });

    if (events.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Events not found events length is 0 ",
      });
    }

    res.status(200).json({ success: true, events });
    return events;
  } catch (e) {
    console.error("Error in fetching events:", e);
    res
      .status(500)
      .json({ success: false, message: "Problem with fetching events" });
  }
};

// export const registerEvent = async (req, res) => {
//   try {
//     const { eventId } = req.params;
//     const { userId } = req.body;

//     if (
//       !mongoose.Types.ObjectId.isValid(userId) ||
//       !mongoose.Types.ObjectId.isValid(eventId)
//     ) {
//       return res.status(400).json({ message: "Invalid eventId or userId" });
//     }

//     //check if event exists

//     const event = await Event.findById(eventId);

//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }

//     // check if user is already registered for the event
//     if (event.attendees.includes(userId)) {
//       res
//         .status(400)
//         .json({ message: "User already registered for this event" });
//     }

//     event.attendees.push(userId);
//     await event.save();
//     res.status(200).json({
//       message: "User registered successfully",
//       event,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res
//       .status(500)
//       .json({ success: false, message: "failed to register try again" });
//   }
// };

export const registerEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId } = req.body;

    // Prevent multiple response attempts
    let responseSent = false;

    // Check for existing registration
    const existingEvent = await Event.findById(eventId);
    if (!existingEvent) {
      if (!responseSent) {
        responseSent = true;
        return res.status(404).json({ message: "Event not found" });
      }
    }

    if (existingEvent.attendees.includes(userId)) {
      if (!responseSent) {
        responseSent = true;
        return res.status(400).json({ message: "Already registered" });
      }
    }

    // Add user to attendees
    existingEvent.attendees.push(userId);
    await existingEvent.save();

    if (!responseSent) {
      responseSent = true;
      res.status(200).json({
        message: "Successfully registered",
        event: existingEvent,
      });
    }
  } catch (error) {
    console.error(error);
    if (!responseSent) {
      res.status(500).json({ message: "Error registering for event" });
    }
  }
};
