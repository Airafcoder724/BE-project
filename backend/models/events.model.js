import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true, // such as sports , technical , clutural
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true, // class room number cc or ppcrc or college name
    },
    event_date: {
      type: Date,
      required: true,
    },
    community: {
      type: String,
      required: true, // gdsc , ITSA , CASA
    },
    isOpen: {
      type: Boolean,
    },
    regestred: [
      {
        type: mongoose.Schema.Types.ObjectId, // who join the event  or regitser it
        ref: "User",
      },
    ],
    image_url: {
      type: String, // default image url if not provided by user.
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Events", EventSchema);
