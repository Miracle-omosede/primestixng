// Zustand is a global state management tool that helps us update the state
// of the search and filter functionality

import { create } from "zustand";

export const useFilter = create((set, get) => ({
  searchData: {
    search: "",
    orderOfItems: "createdAt asc",
    location: "",
    buildingType: "",
    bedroomsNumber: "",
  },
  addSearch: (search) => {
    const prev = get().searchData;

    set({ searchData: { ...prev, ...search } });
  },
  addLocation: (location) => {
    const prev = get().searchData;
    set({ searchData: { ...prev, ...location } });
  },
  addBuildingType: (buildingType) => {
    const prev = get().searchData;
    set({ searchData: { ...prev, ...buildingType } });
  },
  addBedroomsNumber: (bedroomsNumber) => {
    const prev = get().searchData;
    set({ searchData: { ...prev, ...bedroomsNumber } });
  },

  addProjectType: (project_type) => {
    const prev = get().searchData;

    set({ searchData: { ...prev, ...project_type } });
  },

  addOrderOfItems: (orderOfItems) => {
    const prev = get().searchData;
    set({ searchData: { ...prev, ...orderOfItems } });
  },

  removeAllFilter: () => {
    set({
      searchData: {
        search: "",
        location: "",
        buildingType: "",
        bedroomsNumber: "",
      },
    });
  },
}));
