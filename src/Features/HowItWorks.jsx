import location from "../Images/location.png";
import order from "../Images/order.png";
import advance from "../Images/advance.png";
import meals from "../Images/meals.png";

function HowItWorks() {
  return (
    <>
      <div className="container section-how">
        <h2 className="secondary-header">How does it work</h2>
        <div className="work-features">
          <div className="work_image">
            <img src={location} alt="Select Location" className="work_img" />
            <div className="layout">
              <h4 className="tertiary-header">Select location</h4>
              <p className="text">
                Choose the location where your food will be delivered.
              </p>
            </div>
          </div>
          <div className="work_image">
            <img src={order} alt="Select Location" className="work_img" />
            <div className="layout">
              <h4 className="tertiary-header">Choose order</h4>
              <p className="text">
                Check over hundreds of menus to pick your favorite food.
              </p>
            </div>
          </div>
          <div className="work_image">
            <img src={advance} alt="Select Location" className="work_img" />
            <div className="layout">
              <h4 className="tertiary-header">Pay advanced</h4>
              <p className="text">
                It's quick, safe, and simple. Select several methods of payment.
              </p>
            </div>
          </div>
          <div className="work_image">
            <img src={meals} alt="Select Location" className="work_img" />
            <div className="layout">
              <h4 className="tertiary-header">Enjoy meals</h4>
              <p className="text">
                Food is made and delivered directly to your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
