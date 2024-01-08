"use client";

import Image from "next/image";

import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { useFilter } from "@/hooks/useFilter";
import { getBedroomsNumber } from "@/actions/getBedroomsNumber";
import { getBuildingType } from "@/actions/getBuildingType";
import { getLocation } from "@/actions/getLocation";

// Here is where all the client filtering logic happens!
// I don't think you'll have to bother much about this component, but feel free!
// Please modify css styles. Didn't have much time for that.

const Filter = () => {
  const filter = useFilter();

  const [locations, setLocations] = useState([]);
  const [buildingTypes, setBuildingTypes] = useState([]);
  const [bedroomsNumbers, setBedroomsNumbers] = useState([]);

  // local state variables
  // because of the button that updates the UI
  const [search, setSearch] = useState("");
  

  const [location, setLocation] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [bedroomsNumber, setBedroomsNumber] = useState("");

  const [collapsedSelectOptions, setCollapsedSelectOptions] = useState(false);

  const handleSearchInput = useDebouncedCallback((e) => {
    setSearch(e.target.value);
  }, 500);

  

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleBuildingType = (e) => {
    setBuildingType(e.target.value);
  };

  const handleBedroomsNumber = (e) => {
    setBedroomsNumber(e.target.value);
  };

  const handleRemoveAllFilter = (e) => {
    setSearch("");
    setCountry("");
    setProjectType("");
    filter.removeAllFilter();
  };

  // Clicking the Search Button should update the UI.
  const onHandleSubmit = (e) => {
    e.preventDefault();
    filter.addSearch({ search });

    filter.addLocation({ location });
    filter.addBuildingType({ buildingType });
    filter.addBedroomsNumber({ bedroomsNumber });
  };

  

  useEffect(() => {
    const fetchAllCitiesAndCountries = async () => {
      
      const bedroomsData = await getBedroomsNumber();
      const buildingTypeData = await getBuildingType();
      const locationData = await getLocation();

      setBedroomsNumbers(bedroomsData);
      setBuildingTypes(buildingTypeData);
      setLocations(locationData);
    };
    fetchAllCitiesAndCountries();
  }, []);


  return (
    <div>
      {/* Filtering components */}
      <div className="px-[20px] w-full -top-[37px] relative font-raleway">
        <div className="text-white filter-container max-w-[970px] lg:max-w-[1170px] mx-auto">
          <div>
            <div className="max-w-[1070px] mx-auto py-[10px] flex md:items-center flex-col md:flex-row">
              {/* Search bar */}
              <div className="bg-[#A18830] rounded-[2px] min-h-[35px] max-w-[863px] flex items-center flex-1">
                <div className="flex items-center justify-center w-full">
                  {/* Search Icon */}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="magnifying-glass"
                    className="svg-inline--fa fa-magnifying-glass h-[12px] w-[12px] inline mx-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    ></path>
                  </svg>
                  {/* Input */}
                  <input
                    placeholder="Community or Project"
                    className="inline bg-transparent text-[14px] pl-[1px] border-transparent shadow-none h-full w-[90%] outline-none placeholder:text-white"
                    onChange={handleSearchInput}
                  />
                </div>
              </div>

              <button
                onClick={onHandleSubmit}
                className="bg-white border-[#cfba82] shadow-md cursor-pointer hidden h-[36px] m-[10px] ml-0 py-[5px] px-[15px] text-left w-[196px] md:flex items-center justify-between text-black text-[14px]"
              >
                <span>Search</span>
                <Image
                  alt="arrow"
                  src={"/arrow-search.png"}
                  height={10}
                  width={28}
                />
              </button>
            </div>

            <div className="max-w-[1070px] mx-auto py-[10px] max-h-[400px] flex md:flex-row flex-col font-raleway gap-3">
              {/* All of these select options are hardcoded but provisions are made for them in the sanity schema / db */}
              <select className="all-select" onChange={handleBuildingType}>
                <option value={""}>Building Types</option>
                {buildingTypes?.map((building) => (
                  <option key={building?._id} value={building?.name}>
                    {building?.name}
                  </option>
                ))}
              </select>
              <select className="all-select" onChange={handleLocation}>
                <option value={""}>All locations</option>
                {locations?.map((location) => (
                  <option key={location._id} value={location?.name}>
                    {location?.name}
                  </option>
                ))}
              </select>
              <select
                className="all-select disabled:opacity-50"
                // disabled={true}
                onChange={handleBedroomsNumber}
              >
                <option value={""}>No of Bedrooms</option>
                {bedroomsNumbers?.map((bedroomNum) => (
                  <option
                    key={bedroomNum?._id}
                    value={bedroomNum?.numberOfRooms}
                  >
                    {bedroomNum?.numberOfRooms}
                  </option>
                ))}
              </select>
              
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setCollapsedSelectOptions((prev) => !prev)}
            >
              {/* Collapse filter select components */}
            </div>
          </div>

          <button
            onClick={onHandleSubmit}
            className="bg-white border-[#cfba82] shadow-md cursor-pointer md:hidden h-[36px] m-[10px] ml-0 py-[5px] px-[15px] text-left w-full flex items-center justify-between text-black text-[14px]"
          >
            <span>Search</span>
            <Image
              alt="arrow"
              src={"/arrow-search.png"}
              height={10}
              width={28}
            />
          </button>

          <div>{/* Reset filter cmmand will be here */}</div>
        </div>

        <div className="text-black max-w-[970px] lg:max-w-[1170px] mx-auto flex items-center justify-end mt-4 h-[20px] w-full">
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <div className="uppercase">sorted by</div>
            <select
              onChange={(e) =>
                filter.addOrderOfItems({ orderOfItems: e.target.value })
              }
              className="w-[150px] font-raleway outline-none py-1 px-2 text-sm"
            >
              <option value={"createdAt asc"}>Latest Project</option>
              <option value={"price asc"}>Price Lowest</option>
              <option value={"price desc"}>Price Highest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
