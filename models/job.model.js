import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ["open", "in-progress", "completed"],
      default: "open",
    },
    jobProvider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Job poster
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // List of freelancers
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Selected freelancer
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;