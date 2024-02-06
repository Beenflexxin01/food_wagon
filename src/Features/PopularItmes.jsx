import { useState } from "react";
import g15 from "../Images/burger.png";
import g10 from "../Images/toffe_cake.png";
import g25 from "../Images/pancake.png";
import g20 from "../Images/crispy_sandwich.png";
import g21 from "../Images/thai_soup.png";
const popularItems = [
  {
    id: 1,
    name: "Cheese Burger",
    location: "Burger Arena",
    image: g15,
    price: 3.88,
  },
  {
    id: 2,
    name: "Toffe's Cake",
    location: "Top Sticks",
    image: g10,
    price: 4.0,
  },
  {
    id: 3,
    name: "Dancake",
    location: "Cake World",
    image: g25,
    price: 1.99,
  },
  {
    id: 4,
    name: "Crispy Sandwitch",
    location: "Fastfood Dine",
    image: g20,
    price: 3.0,
  },
  {
    id: 5,
    name: "Thai Soup",
    location: "Foody man",
    image: g21,
    price: 3.0,
  },
];
function PopularItmes() {
  const [getPopularItems] = useState(popularItems);
  return (
    <>
      <div className="popular-items containe">
        <h2 className="secondary-header popular">Popular items</h2>
        <div className="greys">
          {getPopularItems &&
            getPopularItems.map((items) => (
              <div className="popular-items">
                <img
                  src={items.image}
                  alt={items.name}
                  className="popular-img"
                />
                <p className="text-grey">{items.name}</p>
                <p className="text-grey location">{items.location}</p>
                <p className="text-grey">${items.price}</p>
                <button className="btn-order">Order Now</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default PopularItmes;
