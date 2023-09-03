"use client";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import bell from "../../../img/bell 1.png";
import office from "../../../img/office 1.png";
import checkbox from "../../../img/checkbox (1) 1.png";
import video from "../../../img/Video Lesson 2 2.png";
import usa from "../../../img/united-states 1.png";
import profile from "../../../img/profilePicture.png";
import arrow from "../../../img/arrow.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#15132B] px-10 py-4">
      <IconButton
        className="text-[#7879F1] md:hidden"
        sx={{ p: "10px" }}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <div>
        <Paper
          component="form"
          className="bg-[#211A75] w-72 md:w-72 lg:w-[490px]"
          sx={{
            p: "2px 2px",
            display: "flex",
            alignItems: "center",
            height: 58,
            borderRadius: 46,
          }}
        >
          <IconButton
            className="text-[#7879F1]"
            type="button"
            sx={{ pl: "40px", width: 28, height: 28 }}
            aria-label="search"
          >
            <SearchIcon sx={{ width: 28, height: 28 }} />
          </IconButton>
          <InputBase
            className="text-[#AAAAAA]"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
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
        <Image src={profile} alt="profile" width={57} height={57} />
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
  );
};

export default Navbar;
