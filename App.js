import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTrVbvtGgpES5LypFyiffQR9oNUrVHcnDkA&s" alt="Logo" className="logo" />
            </div>
            <div className="nav-container">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>
    )
}

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

const restaurantData = [
  {
    id: 'id_1',
    resName: "Meghna Foods",
    cuisine: "Biryani, North Indian, Asian",
    ratings: "4.5",
    deliveryTime: "30 mins",
    costForTwo: "₹600"
  },
  {
    id: 'id_2',
    resName: "KFC",
    cuisine: "Burgers, Fast Food",
    ratings: "4.2",
    deliveryTime: "25 mins",
    costForTwo: "₹800"
  },
  {
    id: 'id_3',
    resName: "Rameshwaram Cafe",
    cuisine: "South Indian, North Indian",
    ratings: "4.1",
    deliveryTime: "35 mins",
    costForTwo: "₹500"
  },
  {
    id: 'id_4',
    resName: "Domino's Pizza",
    cuisine: "Italian, Pizza",
    ratings: "4.7",
    deliveryTime: "30 mins",
    costForTwo: "₹700"
  },
  {
    id: 'id_5',
    resName: "Asha Tiffin",
    cuisine: "North Indian, South Indian",
    ratings: "4.0",
    deliveryTime: "25 mins",
    costForTwo: "₹400"
  },
  {
    id: 'id_6',
    resName: "Oven Story",
    cuisine: "Italian, Pizza",
    ratings: "4.0",
    deliveryTime: "25 mins",
    costForTwo: "₹600"
  },
  {
    id: 'id_7',
    resName: "Taco Bell",
    cuisine: "Mexican, Tacos",
    ratings: "4.3",
    deliveryTime: "40 mins",
    costForTwo: "₹500"
  },
  {
    id: 'id_8',
    resName: "Chinese Food Point",
    cuisine: "Chinese, Noodles",
    ratings: "3.8",
    deliveryTime: "25 mins",
    costForTwo: "₹300"
  },
  {
    id: 'id_9',
    resName: "Sangam Sweets",
    cuisine: "Sweets, Gujarati",
    ratings: "4.8",
    deliveryTime: "25 mins",
    costForTwo: "₹200"
  }
]

const Body = () => {
    return (
        <div className="body-container">
            <div className='search-container'>
              <input type="text" placeholder="Search for restaurants..." className='search-input' />
              <div className='search-button'> Search </div>
            </div>
            <div className="restaurant-container">
                {restaurantData.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.id}
                        resName={restaurant.resName}
                        cuisine={restaurant.cuisine}
                        ratings={restaurant.ratings}
                        deliveryTime={restaurant.deliveryTime}
                    />
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);