import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotation: 70,
      duration: 2,
      ease: "power4.inOut",
      svgOrigin: "400 300",   // Center of viewBox: 800/2 = 400, 600/2 = 300
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      svgOrigin: "400 300",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;
    // Your post-mask animations here...
  }, [showContent]);

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.8,
      x: "0%",
      bottom: "-45%",
      rotate: 4,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.set(".text", {
    scale: 0.5,
    rotate: -10,
    opacity: 0,
  });

  gsap.to(".text", {
    scale: 1,
    rotate: 0,
    opacity: 1,
    duration: 2,
    delay: "-.8",
    ease: "Expo.easeInOut",
  });


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".character", {
        x: -xMove*0.7,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (

    <>
      <div className="svg fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

    {showContent && (<div className="main w-full">
        <div className="landing w-full h-screen bg-black">
          {/* Navbar */}
          <div className="navbar w-full py-5 px-10 absolute top-0 left-0 z-10">
            <div className="logo flex gap-7">
              <div className="lines flex flex-col gap-[5px]">
                <div className="line w-16 h-[7px] bg-white"></div>
                <div className="line w-11 h-[7px] bg-white"></div>
                <div className="line w-8 h-[7px] bg-white"></div>
              </div>
              <h3 className="text-3xl mt-[-9px] leading-none">Rockstar</h3>
            </div>

          {/* grl and bg images */}
          </div>
          <div className="imagesdiv relative w-full h-screen overflow-hidden">
            <img className="w-full absolute sky top-0 left-0 h-full object-cover" src="./sky.png" alt="" />
            <img className="w-full absolute bg top-0 left-0 h-full object-cover" src="./bg.png" alt="" />

            <div className="absolute top-5 left-[36%] flex flex-col gap-1">
              <h1 className=" text text-9xl">Grand</h1>
              <h1 className=" text text-9xl ml-30">Theft</h1>
              <h1 className=" text text-9xl ">Auto</h1>
            </div>

            <img className="absolute bottom-[-50%] character left-[25%] scale-[0.3]" src="./girlbg.png" alt="" />
          </div>

          {/* bottom bar */}
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-5 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 "
                src="./ps5.png"
                alt=""
              />
            </div>

            <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="center flex w-full overflow-hidden">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>

          <div className="w-full py-10">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-10 font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-7 mt-10 py-7 text-black text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      )}
    </>
  );
}

export default App;
