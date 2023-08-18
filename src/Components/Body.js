import { useEffect, useState } from "react";
import { RestrauntData } from "../config";
import Restrauntcard from "./RestrauntCard";
import Shimmer from "./ShimmerUI";

function Filterdata(searchtex, restraunts) {
  const lowerSearchText = searchtex.toLowerCase();
  const filteredData = restraunts.filter((restraunt) => {
    const lowerName = restraunt.info.name.toLowerCase();
    return lowerName.includes(lowerSearchText);
  });
  return filteredData;
}

const Body = () => {
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setALlRestraunts] = useState([]);
  const [serchText, setSerchText] = useState("");

  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6313407&lng=77.2198645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await Data.json();

    setFilteredRestraunts(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setALlRestraunts(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return allRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchbox" key="searchbox">
        <input
          type="text"
          placeholder="Search Restraunt "
          value={serchText}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              const data = Filterdata(serchText, allRestraunts);
              setFilteredRestraunts(data);
            }
          }}
          onChange={(e) => {
            setSerchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            //this is function of filtering the data
            const data = Filterdata(serchText, allRestraunts);
            setFilteredRestraunts(data);
            console.log(setFilteredRestraunts(data));
          }}
        >
          Search
        </button>
      </div>

      <div className="cardlist">
        {filteredRestraunts?.map((restraunt) => (
          <Restrauntcard {...restraunt.info} key={restraunt.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
