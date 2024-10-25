import React, { useState } from "react";
import { Timeline } from "../../components/ui/timeline";
import EducationIcon from '../../assets/Education/Eductaion.jpg';

export function TimelineDemo() {
  // State to manage visibility of extra timeline items
  const [showMore, setShowMore] = useState(false);

  // Initial data (visible by default)
  const initialData = [
    {
      title: "2014 Present ",
      content: (
        <div className="">
          <p className="mb-8 text-xs font-normal text-white md:text-2xl">
            IDM E-Kids Explore Kids L05 Successfully Completed
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
          </div>
        </div>
      ),
    },
    {
      title: "2017 Present ",
      content: (
        <div className="">
          <p className="mb-8 text-xs font-normal text-white md:text-2xl">
          G.C.E. Ordinary Level (2017) Vidyaloka College, Galle
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
          </div>
        </div>
      ),
    }
  ];

  // Additional data (hidden by default, shown when "Show More" is clicked)
  const additionalData = [
    {
      title: "2017 Present ",
      content: (
        <div className="">
          <p className="mb-8 text-xs font-normal text-white md:text-2xl">
            G.C.E. Ordinary Level (2017) Vidyaloka College, Galle
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
          </div>
        </div>
      ),
    },
    // Repeat the rest of your hidden items similarly...
    {
      title: "2020 Present ",
      content: (
        <div className="">
          <p className="mb-8 text-xs font-normal text-white md:text-2xl">
          Diploma in Information Technology (DITEC) (2021) Successfully Completed ESOFT Metro Campus
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-normal text-white md:text-xl">
              ✅ Card grid component
            </div>
            {/* More items */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
            <img
              src={EducationIcon}
              alt="Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-[#08D665]" />
          </div>
        </div>
      ),
    },
  ];

  // Merge initial data and additional data based on `showMore` state
  const data = showMore ? [...initialData, ...additionalData] : initialData;

  return (
    <div className="w-full">
      <Timeline data={data} />
      <div className="mt-4 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-white bg-[#08D665] px-4 py-2 rounded-md"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
