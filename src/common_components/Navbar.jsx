import React from "react";
import { NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";



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

            <div className="rightWrapper bg-trasparent  basis-1/4 flex justify-between items-center relative">
              <div className="searchBox flex items-center bg-card_bg rounded">
                <input
                  type="text"
                  className="px-3 py-3 text-[14px] "
                  placeholder="What are you looking for?"
                />
                <FaSearch className="text-[15px] font-bold font-poppins" />
              </div>

              <FaRegHeart className="text-[17px] font-bold font-poppins" />

              <span className="cart ">
                <IoCartOutline className="text-[24px] font-bold font-poppins" />
              </span>

              <span>
                <FaUser className="text-[18px] font-bold font-poppins" />
              </span>
               
              <div>
                <div className="userDropDownMenu absolute bg-blue-500 right-[5%] top-[100%] mt-2 px-4 py-4 rounded">
                  <ul>
                    <div className="flex gap-2 items-center mt-2 mb-1">
                      <span>
                        <FaUser className="font-poppins font-normal text-[16px] leading-[21px] text-white" />
                      </span>
                      <h2 className="font-poppins font-normal text-[16px] leading-[21px] text-white">Manage My Account</h2>
                    </div>
                    <div className="flex gap-2 items-center mt-2 mb-1">
                      <span >
                        <LuShoppingBag className="font-poppins font-normal text-[16px] leading-[21px] text-white" />
                      </span>
                      <h2 className="font-poppins font-normal text-[16px] leading-[21px] text-white">My Order</h2>
                    </div>
                    <div className="flex gap-2 items-center mt-2 mb-1">
                      <span>
                        <GiCancel className="font-poppins font-normal text-[16px] leading-[21px] text-white" />
                      </span>
                      <h2 className="font-poppins font-normal text-[16px] leading-[21px] text-white">My Cancellations</h2>
                    </div>
                    <div className="flex gap-2 items-center mt-2 mb-1">
                      <span>
                        <FaRegStar className="font-poppins font-normal text-[16px] leading-[21px] text-white"/>
                      </span>
                      <h2 className="font-poppins font-normal text-[16px] leading-[21px] text-white">My Reviews</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span>
                        <TbLogout2 className="font-poppins font-normal text-[16px] leading-[21px] text-white"/>
                      </span>
                      <h2 className="font-poppins font-normal text-[16px] leading-[21px] text-white">Logout</h2>
                    </div>
                  </ul>
                </div>
              </div>

              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
