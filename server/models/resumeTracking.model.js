// resumeTracking.model.js
import mongoose from "mongoose";

const ResumeTrackingSchema = new mongoose.Schema(
  {
    resume_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    application_date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    notes: {
      type: String,
    },
    contact_person: {
      type: String,
    },
    contact_email: {
      type: String,
    },
    job_url: {
      type: String,
    },
  },
  { timestamps: true }
);

const ResumeTracking = mongoose.model("ResumeTracking", ResumeTrackingSchema);
export default ResumeTracking;
