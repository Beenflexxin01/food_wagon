import { useState } from "react";
import g15 from "../Images/greys_Vage_15.png";
import g10 from "../Images/greys_Vage_10.png";
import g25 from "../Images/greys_Vage_25.png";
import g20 from "../Images/greys_Vage_20.png";
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

function FlashDeals() {
  const [greProducts] = useState(greyProducts);
  return (
    <>
      <div className="greys g_w">
        {greyProducts &&
          greProducts.map((products) => (
            <>
              <div className="grey">
                <img
                  src={products.image}
                  alt={products.name}
                  className="grey-img"
                />
                <p className=" text-discount grey-discount">
                  {products.discount}
                </p>
                <div className="g_t">
                  <p className="text-grey">{products.name}</p>
                  <div className="grey-box">
                    <p className="text-days">{products.days}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default FlashDeals;
