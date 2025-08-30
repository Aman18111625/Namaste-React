import { CLOUDINARY_IMAGE_URL } from "../utils.js/constant";

const RestaurantCard = (props) => {
  // Destructuring props
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = props.resData || {};
  return (
    <div className="m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={`${CLOUDINARY_IMAGE_URL}${cloudinaryImageId}`}
        alt="Restaurant"
        className="rounded-lg"
      />
      <div>
        <p className="font-bold py-4 text-xl">{name}</p>
        <p>{cuisines?.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating}⭐/5</p>
        <p>{sla?.deliveryTime} Minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
