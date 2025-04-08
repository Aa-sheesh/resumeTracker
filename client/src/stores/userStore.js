import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,

      setUser: (user) => set({ user }),

      fetchUserProfile: async () => {
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/profile`, {
            credentials: "include",
          });
          if (!res.ok) throw new Error("Failed to fetch profile");

          const data = await res.json();
          set({ user: data });
        } catch (error) {
          console.error("Error fetching profile:", error.message);
        }
      },

      updateUserProfile: async (bio, location) => {
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/profile`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ bio, location }),
          });

          if (!res.ok) throw new Error("Failed to update profile");

          const updatedUser = await res.json();
          set({ user: updatedUser });
        } catch (error) {
          console.error("Error updating profile:", error.message);
        }
      },

      clearUser: () => set({ user: null }),
    }),
    { name: "user-storage" }
  )
);

export default useUserStore;