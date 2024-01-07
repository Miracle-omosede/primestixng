// Zustand is a global state management tool that helps us update the state
// of the search and filter functionality

import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";

export const useIsVisitedPreloader = create(
  persist(
    (set, get) => ({
      hasVisited: false,

      setHasVisitedTrue: () => {
        set({ hasVisited: true });
      },

      setHasVisitedFalse: () => {
        set({ hasVisited: false });
      },

    }),
    {
      name: "isFirstVisit", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
