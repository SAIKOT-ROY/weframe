import React from "react";
import btn from "../../../../img/btnback.png";
import friend from "../../../../img/add-friend 1.png";
import Image from "next/image";
import cmnt from "../../../../img/chat (1) 1.png";
import logo from "../../../../img/logo 1.png";
import icon from "../../../../img/vertIcon.png";

const Progress = () => {
  return (
    <div className="bg-[#15132B] shadow-lg p-7 flex md:flex-row flex-col md:justify-between md:items-center rounded-xl border border-[#15132B]">
      {/* Part one of banner */}
      <div className="flex md:flex-row flex-col justify-center items-start gap-4">
        <div>
          <Image src={btn} alt="btn" width={38} height={38} />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">School November Tasks</h1>
          <h3 className="text-xs text-[#A5A5A5] mb-4">
            Created by Instructor Day on November 31,2022
          </h3>
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex">
              <div className="bg-[#C4C4C4] rounded-full w-10 h-10"></div>
              <div className="bg-[#C4C4C4] rounded-full w-10 h-10"></div>
              <div className="bg-[#C4C4C4] rounded-full w-10 h-10"></div>
              <div className="bg-[#E328AF] rounded-full w-10 h-10 text-white font-bold flex justify-center items-center">
                5+
              </div>
            </div>
            <div className="bg-[#6418C3] w-[163px] gap-3 flex justify-center p-3 rounded-xl items-center">
              <Image src={friend} alt="friend" />
              <h1>Invite People</h1>
            </div>
            <div className="text-white border border-[#7879F1] w-[89px] text-center p-2 rounded-xl">
              Private
            </div>
            <div className="text-white bg-[#6418C3] rounded-xl p-2 w-[78px] text-center">
              Edit
            </div>
            <div className="flex justify-center items-center w-[167px] rounded-xl border p-3 gap-2 mb-7 md:mb-0 border-[#7879F1]">
              <Image src={cmnt} alt="comment" width={24} height={24} />
              <h1>45 Comments</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Part 2nd */}
      <div>
        <div className="flex flex-col md:flex-row  md:justify-center md:items-center gap-5 mb-14">
          <div className="text-left md:text-right">
            <h1>Centered Martial Arts</h1>
            <h1 className="text-[#A5A5A5] text-sm">Sunnyvale, Ca</h1>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white flex justify-center items-center">
            <Image width={44} height={44} src={logo} alt="logo" />
          </div>
          <div>
            <Image src={icon} width={24} height={24} alt="icon" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div>
            <h1>Total Progress 60%</h1>
          </div>
          <div className="bg-[#1E1C3A] md:w-64 h-3 rounded-xl shadow-md">
            <div className="bg-[#6418C3] rounded-lg md:w-[116px] h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
