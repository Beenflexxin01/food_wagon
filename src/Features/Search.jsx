import { useState } from "react";
import { HiPlay } from "react-icons/hi2";
import { FaApple } from "react-icons/fa6";
import g15 from "../Images/pizza.png";
import g10 from "../Images/burger.png";
import g25 from "../Images/noodle.png";
import g20 from "../Images/sub_sandwich.png";
import g21 from "../Images/chewmein.png";
import g22 from "../Images/steak.png";

import discount from "../Images/discount.png";
import clock from "../Images/clock.png";
import map from "../Images/map.png";

import app from "../Images/install_app.png";
const popularItems = [
  {
    id: 1,
    name: "Pizza",
    image: g15,
  },
  {
    id: 2,
    name: "Burger",
    image: g10,
  },
  {
    id: 3,
    name: "Noodles",
    image: g25,
  },
  {
    id: 4,
    name: "Sub-sanwich",
    image: g20,
  },
  {
    id: 5,
    name: "Chowmein",
    image: g21,
  },
  {
    id: 6,
    name: "Chowmein",
    image: g22,
  },
];

function Search() {
  const [getFoods] = useState(popularItems);
  return (
    <>
      <div className="food-sw">
        <div className="search">
          <h2 className="secondary-header popular s_f">Search by food</h2>

          <div className="greys s_s">
            {getFoods &&
              getFoods.map((food) => (
                <div>
                  <img src={food.image} alt={food.name} className="food-img" />

                  <p className="text align">{food.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="features">
        <div className="f_a">
          <div className="feature">
            <img src={discount} alt="discount" className="feature-img" />
            <div>
              <p className="d-t">Daily Discounts</p>
            </div>
          </div>
          <div className="feature">
            <img src={map} alt="map" className="feature-img" />
            <p className="d-t">Live Tracing</p>
          </div>
          <div className="feature ">
            <img src={clock} alt="clock" className="feature-img" />
            <p className="d-t f_m">Quick Recovery</p>
          </div>
        </div>
      </div>

      <div className="app-install">
        <div className="grid-2-cols">
          <img src={app} alt="app" className="a-i" />
        </div>

        <div className="grid-2-cols install">
          <h2 className="secondary-header i_h">Install the app</h2>

          <p className="install-text">
            It's never been easier to order food. Look for the finest discounts
            and you'll be lost in a world of delectable food.
          </p>

          <div className="btn">
            <button className="google">
              <HiPlay size={"25px"} className="google-icon" />
              GET IT ON Google Play
            </button>
            <button className="google">
              <FaApple size={"25px"} className="google-icon" />
              GET IT ON App Store
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
