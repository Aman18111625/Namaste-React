const RestaurantCard = (props) => {
    // Destructuring props
    const { resName, cuisine, ratings, deliveryTime } = props;
    return (
        <div className="restaurant-card">
            <img src="https://images.venuebookingz.com/18104-1515154374-wm-meghana-foods-5.JPG" alt="Restaurant" className='restaurant-image' />
            <div className="restaurant-info">
                <h3>{resName}</h3>
                <h5>{cuisine}</h5>
                <h5>{ratings}</h5>
                <h5>{deliveryTime}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;