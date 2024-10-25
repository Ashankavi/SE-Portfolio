import React from "react";
import Graphic from '../../assets/Services/graphic1.png';
import UIUX from '../../assets/Services/uiux1.png';
import Web from '../../assets/Services/web.png';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <div
      className="flex flex-col flex-grow items-center justify-center gap-8 px-4 py-10  mx-auto bg-[#000000] lg:flex-row dark:bg-black">
      
      <Card title="GRAPHIC DESIGN" image={Graphic} name="GRAPHIC DESIGN" description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" services="Service 1">
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-[#064E3B]"
        />
      </Card>

      <Card title="UI/UX DESIGNING" image={UIUX} name="UI/UX DESIGN" description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut">
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-[#064E3B]"
        />
      </Card>

      <Card title="WEB DEVELOPMENT" image={Web} name="WEB DEVELOPMENT" description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut">
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-[#064E3B]"
        />
      </Card>
    </div>
  );
}

const Card = ({
    title,
    image,
    name, 
    description1,
    services,
    children
  }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-[#08D665] group/canvas-card flex items-center justify-center w-full mx-auto px-4 h-[30rem] relative bg-[#0B0D0E]">
        {/* Background hover effect with customized opacity */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundColor: 'rgba(6, 78, 59, 1)', // Keep background color or adjust as needed
              }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image and text, no hiding on hover */}
        <div className="relative z-20">
          <div
            className="flex flex-col items-center justify-center w-full mx-auto text-center transition duration-200">
            <img src={image} alt={title} className="w-20 h-20" />
            <h1 className="text-[#08D665] font-bold text-4xl my-8 uppercase">{name}</h1>
            <h1 className="text-[#ffffff] font-semibold text-l">{description1}</h1>
          </div>
        </div>
        
      </div>
    );
  };
