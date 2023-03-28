import { react } from "react";
import Navbar from "./Navbar";
import gal from "../assests/ori.jpg";
import { motion, useAnimation } from "framer-motion";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
const Hero = () => {
  const imgAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = window.innerWidth / 2 - clientX;
    const moveY = window.innerHeight / 2 - clientY;
    const offsetFactor = 20;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor
    });
  };
  return (
    <>
      <div>
        <Navbar />

        <div
          className="width-100%  z-3
          overflow-hidden
           object-cover
      "
        >
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto"
            }}
            globalFactorX={0.2}
            globalFactorY={0.2}
            resetOnLeave
          >
            <MouseParallaxChild factorX={0.25} factorY={0.25}>
              <motion.img
                className="  z-3"
                // animate={imgAnimation}
                // transition={{
                //   type: "spring",
                //   stiffness: 30
                // }}
                // onMouseMove={(e) => handleMouseMove(e)}
                src={gal}
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: -100, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className=" absolute top-[350px] left-[280px] text-left  my-10 "
        >
          <h1 className=" text-6xl text-white font-extrabold">
            {" "}
            Art + Design + Technology
          </h1>
          <h4 className="text-[18px] text-white mt-3">
            We blend your stories with future tech, to create engaging and
            immersive
            <br /> experiences.
          </h4>

          <motion.button
            className="mt-5 bg-[transparent] px-3 py-1 height-[70px] width-[130px] text-white text-[28px] rounded-[0px] outline outline-offset-0 outline-1"
            whileHover={{
              transition: { ease: "easeOut", duration: 2 },
              backgroundColor: "white",
              color: "black"
            }}
            // initial={{ x: 200, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ delay: 1.6, type: "spring", stiffness: 30 }}
          >
            Our Services
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
