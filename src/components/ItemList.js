import { CLOUDINARY_IMAGE_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span className="mx-2">₹{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-sm text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>
          {item?.card?.info?.imageId && (
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="bg-black border border-gray-400 px-2 py-1 rounded-lg text-white">
                  Add +
                </button>
              </div>
              <img
                src={CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                className="w-25 h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
