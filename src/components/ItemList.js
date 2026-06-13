import { CLOUDINARY_IMAGE_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

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
          {(item?.card?.info?.imageId || item?.card?.info?.imageUrl) && (
            <div className="relative w-3/12 p-4 flex flex-col items-center">
              <img
                src={
                  item?.card?.info?.imageUrl ||
                  CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId
                }
                alt={item?.card?.info?.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="absolute bottom-2 z-10">
                <button
                  className="bg-black border border-gray-400 px-4 py-1 rounded-lg text-white cursor-pointer hover:bg-gray-800 text-xs shadow-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
