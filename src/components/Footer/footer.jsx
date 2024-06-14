import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <ul className="footer-social-imgs">
          <li>
            <ImFacebook2 size={20} />
          </li>
          <li>
            <IoLogoInstagram size={24} />
          </li>
          <li>
            <IoLogoTwitter size={23} />
          </li>
          <li>
            <IoLogoYoutube size={22} />
          </li>
        </ul>
        <ul className="footer-links-list">
          <li className="footer-link">Privacy</li>
          <li className="footer-link">Hurry</li>
          <li className="footer-link">Contact us</li>
          <li className="footer-link">Gift Cards</li>
          <li className="footer-link">Help center</li>
          <li className="footer-link">Recruitment</li>
          <li className="footer-link">Legal notice</li>
          <li className="footer-link">Audio subtitles</li>
          <li className="footer-link">Terms of use</li>
          <li className="footer-link">Audio description</li>
          <li className="footer-link">Cookie preferences</li>
          <li className="footer-link">Investors relations</li>
        </ul>
        <div className="footer-code">
          <button>Code de service</button>
        </div>
        <p>© 1997-2022 Netflix, Inc.</p>
      </div>
    </div>
  
  );
};
export default Footer;
