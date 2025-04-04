import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true }, // Resume Title (e.g., "Software Engineer Resume")
  summary: { type: String },
  skills: [String],

  education: [{
    degree: String,
    institution: String,
    start_year: Number,
    end_year: Number
  }],

  experience: [{
    job_title: String,
    company: String,
    start_date: Date,
    end_date: Date,
    description: String
  }],

  projects: [{
    name: String,
    description: String,
    link: String
  }],

  certifications: [String],
  achievements: [String],
  languages: [String],
  interests: [String],

  sent_to: [{ type: mongoose.Schema.Types.ObjectId, ref: "ResumeTracking" }]
}, { timestamps: true });

const Resume = mongoose.model("Resume", ResumeSchema);
export default Resume;