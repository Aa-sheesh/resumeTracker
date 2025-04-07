import { create } from 'zustand';

const useResumeStore = create((set) => ({
  resumes: [],
  selectedResume: null,
  tracking: [],

  setResumes: (resumes) => set({ resumes }),
  setSelectedResume: (resume) => set({ selectedResume: resume }),
  setTracking: (tracking) => set({ tracking }),

  clearResumeData: () => set({ selectedResume: null, tracking: [] }),
}));

export default useResumeStore;
