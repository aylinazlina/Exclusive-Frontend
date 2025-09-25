import React from "react";
import { NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const NavItem = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Contact",
    },
    {
      id: 3,
      name: "About",
    },
    {
      id: 4,
      name: "Sign Up",
    },
  ];
  return (
    <div>
      <div className="navbar bg-transparent py-5 border-2 border-b-gray-300">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="leftwrapper">
              <h2 className="font-inter font-bold text-[24px] leading-[24px] text-primary">
                Exclusive
              </h2>
            </div>

            {/*================== Nav Items =============== */}

            <div className="middleWrapper">
              <ul className="flex gap-13 items-center">
                {NavItem?.map((item) => (
                  <li
                    key={item.id}
                    className="font-poppins text-[17px] font-semibold navmenu"
                  >
                    <NavLink
                      to={`/${item.name}`}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "text-primary "
                          : isActive
                          ? " text-red-500"
                          : ""
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rightWrapper bg-trasparent  basis-1/4 flex justify-between items-center">
              <div className="searchBox flex items-center bg-card_bg rounded">
                <input
                type="text"
                className="px-3 py-3 text-[14px] "
                placeholder="What are you looking for?"
              />
              <FaSearch className="text-[15px] font-bold font-poppins" />
              </div>


              <FaRegHeart className="text-[17px] font-bold font-poppins" />

              <IoCartOutline className="text-[22px] font-bold poppins" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
