"use client";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import bell from "../../../img/bell 1.png";
import burger from "../../../img/hamburgermenu.png";
import office from "../../../img/office 1.png";
import checkbox from "../../../img/checkbox (1) 1.png";
import search from "../../../img/search 2.png";
import video from "../../../img/Video Lesson 2 2.png";
import usa from "../../../img/united-states 1.png";
import profile from "../../../img/profilePicture.png";
import arrow from "../../../img/arrow.png";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar/Sidebar";


const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const makeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-[#15132B] px-10 py-4">
        <Image className="md:hidden" src={burger} alt="burger" width={46} height={46} onClick={makeVisible} />
        <div className="relative w-72 md:w-72 lg:w-[490px]">
          <input
            style={{ borderRadius: "58px", paddingLeft: "60px" }}
            className="bg-[#211A75] w-full h-[58px] p-4 text-[#AAAAAA] pl-12"
            type="text"
            placeholder="Search Here"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
            <Image src={search} alt="search" width={28} height={28} />
          </div>
        </div>
        <div className="md:block hidden">
          <h2 className="text-[#6418C3] border-b-2 border-b-[#6418C3]">
            OTHER MENUS
          </h2>
        </div>
        <div className="flex justify-center items-center gap-10">
          <Image
            className="hidden md:block"
            src={bell}
            alt="bellIcon"
            width={28}
            height={28}
          />
          <Image
            className="hidden md:block"
            src={video}
            alt="bellIcon"
            width={28}
            height={28}
          />
          <Image
            className="hidden md:block"
            src={checkbox}
            alt="bellIcon"
            width={28}
            height={28}
          />
          <Image
            className="hidden md:block"
            src={office}
            alt="bellIcon"
            width={28}
            height={28}
          />
        </div>
        <div className="flex justify-center items-center gap-3 md:bg-[#211A75] rounded-full p-4">
          <Image
            className="hidden md:block"
            src={usa}
            alt="usa"
            width={28}
            height={28}
          />
          <h2 className="text-white hidden md:block">ENGLISH</h2>
          <Image
            className="hidden md:block"
            src={arrow}
            alt="profile"
            width={15}
            height={8}
          />
        </div>
        <div className="text-white flex justify-center items-center gap-4">
          <Image
            className="md:block hidden"
            src={profile}
            alt="profile"
            width={57}
            height={57}
          />
          <div className="md:block hidden">
            <h2>Instructor Day</h2>
            <h2>Super Admin</h2>
          </div>
          <Image
            className="hidden md:block"
            src={arrow}
            alt="profile"
            width={15}
            height={8}
          />
        </div>
      </div>
      <div className="md:hidden">
        {visible && <Sidebar visible={visible} />}
      </div>
    </div>
  );
};

export default Navbar;
