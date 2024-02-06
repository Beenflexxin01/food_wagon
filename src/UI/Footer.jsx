import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import cta from "../Images/footer_cta.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="cta">
        <img src={cta} alt="Footer cta" />
        <div className="c_t">
          <p className="f_t">Are you ready to order with the best deals?</p>

          <button className="btn-order cta-btn">PROCEED TO ORDER</button>
        </div>
      </div>

      <div className="footer">
        <h4 className="tertiary-header h4">Our top cities</h4>
        <ul className="u_l">
          <div className="f-grid">
            <li className="l_i">San Francisco</li>
            <li className="l_i">Miami</li>
            <li className="l_i">San Diego</li>
            <li className="l_i">East Bay</li>
            <li className="l_i">Long Beach</li>
          </div>
          <div className="f-grid">
            <li className="l_i">Los Angeles</li>
            <li className="l_i">Washington DC</li>
            <li className="l_i">Seattle</li>
            <li className="l_i">Portland</li>
            <li className="l_i">Nashville</li>
          </div>
          <div className="f-grid">
            <li className="l_i">New York City</li>
            <li className="l_i">Orange County</li>
            <li className="l_i">Atlanta</li>
            <li className="l_i">Cahrlotte</li>
            <li className="l_i">Denver</li>
          </div>
          <div className="f-grid">
            <li className="l_i">Chicago</li>
            <li className="l_i">Phoneix</li>
            <li className="l_i">Las Vegas</li>
            <li className="l_i">Sacramento</li>
            <li className="l_i">Oklahoma City</li>
          </div>
          <div className="f-grid">
            <li className="l_i">Columbus</li>
            <li className="l_i">New Mexico</li>
            <li className="l_i">Albuquerque</li>
            <li className="l_i">Sacramento</li>
            <li className="l_i">New Orleans</li>
          </div>
        </ul>
        <hr />

        <ul className="u_l grid-4">
          <div className="f-grid legal">
            <p className="f-t">Company</p>
            <li className="l_i ">About us</li>
            <li className="l_i ">Team</li>
            <li className="l_i ">Careers</li>
            <li className="l_i ">Blog</li>
          </div>
          <div className="f-grid legal">
            <p className="f-t">Contact</p>
            <li className="l_i ">Help & Support</li>
            <li className="l_i ">Partner with us</li>
            <li className="l_i ">Ride with us</li>
          </div>
          <div className="f-grid legal">
            <p className="f-t">Legal</p>
            <li className="l_i ">Terms & Conditions</li>
            <li className="l_i ">Refund & Cancellation</li>
            <li className="l_i ">Privacy & Policy</li>
            <li className="l_i ">Cookie Policy</li>
          </div>

          <div>
            <p className="follow">FOLLOW US</p>
            <div className="icon-f">
              <FaInstagram size={"24px"} className="f_i" />
              <FaFacebook size={"24px"} className="f_i" />
              <FaTwitter size={"24px"} className="f_i" />
            </div>

            <p className="f-t f--t">Receive exclusive offers in your mailbox</p>

            <form action="" className="f_f">
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="f-i"
              />
              <button className="btn-login b_s">Subscribe</button>
            </form>
          </div>
        </ul>
        <hr />
        <div>
          <p className="a-r">
            All rights Reserved
            <Link to="https://nola-portfolio.netlify.app" className="link">
              {" "}
              &copy; Aortech
            </Link>
            , 2024
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
