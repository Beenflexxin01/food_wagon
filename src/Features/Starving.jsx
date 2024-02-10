import Noodles from "../Images/Noodles.png";

import { HiMapPin, HiRocketLaunch, HiShoppingBag } from "react-icons/hi2";

function Starving() {
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
    </>
  );
}

export default Starving;
