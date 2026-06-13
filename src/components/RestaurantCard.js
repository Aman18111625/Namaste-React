import { CLOUDINARY_IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // Destructuring props
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props.resData || {};
  return (
    <div className="m-4 w-[280px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100">
      <div className="relative">
        <img
          src={`${CLOUDINARY_IMAGE_URL}${cloudinaryImageId}`}
          alt="Restaurant"
          className="w-full h-44 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center shadow-sm">
          ⏱ {sla?.deliveryTime} mins
        </div>
      </div>
      
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-extrabold text-lg text-gray-800 truncate mb-1" title={name}>
            {name}
          </h3>
          <p className="text-gray-500 text-sm truncate mb-4" title={cuisines?.join(", ")}>
            {cuisines?.join(", ")}
          </p>
          
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${
              parseFloat(avgRating) >= 4.0 ? "bg-green-500" : "bg-orange-400"
            }`}>
              ⭐ {avgRating}
            </span>
            <span className="text-gray-700 font-bold text-sm">{costForTwo}</span>
          </div>
        </div>
        
        <button className="w-full bg-[#ff6b35] hover:bg-[#e0531f] text-white py-2.5 rounded-xl font-bold transition-all text-sm mt-4 shadow-sm hover:shadow-md cursor-pointer">
          Order Now
        </button>
      </div>
    </div>
  );
};

//Higher Order Component: => Input: Restaurant Card, Output: Restaurant Card with Promoted Label

export const RestaurantCardWithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-3 left-7 bg-green-600 text-white px-3 py-1 text-xs font-bold rounded-full z-10 shadow-md">
          Veg
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
