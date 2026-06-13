export const restaurantData = [
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
];

export const menuMockData = [
  {},
  {},
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "123456",
          name: "Spice Garden",
          city: "Bangalore",
          avgRating: 4.4,
          costForTwoMessage: "₹400 for two",
          cuisines: ["North Indian", "Chinese", "Biryani"],
          sla: {
            deliveryTime: 30
          }
        }
      }
    }
  },
  {},
  {
    groupedCard: {
      cardGroupMap: {
        REGULAR: {
          cards: [
            {
              card: {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                  title: "Recommended",
                  itemCards: [
                    {
                      card: {
                        info: {
                          id: "1001",
                          name: "Chicken Biryani",
                          category: "Biryani",
                          price: 29900,
                          description: "Aromatic basmati rice with spicy chicken.",
                          imageId: "chicken_biryani",
                          imageUrl:
                            "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
                          isVeg: 0,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.6"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1002",
                          name: "Paneer Butter Masala",
                          category: "Main Course",
                          price: 24900,
                          description: "Creamy tomato gravy with paneer cubes.",
                          imageId: "paneer_butter_masala",
                          imageUrl:
                            "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
                          isVeg: 1,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.5"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1003",
                          name: "Veg Fried Rice",
                          category: "Chinese",
                          price: 18900,
                          description: "Wok tossed rice with vegetables.",
                          imageId: "veg_fried_rice",
                          imageUrl:
                            "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
                          isVeg: 1,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.2"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1004",
                          name: "Chicken Fried Rice",
                          category: "Chinese",
                          price: 22900,
                          description: "Fried rice with juicy chicken pieces.",
                          imageId: "chicken_fried_rice",
                          imageUrl:
                            "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
                          isVeg: 0,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.4"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1005",
                          name: "Butter Naan",
                          category: "Breads",
                          price: 4900,
                          description: "Soft naan brushed with butter.",
                          imageId: "butter_naan",
                          imageUrl:
                            "https://images.unsplash.com/photo-1619535860434-cf9b2f7d7f7f?w=500",
                          isVeg: 1,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.3"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1006",
                          name: "Tandoori Chicken",
                          category: "Starters",
                          price: 34900,
                          description: "Chicken marinated in spices and grilled.",
                          imageId: "tandoori_chicken",
                          imageUrl:
                            "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=500",
                          isVeg: 0,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.7"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1007",
                          name: "Veg Manchurian",
                          category: "Chinese",
                          price: 19900,
                          description: "Crispy vegetable balls in spicy sauce.",
                          imageId: "veg_manchurian",
                          imageUrl:
                            "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
                          isVeg: 1,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.1"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1008",
                          name: "Masala Dosa",
                          category: "South Indian",
                          price: 12900,
                          description: "Crispy dosa stuffed with potato masala.",
                          imageId: "masala_dosa",
                          imageUrl:
                            "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
                          isVeg: 1,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.5"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1009",
                          name: "Chocolate Brownie",
                          category: "Desserts",
                          price: 14900,
                          description: "Rich chocolate brownie.",
                          imageId: "chocolate_brownie",
                          imageUrl:
                            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
                          isVeg: 1,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.8"
                            }
                          }
                        }
                      }
                    },
                    {
                      card: {
                        info: {
                          id: "1010",
                          name: "Fresh Lime Soda",
                          category: "Beverages",
                          price: 7900,
                          description: "Refreshing lime soda.",
                          imageId: "fresh_lime_soda",
                          imageUrl:
                            "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500",
                          isVeg: 1,
                          ratings: {
                            aggregatedRating: {
                              rating: "4.0"
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
];