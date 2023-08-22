import { useState, useEffect } from "react";

const useRestrauntData = () => {
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setALlRestraunts] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6313407&lng=77.2198645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await Data.json();

    setFilteredRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setALlRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return setFilteredRestraunts, setALlRestraunts;
};

export default useRestrauntData;
