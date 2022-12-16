import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs"

function Navbar() {
  const [showSideBar, setShowSideBar] = useState(true);
  const smTextStyle = "pb-1";
  return (
    <div>
      <div className="w-full flex justify-between bg-blue-600">
        <Link href="/">
          <div className="w-[60px] py-3 ml-5 text-white font-semibold text-3xl">
            <i>Shop
            </i>
          </div>
        </Link>

        <div className="flex">

        <div className="rounded mt-4 mb-4 bg-white flex md:w-50 lg:w-200 max-sm:hidden max-md:hidden">
          <input
            placeholder="Search for products,brands and more"
            className="text-black py-2 px-3 outline-none"
            ></input>
          <button className="py-3 px-3 font-bold text-lg text-blue-600">
            <BiSearch />
          </button>
        </div>

        <div className=" ml-10 rounded mt-4 mb-4 bg-white  max-md:hidden ">
          <button className="w-[100px] text-blue-600  py-2 px-2 text-semibold">
            <Link href="/app/Login">Login </Link>
          </button>
        </div>
            </div>


        <div className="flex justify-between py-6 max-sm:hidden tracking-normal text-white font-medium cursor-pointer">
        <h6 className="mr-10 ">Become a Seller</h6>
          <h6 className="mr-10 flex"><span className=" mr-2 text-lg"><BsFillCartFill/>
            </span>Cart</h6>
        </div>
        <div
          className="flex justify-between py-8 px-8 sm:hidden"
          onClick={() => {
            setShowSideBar((prev) => !prev);
          }}
        >
          {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
        </div>
      </div>
      {showSideBar && (
        <div className="w-full sm:hidden py-4 pl-5 tracking-normal text-slate-500 font-medium cursor-pointers">
          <h6 className={smTextStyle}>Home</h6>
          <h6 className={smTextStyle}>Pricing</h6>
          <h6 className={smTextStyle}>Booking</h6>
          <h6 className={smTextStyle}>Contact</h6>
        </div>
      )}
    </div>
  );
}

export default Navbar;
