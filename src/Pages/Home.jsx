import React from "react";
import Carousel from "../Components/Carousel";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Carousel />

      <section className="bg-[#A4CCD9]">
        {/* Heading Title */}
        <div className=" text-center ">
          <h1 className="text-5xl dosis font-bold pt-10">
            World's largest roommate finder
          </h1>
          <p className="mt-4 text-2xl bit">
            Free to list, search & communicate
          </p>
        </div>

        {/* Card Option */}
        <div className="flex justify-center gap-10 mt-6">
          <div className="card w-[400px] bg-white card-sm shadow-lg">
            <div className="card-body px-8">
              <h2 className="text-2xl font-semibold mb-3">Need a Roommate?</h2>

              <div className=" card-actions">
                <Link className="bg-[#1e94a6] px-8 py-2 rounded-2xl text-white text-[16px] flex items-center gap-4">
                  List Your Room <FaLongArrowAltRight></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-[400px] bg-white card-sm shadow-lg">
            <div className="card-body px-8">
              <h2 className="text-2xl font-semibold mb-3">Looking for a Place?</h2>

              <div className=" card-actions">
                <Link className="bg-[#ff9767] px-8 py-2 rounded-2xl text-white text-[16px] flex items-center gap-4">
                  Create Your Profile <FaLongArrowAltRight></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default Home;
