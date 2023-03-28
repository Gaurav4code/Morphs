import { react } from "react";
import { MenuItems } from "../compoenents/MenuItems";
import { Component } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

class Navbar extends Component {
  render() {
    return (
      <>
        <motion.nav
          class="   z-40
                    font-[700]
                   
                     w-full h-10 flex flex-row
                    justify-evenly
                    absolute
                    my-10
                 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h1 className=" text-white  text-4xl font-extrabold ">LOGO</h1>
          <ul className=" text-white my-2 flex  flex-row  ">
            {MenuItems.map((item, index) => {
              return (
                <li className=" font-[650] mr-[50px]" key={index}>
                  <a className={item.cName} to={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </>
    );
  }
}

export default Navbar;
