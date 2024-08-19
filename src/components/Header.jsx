import React, { useContext, useState } from "react";
import sun from ".././assets/icons/sun.svg";
import logo from ".././assets/logo.svg";
import ring from ".././assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import cartIcon from "../assets/shopping-cart.svg";
import { ThemeContext } from "../context";
import Cart from "./modals/Cart";

const Header = () => {
  const [isShowCart, setShowCart] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleShowCart = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  const handleClick = (e) => {
    e.preventDefault();
    theme === "night" ? setTheme("day") : setTheme("night");
  };

  return (
    <>
      {isShowCart && <Cart setShowCart={setShowCart} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleClick}
              >
                <img
                  src={theme === "night" ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                onClick={handleShowCart}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={cartIcon} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
