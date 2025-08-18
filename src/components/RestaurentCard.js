const RestaurantCard = (props) => {
    // Destructuring props
    const { resName, cuisine, ratings, deliveryTime, cloudinaryImageId } = props;
    return (
        <div className="restaurant-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${cloudinaryImageId}`} alt="Restaurant" className='restaurant-image' />
            <div className="restaurant-info">
                <h5>{resName}</h5>
                <h5>{cuisine}</h5>
                <h5>{ratings}</h5>
                <h5>{deliveryTime}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;