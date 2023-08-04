import { restraunt_IMG_CDN } from "../config";
import { Link } from "react-router-dom";

const Restrauntcard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  // console.log(id);
  return (
    <Link to={"/restraunt/" + id} style={{ textDecoration: "none" }}>
      <div className="card">
        <img src={restraunt_IMG_CDN + cloudinaryImageId} alt="Restraunt img" />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h3>{avgRating}</h3>
      </div>
    </Link>
  );
};

export default Restrauntcard;
