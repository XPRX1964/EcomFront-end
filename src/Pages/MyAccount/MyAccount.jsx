import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditAccount from "./EditAccount";
import ChangePassword from "./ChangePassword";

function MyAccount() {
  // This state tracks which section is open (1 for EditAccount, 2 for ChangePassword)
  const [openSection, setOpenSection] = useState(null);

  return (
    <div>
      <div className="py-[35px] flex justify-center gap-2 bg-[#f7f7f7] w-full text-center font-poppins font-[15px] ">
        <div className="hover:scale-110 transition-all cursor-pointer text-gray-500">
          <span className="text-gray-500">
            <Link to="/"> HOME </Link>
          </span>
        </div>
        <span>/ My Account</span>
      </div>
      <div className="pt-[60px] pb-[40px] tablet:pt-[100px] tablet:pb-[80px] flex justify-center font-poppins flex-col items-center">
        {/* Pass the openSection and setOpenSection as props */}
        <EditAccount
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
        <ChangePassword
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
      </div>
    </div>
  );
}

export default MyAccount;
