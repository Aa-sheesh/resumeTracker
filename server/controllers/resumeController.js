import Resume from "../models/resume.model.js";
import ResumeTracking from "../models/resumeTracking.model.js";
import { User } from "../models/user.model.js";

/**
 * Create a new resume
 */
export const createResume = async (req, res) => {
  try {
    const user_id = req.user?.id; // Ensure user ID exists

    if (!user_id) {
      return res.status(401).json({ message: "Unauthorized: User ID is required" });
    }

    const { title, summary, skills, education, experience, projects, certifications, achievements, languages, interests } = req.body;

    // Validate required fields
    if (!title || !skills || !education || !experience) {
      return res.status(400).json({ message: "Missing required fields (title, skills, education, experience)" });
    }

    const newResume = new Resume({
      user_id,
      title,
      summary,
      skills,
      education,
      experience,
      projects,
      certifications,
      achievements,
      languages,
      interests,
    });

    // Save the resume
    const savedResume = await newResume.save();

    // Add resume reference to user
    await User.findByIdAndUpdate(user_id, { $push: { resumes: savedResume._id } });

    res.status(201).json({ message: "Resume created successfully", resume: savedResume });
  } catch (error) {
    console.error("Error creating resume:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * Get all resumes of the logged-in user
 */
export const getAllResumes = async (req, res) => {
  try {
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ message: "Unauthorized: User ID is required" });
    }

    const resumes = await Resume.find({ user_id }).populate("sent_to");

    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * Get a specific resume by ID
 */
export const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id).populate({
      path: "sent_to",
      model: "ResumeTracking",
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.status(200).json(resume);
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * Update a resume by ID
 */
export const updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedResume = await Resume.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.status(200).json({ message: "Resume updated successfully", resume: updatedResume });
  } catch (error) {
    console.error("Error updating resume:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * Delete a resume by ID
 */
export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Remove resume reference from user
    await User.findByIdAndUpdate(resume.user_id, { $pull: { resumes: id } });

    // Delete the resume
    await Resume.findByIdAndDelete(id);

    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    console.error("Error deleting resume:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * Track a company where a resume was sent
 */
export const trackCompany = async (req, res) => {
  try {
    const { id } = req.params; // Resume ID
    const { company, position } = req.body;

    if (!company || !position) {
      return res.status(400).json({ message: "Company and position are required" });
    }

    // Create tracking entry
    const newTrackingEntry = new ResumeTracking({ resume_id: id, company, position });
    const savedTrackingEntry = await newTrackingEntry.save();

    // Update resume's sent_to field
    await Resume.findByIdAndUpdate(id, { $push: { sent_to: savedTrackingEntry._id } });

    res.status(201).json({ message: "Company tracked successfully", tracking: savedTrackingEntry });
  } catch (error) {
    console.error("Error tracking company:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * Get tracking details of a resume by ID
 */
export const getResumeTrackingDetails = async (req, res) => {
  try {
    const { resumeId } = req.params; // Extract resume ID from URL

    // Find tracking entries related to the resume
    const trackingDetails = await ResumeTracking.find({ resume_id: resumeId });

    if (!trackingDetails || trackingDetails.length === 0) {
      return res.status(404).json({ message: "No tracking details found for this resume" });
    }

    res.status(200).json({ tracking: trackingDetails });
  } catch (error) {
    console.error("Error fetching resume tracking details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * Delete a resume tracking entry by ID
 */
export const deleteResumeTrackingEntry = async (req, res) => {
  try {
    const { resumeId, trackingId } = req.params;

    // Find the tracking entry
    const trackingEntry = await ResumeTracking.findById(trackingId);

    if (!trackingEntry) {
      return res.status(404).json({ message: "Tracking entry not found" });
    }

    // Ensure the tracking entry belongs to the given resume
    if (trackingEntry.resume_id.toString() !== resumeId) {
      return res.status(400).json({ message: "Tracking entry does not belong to the given resume" });
    }

    // Delete the tracking entry
    await ResumeTracking.findByIdAndDelete(trackingId);

    // Remove tracking entry reference from the resume
    await Resume.findByIdAndUpdate(resumeId, { $pull: { sent_to: trackingId } });

    res.status(200).json({ message: "Tracking entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting resume tracking entry:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
