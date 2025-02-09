import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.facebook.com/">
          <FacebookIcon />
        </Link>
        <Link to="https://www.instagram.com/">
          <InstagramIcon />
        </Link>
        <Link to="https://twitter.com/">
          <TwitterIcon />
        </Link>
      </div>
      <p>All rights reserved | BurgerEat</p>
    </div>
  );
}
