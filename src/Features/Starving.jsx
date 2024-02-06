import { useState } from "react";
import Noodles from "../Images/Noodles.png";
import g15 from "../Images/greys_Vage_15.png";
import g10 from "../Images/greys_Vage_10.png";
import g25 from "../Images/greys_Vage_25.png";
import g20 from "../Images/greys_Vage_20.png";
import { HiMapPin, HiRocketLaunch, HiShoppingBag } from "react-icons/hi2";
const greyProducts = [
  {
    id: 1,
    name: "Greys Vage",
    days: "6 Days Remaining",
    image: g15,
    discount: "15% off",
  },
  {
    id: 2,
    name: "Greys Vage",
    days: "6 Days Remaining",
    image: g10,
    discount: "10% off",
  },
  {
    id: 3,
    name: "Greys Vage",
    days: "7 Days Remaining",
    image: g25,
    discount: "25% off",
  },
  {
    id: 4,
    name: "Greys Vage",
    days: "8 Days Remaining",
    image: g20,
    discount: "20% off",
  },
];
function Starving() {
  const [greProducts] = useState(greyProducts);
  return (
    <>
      <div className="container starv-bg">
        <div className="grid-2">
          <div className="grid-2-cols">
            <h1 className="primary-header">Are you starving?</h1>
            <p className="text-description">
              Within a few clicks, find meals that are accessible near you
            </p>
            <div className="address">
              <div className="pickup">
                <button className="btn-delivery">
                  <HiRocketLaunch />
                  Delivery
                </button>
                <button className="btn-delivery btn-pickup">
                  <HiShoppingBag />
                  Pickup
                </button>
              </div>
              <form action="" className="form">
                <div className="text-field-btn">
                  <HiMapPin size={"25px"} className="map-pin" />
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    required
                    className="input"
                  />
                  <button className="find_food">Find Food</button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid-2-cols">
            <img src={Noodles} alt="" className="img-grid" />
          </div>
        </div>
      </div>
      <div className="greys">
        {greyProducts &&
          greProducts.map((products) => (
            <>
              <div className="grey">
                <img
                  src={products.image}
                  alt={products.name}
                  className="grey-img"
                />
                <p className=" text-discount grey-discount">{products.discount}</p>
                <p className="text-grey">{products.name}</p>
                <div className="grey-box">
                  <p className="text-days">{products.days}</p>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Starving;
