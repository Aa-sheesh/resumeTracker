// src/stores/resumeStore.js
import { create } from 'zustand';
import axios from '../lib/axios';

const useResumeStore = create((set, get) => ({
  // Resume states
  resumes: [],
  selectedResume: null,
  isLoading: false,
  error: null,
  
  // Resume tracking states
  resumeTrackings: [],
  selectedTracking: null,
  
  // Form states
  currentTab: 'resumes',
  
  // Set current tab
  setCurrentTab: (tab) => set({ currentTab: tab }),
  
  // Select a resume
  selectResume: (resume) => set({ selectedResume: resume }),
  
  // Select a tracking entry
  selectTracking: (tracking) => set({ selectedTracking: tracking }),
  
  // Fetch all user resumes
  fetchResumes: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get('/api/v1/resumes');
      set({ resumes: response.data, isLoading: false, error: null });
    } catch (error) {
      console.error('Error fetching resumes:', error);
      set({ error: error.response?.data?.message || 'Failed to fetch resumes', isLoading: false });
    }
  },
  
  // Fetch resume trackings
  fetchResumeTrackings: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get('/api/v1/resume-tracking');
      set({ resumeTrackings: response.data, isLoading: false, error: null });
    } catch (error) {
      console.error('Error fetching resume trackings:', error);
      set({ error: error.response?.data?.message || 'Failed to fetch resume trackings', isLoading: false });
    }
  },
  
  // Create a resume
  createResume: async (resumeData) => {
    set({ isLoading: true });
    try {
      const response = await axios.post('/api/v1/resumes', resumeData);
      set((state) => ({ 
        resumes: [...state.resumes, response.data],
        isLoading: false,
        error: null
      }));
      return response.data;
    } catch (error) {
      console.error('Error creating resume:', error);
      set({ error: error.response?.data?.message || 'Failed to create resume', isLoading: false });
      throw error;
    }
  },
  
  // Update a resume
  updateResume: async (id, resumeData) => {
    set({ isLoading: true });
    try {
      const response = await axios.put(`/api/v1/resumes/${id}`, resumeData);
      set((state) => ({
        resumes: state.resumes.map(resume => resume._id === id ? response.data : resume),
        isLoading: false,
        error: null
      }));
      return response.data;
    } catch (error) {
      console.error('Error updating resume:', error);
      set({ error: error.response?.data?.message || 'Failed to update resume', isLoading: false });
      throw error;
    }
  },// Delete a resume
  deleteResume: async (id) => {
    set({ isLoading: true });
    try {
      await axios.delete(`/api/v1/resumes/${id}`);
      set((state) => ({
        resumes: state.resumes.filter(resume => resume._id !== id),
        isLoading: false,
        error: null
      }));
    } catch (error) {
      console.error('Error deleting resume:', error);
      set({ error: error.response?.data?.message || 'Failed to delete resume', isLoading: false });
      throw error;
    }
  },
  
  // Create a resume tracking
  createResumeTracking: async (trackingData) => {
    set({ isLoading: true });
    try {
      const response = await axios.post('/api/v1/resume-tracking', trackingData);
      set((state) => ({ 
        resumeTrackings: [...state.resumeTrackings, response.data],
        isLoading: false,
        error: null
      }));
      return response.data;
    } catch (error) {
      console.error('Error creating resume tracking:', error);
      set({ error: error.response?.data?.message || 'Failed to create resume tracking', isLoading: false });
      throw error;
    }
  },
  
  // Update a resume tracking
  updateResumeTracking: async (id, trackingData) => {
    set({ isLoading: true });
    try {
      const response = await axios.put(`/api/v1/resume-tracking/${id}`, trackingData);
      set((state) => ({
        resumeTrackings: state.resumeTrackings.map(tracking => 
          tracking._id === id ? response.data : tracking
        ),
        isLoading: false,
        error: null
      }));
      return response.data;
    } catch (error) {
      console.error('Error updating resume tracking:', error);
      set({ error: error.response?.data?.message || 'Failed to update resume tracking', isLoading: false });
      throw error;
    }
  },
  
  // Delete a resume tracking
  deleteResumeTracking: async (id) => {
    set({ isLoading: true });
    try {
      await axios.delete(`/api/v1/resume-tracking/${id}`);
      set((state) => ({
        resumeTrackings: state.resumeTrackings.filter(tracking => tracking._id !== id),
        isLoading: false,
        error: null
      }));
    } catch (error) {
      console.error('Error deleting resume tracking:', error);
      set({ error: error.response?.data?.message || 'Failed to delete resume tracking', isLoading: false });
      throw error;
    }
  },
  
  // Clear errors
  clearErrors: () => set({ error: null })
}));

export default useResumeStore;