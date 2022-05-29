const { string, required } = require("joi");
const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    company: {
      type: string,
      required: [true, "Please provide company"],
      maxlength: 50,
    },
    position: {
      type: string,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: string,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jobs", jobsSchema);
