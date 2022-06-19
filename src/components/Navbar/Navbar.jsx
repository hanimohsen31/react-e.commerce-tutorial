import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import "./Navbar.scss";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Navbar = () => {
  // to get data from store
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push({ pathname: "/overview" });
  };

  return (
    <div className="Navbar">
      <div className="navBarContainer">
        <div className="wrapper">
          <div className="left">
            <span className="lang">EN</span>
            <div className="user">
              <span> <Link to='/'> HOME</Link> </span>
              <span> <Link to='/products'> PRODUCTS </Link> </span>
            </div>
            {/* <div className="search">
              <span>
                <SearchIcon />
              </span>
              <input
                type="text"
                name="searchNavbar"
                id="searchNavbar"
                placeholder="Search"
              />
            </div> */}
          </div>
          <div className="center">
            <div className="logo">
              <h1>
                <Link to="/">HAILO</Link>
              </h1>
            </div>
          </div>
          <div className="right">
            <div className="user">
              {/* <span> <Link to='/'> HOME</Link> </span>
              <span> <Link to='/products'> PRODUCTS </Link> </span> */}
            </div>
            <div className="icon">
              <IconButton
                aria-label="cart"
                style={{ color: "white" }}
                onClick={handleClick}
              >
                <StyledBadge badgeContent={cartQuantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </StyledBadge>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
