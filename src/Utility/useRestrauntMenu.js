import { useState, useEffect } from "react";
import { FETCH_RESTRAUNTMENU_API_URL } from "../config";

const useRestrauntMenu = (id) => {
  const [restraunt, setRestraunt] = useState([]);

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6313407&lng=77.2198645&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await Data.json();
    console.log(json?.data);
    //  console.log(id);
    setRestraunt(json);
    // console.log(json?.data?.cards[0]?.card?.card?.info?.name);
  }

  return restraunt;
};

export default useRestrauntMenu;
