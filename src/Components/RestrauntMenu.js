import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utility/useRestrauntMenu";

import { restraunt_IMG_CDN } from "../config";
import Shimmer from "./ShimmerUI";

const RestrauntMenu = () => {
  const { id } = useParams();

  //this is the custom hook for fetching the restraunt details
  const restraunt = useRestrauntMenu(id);

  return (
    <>
      {restraunt.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="restrauntPageMenuItem">
            <div>
              <h1>Restraunt id : {id}</h1>
              <h2>{restraunt?.data?.cards[0]?.card?.card?.info?.name}</h2>
              <img
                src={
                  restraunt_IMG_CDN +
                  restraunt?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
                }
                alt="Restraunt Image"
              />
              <h3>{restraunt?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
              <h3>{restraunt?.data?.cards[0]?.card?.card?.info?.city}</h3>
              <h3>
                Ratings :{" "}
                {restraunt?.data?.cards[0]?.card?.card?.info?.avgRating}
              </h3>
            </div>
            <div className="menuList">
              <h1 className="menuListHeading">Menu</h1>
              <ul>
                {console.log(
                  restraunt?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                    .cards[2]?.card?.card?.itemCards[0]?.card?.info?.name
                )}

                {restraunt?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards.map(
                  (item) => (
                    <li key={item?.card?.info?.id}>
                      {item?.card?.info?.name} == (Rs.{" "}
                      {item?.card?.info?.price / 100})
                      <br />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RestrauntMenu;
