import React from 'react'

export default function Favorites() {
  const favoriteItems = [
    {
      id: "F101",
      dishName: "Margherita Pizza",
      restaurant: "Pizza Palace",
      price: "₹250",
      imageUrl: "https://images.unsplash.com/photo-1601924582972-26064e67c9ac?auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      cuisine: "Italian",
    },
    {
      id: "F102",
      dishName: "Veg Burger",
      restaurant: "Burger Hub",
      price: "₹150",
      imageUrl: "https://images.unsplash.com/photo-1612874743837-b7373bf7b1f6?auto=format&fit=crop&w=500&q=60",
      rating: 4.2,
      cuisine: "American",
    },
    {
      id: "F103",
      dishName: "Pasta Alfredo",
      restaurant: "Pasta Point",
      price: "₹300",
      imageUrl: "https://images.unsplash.com/photo-1601315374519-838d82ab9b0e?auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      cuisine: "Italian",
    },
    {
      id: "F104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: "₹350",
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      cuisine: "Indian",
    },
    {
      id: "F104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: "₹350",
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      cuisine: "Indian",
    }, {
      id: "F104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: "₹350",
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      cuisine: "Indian",
    }, {
      id: "F104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: "₹350",
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      cuisine: "Indian",
    }, {
      id: "F104",
      dishName: "Chicken Biryani",
      restaurant: "Biryani House",
      price: "₹350",
      imageUrl: "https://images.unsplash.com/photo-1664121707455-71e30af78b24?auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      cuisine: "Indian",
    },
  ];
  return (
    <>
      <h2>Favorite dishes</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          favoriteItems.map((elem, ind) => {
            return (
              <div className="col" key={ind}>
                <div className="card shadow">
                  <img className="card-img-top" src="/image.png" alt={elem.dishName} />
                  <div className="row m-2">
                    <div className="col">{elem.dishName}</div>
                    <div className="col text-end">{elem.price}</div>
                    <p className="card-text  ml-2">Rating: {elem.rating}</p>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  )
}
