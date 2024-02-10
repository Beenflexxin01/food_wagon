import crispy from "../Images/crispy_sandwiches.png";
import chicken from "../Images/fried_chicken.png";
import pizza from "../Images/hot_pizza.png";

function Details() {
  return (
    <>
      <div className="details">
        <div className="d-d">
          <div className="d_d">
            <h3 className="d_h">
              Best deals <span className="d_s">Crispy Sandwiches</span>
            </h3>
            <p className=" d_t">
              Enjoy the large size of sandwiches. Complete perfect slice of
              sandwiches
            </p>
            <button className="d_b btn-login">PROCEED TO ORDER </button>
          </div>
          <img src={crispy} alt="Crispy Sandwich" className="d_i" />
        </div>

        <div className="d-d">
          <img src={chicken} alt="Crispy Sandwich" className="d_i d-i" />

          <div className="d_d d__d">
            <h3 className="d_h">
              Celebrate parties with <span className="d_s">Fried Chicken</span>
            </h3>
            <p className="d_t">
              Get the best fried chicken smeared with a lip smacking lemon chill
              flavor. Check out best dealsn for fried chicken.
            </p>
            <button className="d_b btn-login">PROCEED TO ORDER </button>
          </div>
        </div>

        <div className="d-d">
          <div className="d_d">
            <h3 className="d_h">
              Wanna eat hot & spicy <span className="d_s">Pizza?</span>
            </h3>
            <p className="d_t">
              Pair up with a friend and enjoy yhr hot and crispy pizza pops. Try
              it with the best deals.
            </p>
            <button className="d_b btn-login">PROCEED TO ORDER </button>
          </div>
          <img src={pizza} alt="Crispy Sandwich" className="d_i" />
        </div>
      </div>
    </>
  );
}

export default Details;
