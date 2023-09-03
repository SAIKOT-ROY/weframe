import Image from "next/image";
import React from "react";
import plus from "../../../../img/btnAdd.png";
import plus1 from "../../../../img/btnAdd (1).png";
import dots from "../../../../img/vertIcon (1).png";
import people from "../../../../img/people (1).png";
import people1 from "../../../../img/people (2).png";
import people2 from "../../../../img/people.png";
import clock from "../../../../img/clock (1) 1.png";

const ContentCard = () => {
  return (
    <div className="grid justify-center md:grid-cols-4 p-6 md:items-start">
      <div>
        <div className="text-white">
        <h2 className="flex justify-center items-center gap-28">
            <span className="font-bold text-xl">To do list (24)</span>
            <Image src={plus} alt="plus" />
          </h2>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FFAB2D]"></div>
              <h1 className="text-sm text-yellow-500">Important</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
              Create sign up sheet for holiday student/parent conferences.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-16 h-[7px] rounded-lg bg-[#FFAB2D]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people2} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E328AF]"></div>
              <h1 className="text-sm text-[#E328AF]">Instructor Meeting</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Plan holiday demonstration program. Create outline.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-16 h-[7px] rounded-lg bg-[#E328AF]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#38E25D]"></div>
              <h1 className="text-sm text-[#38E25D]">Databse</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Determine how many boards need to be ordered for testing and demo.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-16 h-[7px] rounded-lg bg-[#38E25D]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people1} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white mb-4">
        <h2 className="flex justify-center items-center gap-28">
            <span className="font-bold text-xl">In Progress (2)</span>
            <Image src={plus1} alt="plus" />
          </h2>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#5ECFFF]"></div>
              <h1 className="text-sm text-[#5ECFFF]">Video</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Create sparring tutorial video for the weekly class.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[230px] h-[7px] rounded-lg bg-[#5ECFFF]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF4A55]"></div>
              <h1 className="text-sm text-[#FF4A55]">Bugs Fixing</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Payment gateway needs reauthorization.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[269px] h-[7px] rounded-lg bg-[#FF4A55]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people2} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white mb-4">
        <h2 className="flex justify-center items-center gap-28">
            <span className="font-bold text-xl">Done (3)</span>
            <Image src={plus1} alt="plus" />
          </h2>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF4A55]"></div>
              <h1 className="text-sm text-[#FF4A55]">BUGS FIXING</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Action Button needed for Google Maps visits.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[279px] h-[7px] rounded-lg bg-[#FF4A55]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people2} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#38E25D]"></div>
              <h1 className="text-sm text-[#38E25D]">Database</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Update new instructor photos.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[279px] h-[7px] rounded-lg bg-[#38E25D]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people2} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E328AF]"></div>
              <h1 className="text-sm text-[#E328AF]">Instructor Meeting</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Review/correct yellow belt techniques.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[279px] h-[7px] rounded-lg bg-[#E328AF]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people2} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white mb-4">
          <h2 className="flex justify-center items-center gap-28">
            <span className="font-bold text-xl">Revised (0)</span>
            <Image src={plus1} alt="plus" />
          </h2>
        </div>
        <div className="w-[339px] bg-[#211A75] h-[107px] flex justify-center items-center rounded-lg">
            <div className="bg-[#15132B] flex justify-center items-center rounded-lg border-dashed border-2 w-[299px] h-[67px]">
                <h1 className="text-[#7879F1]">-- Move card here --</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
