import React, { use } from "react";
import { CiParking1 } from "react-icons/ci";
import { FaBed, FaCat, FaChild, FaDog, FaParking } from "react-icons/fa";
import { FaComputer, FaLocationDot, FaPerson } from "react-icons/fa6";
import { MdAccessible } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiChatPrivateFill } from "react-icons/ri";
import { AuthContext } from "../ContextAPI/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
const SignUp = () => {
  const { CreateUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const fullformdata = Object.fromEntries(formData.entries());
    console.log(fullformdata);

    CreateUser(fullformdata.email, fullformdata.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch("http://localhost:8800/users", {
          method: "POST",
          headers: {
            "content-type" : "application/json",
          },
          body: JSON.stringify(fullformdata),
        }).then((res) => res.json())
          .then((data) => {
            toast.success("Registration Successful");
            form.reset();
          })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="max-w-lg mx-auto py-6 px-20  bg-white rounded-lg shadow-md">
      <div>
        <h1 className="text-2xl font-bold ">Got your spare room?</h1>
        <p>Advertise your room for free.</p>
      </div>
      {/* Property address*/}
      <form onSubmit={handleSubmit}>
        <div className="mt-6 space-y-2">
          <h1 className="text-md font-bold">Property Adress</h1>
          <label className="input validator">
            <FaLocationDot />
            <input
              type="text"
              name="address"
              placeholder="Input your address"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        {/* Room Details */}
        <div className="mt-4 space-y-2">
          <h1 className="text-md font-bold">Room Details</h1>
          <select
            defaultValue="Pick a color"
            name="Roomtype"
            className="select bg-[#fdfdfb]"
          >
            <option disabled={true}>Pick a Room</option>
            <option>Aparment</option>
            <option>Condo</option>
            <option>House</option>
            <option>Townhouse</option>
            <option>Basement</option>
            <option>Loft</option>
            <option>Studio</option>
            <option>Trailer</option>
          </select>
        </div>

        {/* Rent Details */}
        <div className="mt-4 space-y-2">
          <h1 className="text-md font-bold">Rent</h1>
          <div className="">
            <label className="input validator">
              <input
                type="number"
                placeholder="Enter your Rent amount"
                required
                name="rent"
              />
            </label>
            <div className="validator-hint hidden">Enter valid rent amount</div>
          </div>
        </div>

        {/* Security Deposit */}
        <div className="mt-4 space-y-2">
          <h1 className="text-md font-bold">Security Deposit</h1>
          <div className="">
            <label className="input validator">
              <input
                type="number"
                name="deposit"
                placeholder="Security Deposit"
                required
              />
            </label>
            <div className="validator-hint hidden"></div>
          </div>
        </div>
        {/* Available From */}
        <div className="mt-4 space-y-2">
          <h1 className="text-md font-bold">Available From</h1>
          <input type="date" name="date" className="input" />
        </div>

        {/* Gender Specification */}
        <div className="mt-4 space-y-2">
          <h1 className="text-md font-bold">Room Details</h1>
          <p>Prefered Gender</p>
          <select
            defaultValue="Gender Prefered"
            name="Roomtype"
            className="select bg-[#fdfdfb]"
          >
            <option disabled={false}>Anyone Welcome</option>
            <option>Male</option>
            <option>Female</option>
            <option>Couple</option>
            <option>Female or Male (No Couples)</option>
          </select>
        </div>

        {/* Bathroom Type */}
        <div className="mt-4 space-y-2">
          <h1 className="text-md font-bold"></h1>
          <p>Bathroom Type</p>
          <select
            defaultValue="Bathroomtype"
            name="Roomtype"
            className="select bg-[#fdfdfb]"
          >
            <option disabled={true}>Select....</option>
            <option>Shared Bathroom</option>
            <option>Own Bathroom</option>
            <option>Ensuite</option>
          </select>
        </div>
        {/* others Facilities */}
        {/* Parking */}
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="parking" id="checkbox-parking" />
          <p className="flex items-center gap-2">
            <FaParking className="ml-3 " /> Parking Available
          </p>
        </div>
        {/* Internet Included */}
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="Internet" id="checkbox-internet" />
          <p className="flex items-center gap-2">
            <FaComputer className="ml-3" /> Internet Included
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="private" id="checkbox-private" />
          <p className="flex items-center gap-2">
            <RiChatPrivateFill className="ml-3" /> Private Room
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="Furnished" id="checkbox-furnished" />
          <p className="flex items-center gap-2">
            <FaBed className="ml-3" /> Furnished
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="Accessible" id="checkbox-accessible" />
          <p className="flex items-center gap-2">
            <MdAccessible className="ml-3" /> Accessible Property
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="cat-Friendly" id="checkbox-cat" />
          <p className="flex items-center gap-2">
            <FaCat className="ml-3" /> Cat Friendly
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="dog-Friendly" id="checkbox-dog" />
          <p className="flex items-center gap-2">
            <FaDog className="ml-3" /> Dog Friendly
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="children-friendly" id="checkbox-children" />
          <p className="flex items-center gap-2">
            <FaChild className="ml-3" /> Children Friendly
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="student" id="checkbox-studnet" />
          <p className="flex items-center gap-2">
            <PiStudent className="ml-3" /> Studnet Welcome
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input type="checkbox" name="40yearsmore" id="checkbox-old" />
          <p className="flex items-center gap-2">
            <FaPerson className="ml-3" /> 40+ years Welcome
          </p>
        </div>

        {/* Registration Form */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-bold">Register</h2>
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              required
            />
          </div>
        <div>
            <label className="block mb-1 font-medium" htmlFor="password">
              Photo URL
            </label>
            <input
              type="text"
              id="photourl"
              name="photourl"
              className="input"
              placeholder="Enter your Photo URL"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
        <ToastContainer />
      </form>
    </section>
  );
};

export default SignUp;
