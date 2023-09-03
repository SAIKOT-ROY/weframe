"use client";

import Image from "next/image";
import dash from "../../../img/dashboard 1.png";
import email from "../../../img/email 1.png";
import chat from "../../../img/comment 1.png";
import Kanban from "../../../img/thumbnail 1.png";
import Contact from "../../../img/contact 1.png";
import Calendar from "../../../img/calendar-silhouette 1.png";
import courses from "../../../img/Video Lesson 2 1.png";
import shop from "../../../img/online-shopping 1.png";
import Invoices from "../../../img/invoice 1.png";
import settings from "../../../img/setting 1.png";
import mask from "../../../img/Mask Group.png";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ visible }) => {
  return (
    <div
      style={{
        backgroundColor: "#15132B",
        fontSize: "16px",
        fontWeight: "bold",
      }}
      className="md:w-[345px] w-1/2 min-h-screen flex flex-col absolute md:static z-10"
    >
      {!visible && (
        <div className="flex items-center gap-4 mt-6 mb-14 justify-center">
          <h2 className="text-white md:block hidden">weframetech</h2>
          <IconButton
            className="text-[#7879F1]"
            sx={{ p: "10px" }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </div>
      )}
      <h1 style={{ color: "rgba(199, 199, 199, 1)" }} className="ml-10 mt-6 md:mt-0 mb-6 md:mb-9">
        Main Menu
      </h1>
      <div className="text-[#7879F1] flex flex-col justify-center ml-10 gap-6 mb-16">
        <h2 className="flex gap-4">
          <Image src={dash} width={28} height={28} alt="default" />
          <span>Dashboard</span>
        </h2>
        <h2 className="flex gap-4">        
          <Image src={email} width={28} height={28} alt="default" />{" "}
          <span>Email</span>
        </h2>
        <h2 className="flex gap-4">
      
          <Image src={chat} width={28} height={28} alt="default" />{" "}
          <span>Chat</span>
        </h2>
        <h2 className="flex gap-4">
    
          <Image src={Kanban} width={28} height={28} alt="default" />{" "}
          <span>Kanban</span>
        </h2>
        <h2 className="flex gap-4">
        
          <Image src={Contact} width={28} height={28} alt="default" />{" "}
          <span>Contact</span>
        </h2>
        <h2 className="flex gap-4">
     
          <Image src={Calendar} width={28} height={28} alt="default" />{" "}
          <span>Calender</span>
        </h2>
        <h2 className="flex gap-4">
      
          <Image src={courses} width={28} height={28} alt="default" />{" "}
          <span>Courses</span>
        </h2>
        <h2 className="flex gap-4">

          <Image src={shop} width={28} height={28} alt="default" />{" "}
          <span>Shop</span>
        </h2>
        <h2 className="flex gap-4">
          <Image src={Invoices} width={28} height={28} alt="default" />{" "}
          <span>Invoices</span>
        </h2>
        <h2 className="flex gap-4">
          <Image src={settings} width={28} height={28} alt="default" />{" "}
          <span>Settings</span>
        </h2>
      </div>
      {!visible && (
        <div className="ml-10">
          <Image src={mask} alt="Mask" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
