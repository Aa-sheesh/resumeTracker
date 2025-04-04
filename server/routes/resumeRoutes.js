import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { 
    createResume, 
    getAllResumes, 
    getResumeById, 
    updateResume, 
    deleteResume, 
    trackCompany ,
    getResumeTrackingDetails,
    deleteResumeTrackingEntry
} from '../controllers/resumeController.js';

const router = express.Router();

// Create a resume
router.post('/resume/create', verifyToken, createResume);

// Get all resumes for the logged-in user
router.get('/resume/all', verifyToken, getAllResumes);

// Get a specific resume by ID
router.get('/resume/:id', verifyToken, getResumeById);

// Update a resume by ID
router.put('/resume/:id', verifyToken, updateResume);

// Delete a resume by ID
router.delete('/resume/:id', verifyToken, deleteResume);

// Track a company where a resume was sent
router.post('/resume/:id/track-company', verifyToken, trackCompany);

// Get tracking details for a resume
router.get('/resume/:resumeId/tracking', verifyToken, getResumeTrackingDetails);

// Delete a resume tracking entry
router.delete('/resume/:resumeId/tracking/:trackingId', verifyToken, deleteResumeTrackingEntry);



export default router;
