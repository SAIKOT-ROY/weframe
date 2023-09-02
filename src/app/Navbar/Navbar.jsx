"use client";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Image from "next/image";
import bell from "../../../img/bell 1.png";
import office from "../../../img/office 1.png";
import checkbox from "../../../img/checkbox (1) 1.png";
import video from "../../../img/Video Lesson 2 2.png";
import usa from "../../../img/united-states 1.png";
import profile from "../../../img/profilePicture.png";
import arrow from "../../../img/arrow.png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2>weframetech</h2>
      </div>
      <div>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>
      </div>
      <div>
        <Image src={bell} alt="bellIcon" width={28} height={28} />
        <Image src={video} alt="bellIcon" width={28} height={28} />
        <Image src={checkbox} alt="bellIcon" width={28} height={28} />
        <Image src={office} alt="bellIcon" width={28} height={28} />
      </div>
      <div>
        <Image src={usa} alt="usa" width={28} height={28} />
      </div>
      <div>
        <Image src={profile} alt="profile" width={57} height={57} />
        <h2>Instructor Day</h2>
        <h2>Super Admin</h2>
        <Image src={arrow} alt="profile" width={15} height={8} />
      </div>
    </div>
  );
};

export default Navbar;
