import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Register() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This delay ensures that the content will not be visible until the animation starts.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 250); // Small delay to ensure content doesn't flash

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);
  return (
    <div
      className={`animate-fadein ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div>
        <div className="py-[35px] flex justify-center gap-2 bg-[#f7f7f7] w-full text-center font-poppins font-[15px]">
          <div className="hover:scale-110 transition-all cursor-pointer text-gray-500">
            <span className="text-gray-500">
              <Link to="/"> HOME </Link>
            </span>
          </div>
          <span>/ Login-Register</span>
        </div>
        <div className="flex justify-center items-center font-poppins w-full tablet:py-[100px] py-[60px]">
          <div className="flex flex-col w-full tablet:h-[463px] laptopl:w-[1200px] laptop:w-[960px] tablet:w-[720px]">
            <div className="justify-center laptop:mx-[200px] laptopl:mx-[250px] px-3">
              <div className="flex w-full items-start justify-center mb-10 gap-4">
                <div className="text-[25px] font-bold hover:text-red-500 transition-colors duration-300">
                  <button>
                    <Link to="/login">Login</Link>
                  </button>
                </div>
                <div className="text-[25px] text-stone-500">|</div>
                <div className="text-red-600 text-[25px] font-bold">
                  Register
                </div>
              </div>

              <div className="shadow-lg tablet:p-20 py-10 px-[15px] flex justify-center items-center w-full">
                <form className="w-full flex flex-col items-center">
                  <input
                    type="text"
                    className="px-[15px] w-full font-poppins border-[#ebebeb] border text-[#333] text-[14px] h-[45px] mb-[30px] outline-none"
                    placeholder="username"
                  />
                  <input
                    type="password"
                    className="px-[15px] w-full font-poppins border-[#ebebeb] border text-[#333] text-[14px] h-[45px] mb-[30px] outline-none"
                    placeholder="password"
                  />
                  <input
                    type="email"
                    className="px-[15px] w-full font-poppins border-[#ebebeb] border text-[#333] text-[14px] h-[45px] mb-[30px] outline-none"
                    placeholder="email"
                  />
                  <div className="justify-start flex w-full">
                    <button className="bg-[#f2f2f2] py-[11px] px-[30px] group hover:bg-red-600 transition-colors duration-300">
                      <span className="text-[14px] font-medium ease-in-out duration-700 group-hover:text-white">
                        Register
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
