import mongoose from "mongoose";


const ResumeTrackingSchema = new mongoose.Schema({
  resume_id: { type: mongoose.Schema.Types.ObjectId, ref: "Resume", required: true },
  company: { type: String, required: true },
  position: { type: String, required: true },
  date_sent: { type: Date, default: Date.now }
}, { timestamps: true });

const ResumeTracking = mongoose.model("ResumeTracking", ResumeTrackingSchema);
export default ResumeTracking;