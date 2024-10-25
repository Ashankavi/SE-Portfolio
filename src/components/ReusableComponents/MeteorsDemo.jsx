import React from "react";
import { Meteors } from "../ui/meteors";
import MyCV from '../../assets/About/CV.pdf';

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="relative flex flex-col flex-grow">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(to right, #1e3a8a, #2dd4bf)", // blue-800 to teal-400
            transform: "scale(0.80)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="relative shadow-xl"
          style={{
            backgroundColor: "#0B0D0E", // gray-900
            border: "1px solid #22CD6F", // gray-800
            padding: "2rem 1rem",
            height: "100%",
            overflow: "hidden",
            borderRadius: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <h1 className="text-5xl justify-center font-bold font-sans text-[#22CD6F] uppercase text-center ">
            About ME
          </h1>

          <p className="p-2 mt-8 text-white font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="p-2 my-4 text-white font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Button to preview CV */}
          <button
            className="bg-[#08D665] text-white uppercase text-lg font-bold px-6 py-3 ml-2 mt-4 rounded-[6px] flex items-start"
            onClick={() => window.open(MyCV, '_blank')}
          >
            Download CV
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
