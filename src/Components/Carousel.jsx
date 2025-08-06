import React, { useEffect, useState } from "react";
import carousel1 from "../assets/Carousel - 1.jpg";
import carousel2 from "../assets/Carousel - 2.jpg";
import carousel3 from "../assets/Carousel - 3.jpg";
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3); // 3 slides total
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + 3) % 3);
  const next = () => setCurrent((prev) => (prev + 1) % 3);
  return (
    <div className="relative w-screen h-[400px] overflow-hidden bg-gray-300 text-black">
      {/* Slide 1 */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
          current === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <div className="flex items-center justify-around w-full px-10">
          <div>
            <h1 className="text-5xl font-bold rancho">
              Find the Perfect Roommate
            </h1>

            <p className="mt-4 text-lg raleway">
              Easily match with people who share your lifestyle and values.
            </p>
          </div>
          <div clssName="">
            <img src={carousel1} alt="" className="h-[360px] w-[550px] rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
          current === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <div className="flex items-center justify-around w-full px-10">
          <div>
            <h1 className="text-5xl font-bold rancho">
              Post or Search Rooms in Seconds
            </h1>

            <p className="mt-4 text-lg raleway">
              Whether you’re looking or offering – we’ve got you covered.
            </p>
          </div>
          <div clssName="">
            <img src={carousel2} alt="" className="h-[360px] rounded-2xl w-[550px]" />
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
          current === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <div className="flex items-center justify-around w-full px-10">
          <div>
            <h1 className="text-5xl font-bold rancho">
              Join Thousands Already Finding Roommates
            </h1>

            <p className="mt-4 text-lg raleway">
              Start your roommate search now — it's fast and free!


            </p>
          </div>
          <div clssName="">
            <img src={carousel3} alt="" className="h-[360px] rounded-2xl w-[550px]" />
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2 z-20">
        <button onClick={prev} className="btn btn-circle bg-white text-black">
          ❮
        </button>
        <button onClick={next} className="btn btn-circle bg-white text-black">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
