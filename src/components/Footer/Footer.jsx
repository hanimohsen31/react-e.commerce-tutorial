import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import './Footer.scss'

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-fluid">
      <div className="left">
        <h3>HAILO.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
          voluptates dolores officiis necessitatibus. Numquam neque voluptatum
          necessitatibus, velit ipsum perspiciatis exercitationem maiores,
          dolorum a dignissimos blanditiis ducimus iure rem!
        </p>
        <div className="icons">
          <span className="fb">
            <FacebookIcon />
          </span>
          <span className="ins">
            <InstagramIcon />
          </span>
          <span className="pin">
            <PinterestIcon />
          </span>
          <span className="tw">
            <TwitterIcon />
          </span>
        </div>
      </div>
      
      <div className="centerx">
        <h5>Useful Links</h5>
        <div className="links">
          <div className="left">
            <a href=".">Home</a>
            <a href=".">Man&nbsp;Fashion</a>
            <a href=".">Announcement</a>
            <a href=".">Accessories</a>
          </div>
          <div className="right">
            <a href=".">Cart</a>
            <a href=".">Woman&nbsp;Fashion</a>
            <a href=".">Account</a>
            <a href=".">Wishlist</a>
          </div>
        </div>
      </div>

      <div className="right">
        <h5>Contacts.</h5>
        <p>
          <span>
            <LocationOnIcon />
          </span>
          14 Khaled Ebn El-Waleed , Egypt
        </p>
        <p>
          <span>
            <CallIcon />
          </span>
          +201116886029
        </p>
        <p>
          <span>
            <MailOutlineIcon />
          </span>
          Hanimohsen3810@yahoo.com
        </p>
        <div className="icons">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    </div>
  );
};
