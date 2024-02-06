import { useState } from "react";
import { HiClock, HiStar, HiTag } from "react-icons/hi2";

import g15 from "../Images/food_wrld.png";
import g10 from "../Images/donuts_hut.png";
import g11 from "../Images/pizza_hub.png";
import g25 from "../Images/donut_hut.png";
import g21 from "../Images/ruby_tuesday.png";
import g14 from "../Images/kuakata_chicken.png";
import g13 from "../Images/red_square.png";
import g12 from "../Images/taco_bell.png";
import fw from "../Images/f_w.png";
import ph from "../Images/p_h.png";
import dh from "../Images/d_h.png";
import dhg from "../Images/d_h_g.png";
import rt from "../Images/r_t.png";
import kfc from "../Images/kfc.png";
import rs from "../Images/r_s.png";
import tb from "../Images/t_b.png";

const popularItems = [
  {
    id: 1,
    name: "Foodworld",
    iconImage: fw,
    rating: 46,
    image: g15,
    status: "Opens tomorrow",
    discount: "20% off",
    delivery: "Fast",
  },
  {
    id: 2,
    name: "Pizzahub",
    iconImage: ph,
    rating: 40,
    image: g11,
    status: "Opens tomorrow",
    discount: "15% off",
    delivery: "Fast",
  },
  {
    id: 3,
    name: "Donuts hut",
    iconImage: dh,
    rating: 20,
    image: g10,
    status: " Open Now",
    discount: "10% off",
    delivery: "Fast",
  },
  {
    id: 4,
    name: "Donuts hut",
    iconImage: dhg,
    rating: 50,
    image: g25,
    status: "Open Now",
    discount: "15% off",
    delivery: "Fast",
  },
  {
    id: 5,
    name: "Ruby Tuesday",
    iconImage: rt,
    rating: 26,
    image: g21,
    status: "Open Now",
    discount: "10% off",
    delivery: "Fast",
  },

  {
    id: 6,
    name: "Kuakata Fried Chicken",
    iconImage: kfc,
    rating: 53,
    image: g14,
    status: "Open Now",
    discount: "25% off",
    delivery: "Fast",
  },
  {
    id: 7,
    name: "Red Square",
    iconImage: rs,
    rating: 45,
    image: g13,
    status: "Open Now",
    discount: "10% off",
    delivery: "Fast",
  },
  {
    id: 8,
    name: "Taco Bell",
    iconImage: tb,
    rating: 35,
    image: g12,
    status: "Open Now",
    discount: "10% off",
    delivery: "Fast",
  },
];
function Restaurants() {
  const [getPopularItems] = useState(popularItems);
  return (
    <>
      <div className="featured-restaurants">
        <h2 className="secondary-header popular">Featured Restaurants</h2>

        <div className="grid-4-cols">
          {getPopularItems &&
            getPopularItems.map((items) => (
              <div className="restaurant-item">
                <img
                  src={items.image}
                  alt={items.name}
                  className="popular-img"
                />
                <div className="deliveryy">
                  <div className="delivery">
                    <HiTag className="icon tag-icon" />
                    <p className="discount">{items.discount}</p>
                  </div>

                  <div className="delivery">
                    <HiClock className="icon" />
                    <p className="discount deliver"> {items.delivery}</p>
                  </div>
                </div>
                <div className="icon-image">
                  <img
                    src={items.iconImage}
                    alt={items.name}
                    className="icon-img"
                  />
                  <p className="restaurant-text">{items.name}</p>
                </div>
                <div className="star-rating">
                  <HiStar size={"25px"} className="star" />
                  <p className="text-grey rating"> {items.rating}</p>
                </div>
                <button className=" stat-btn">{items.status}</button>
              </div>
            ))}
        </div>
      </div>
      <button className=" btn-order btn-view">View All &rarr;</button>
    </>
  );
}

export default Restaurants;
