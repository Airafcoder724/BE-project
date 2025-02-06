import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastloginDate: {
      type: Date,
      default: Date.now(),
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    registeredEvents: [
      {
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Events" },
        status: {
          type: String,
          enum: ["Registered", "Pending", "Cancelled"],
          default: "Registered",
        },
      },
    ],
    resetPasswordToken: String,
    resetPasswordExpireAtDate: Date,
    verificationToken: String,
    verificationTokenExpireAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
