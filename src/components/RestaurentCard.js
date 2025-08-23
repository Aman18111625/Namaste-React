import { CLOUDINARY_IMAGE_URL } from "../utils.js/constant";

const RestaurantCard = (props) => {
  // Destructuring props
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = props.resData || {};
  return (
    <div className="restaurant-card">
      <img
        src={`${CLOUDINARY_IMAGE_URL}${cloudinaryImageId}`}
        alt="Restaurant"
        className="restaurant-image"
      />
      <div className="restaurant-info">
        <h5>{name}</h5>
        <h5>{cuisines?.join(", ")}</h5>
        <h5>{costForTwo}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla?.deliveryTime}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
