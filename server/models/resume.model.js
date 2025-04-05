import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true }, // Resume Title (e.g., "Software Engineer Resume")
  personal:[{
    fullname:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true,
    },
    phone:{
      type: String,
      required: true
    },
    address:{
      type: String,
    },
    linkedin:{
      type: String,
    },
    portfoloio:{
      type: String,
    },
  }],

  education: [{
    degree: String,
    institution: String,
    field: String,
    start_date: String,
    end_date:String,
    description: String,
  }],

  experience: [{
    company: String,
    job_title: String,
    start_date: Date,
    end_date: Date,
    description: String
  }],

  projects: [{
    name: String,
    description: String,
    link: String
  }],

  skill:[{
    skills:String,
    professional_summary: String,
  }],

  sent_to: [{ type: mongoose.Schema.Types.ObjectId, ref: "ResumeTracking" }]
}, { timestamps: true });

const Resume = mongoose.model("Resume", ResumeSchema);
export default Resume;