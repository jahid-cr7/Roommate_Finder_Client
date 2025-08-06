import React from "react";
import { FaBed, FaCat, FaChild, FaDog, FaParking } from "react-icons/fa";
import { FaComputer, FaLocationDot, FaPerson } from "react-icons/fa6";
import { MdAccessible, MdOutlineSmokeFree } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiChatPrivateFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
const handleFindRoom = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    const findRoomData = Object.fromEntries(formdata.entries());
    console.log(findRoomData);
   fetch('http://localhost:8800/find', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(findRoomData)
   }).then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success('Room Wanted Profile Created Successfully');
            form.reset();
        }else{
            toast.error('Failed to create profile, please try again');
        }
    })
}


const FindRoom = () => {
  return (
    <div className=" bg-gradient-to-t from-[#A4CCD9] to-[#C4E1E6] pt-10">
      <section className="max-w-lg mx-auto  py-6 px-20 bg-white rounded-lg shadow-md">
        <div>
          <h1 className="text-2xl font-bold ">Looking for a room?</h1>
          <p>Create your room wanted profile</p>
        </div>
        {/* Property address*/}
        <form onSubmit={handleFindRoom}>
          <div className="mt-6 space-y-2">
            <h1 className="text-md font-bold">Where are you looking</h1>
            
            <label className="input validator">
              <FaLocationDot />
              <input
                type="text"
                name="address"
                placeholder="Input your address"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          {/* Room Details */}
          <div className="mt-4 space-y-2">
            <h1 className="text-md font-bold">About You</h1>
            <p className="font-semibold">I'm Looking for.....</p>
            <select
              defaultValue="Pick a color"
              name="Roomtype"
              className="select bg-[#fdfdfb]"
            >
              <option disabled={false}>For Myself</option>
              <option>As a Couple</option>
              <option>As a group of friends</option>
              
            </select>
          </div>

          {/* Rent Details */}
          <div className="mt-4 space-y-2">
            <h1 className="text-md font-bold">Budget</h1>
            <div className="">
              <label className="input validator">
                <input
                  type="number"
                  placeholder="Enter your Rent amount"
                  required
                  name="rent"
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid rent amount
              </div>
            </div>
          </div>

          {/* Gender Specification */}
          <div className="mt-4 space-y-2">
           
            <p>Gender</p>
            <select
              defaultValue="Gender Prefered"
              name="Roomtype"
              className="select bg-[#fdfdfb]"
            >
              <option disabled={false}>Select....</option>
              <option>Male</option>
              <option>Female</option>
              <option>Couple</option>
              <option>Others</option>
            </select>
          </div>
          

          <h1 className="text-md font-bold mt-4">Age</h1>
            
            <label className="input validator mt-2">
              
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                required
              />
            </label>
          <h1 className="text-md font-bold mt-4">Occupation(s)</h1>
            
            <label className="input validator mt-2">
              
              <input
                type="text"
                name="Occupation"
                placeholder="Occupation(s) (e.g. Student, Professional)"
                required
              />
            </label>
      
          {/* Available From */}
          <div className="mt-4 space-y-2">
            <h1 className="text-md font-bold">Preffered move date</h1>
            <input type="date" name="date" className="input" />
          </div>


          {/* Bathroom Type */}
          <div className="mt-4 space-y-2">
            <h1 className="text-md font-bold"></h1>
            <p>Children</p>
            <select
              defaultValue="Bathroomtype"
              name="Roomtype"
              className="select bg-[#fdfdfb]"
            >
              <option disabled={false}>Select....</option>
              <option>No Child</option>
              <option>One Child</option>
              <option>Two Children</option>
              <option>Three Children</option>
            </select>
          </div>
          {/* others Facilities */}
          {/* Parking */}
          <div className="flex items-center mt-4 space-x-2">
            <input type="checkbox" name="smoker" id="checkbox-smoker" />
            <p className="flex items-center gap-2">
              <MdOutlineSmokeFree className="ml-3 " /> Non-Smoker
            </p>
          </div>
          {/* Internet Included */}
          <div className="flex items-center mt-4 space-x-2">
            <input type="checkbox" name="cat" id="checkbox-cat" />
            <p className="flex items-center gap-2">
              <FaCat className="ml-3" /> I have Cat
            </p>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <input type="checkbox" name="dog" id="checkbox-dog" />
            <p className="flex items-center gap-2">
              <FaDog className="ml-3" /> I have Dog
            </p>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <input type="checkbox" name="student" id="checkbox-student" />
            <p className="flex items-center gap-2">
              <PiStudent className="ml-3" /> I'm a Student
            </p>
          </div>
         

          {/* Registration Form */}
          
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-4"
            >
              Submit
            </button>

          <ToastContainer />
        </form>
      </section>
    </div>
  );
};

export default FindRoom;
