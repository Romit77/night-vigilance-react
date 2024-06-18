import "./navbar.css";
import Profile from "../../assets/images/user/01.jpg";
import { useState } from "react";
import ProfilePopup from "./ProfilePopup";
import Clerk from "../../clerk auth/clerk";

const UNavbar = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleViewProfile = () => {
    setPopupVisible(true);
  };
  return (
    <nav>
      <div className="nav-content">
        <span className="parent-span">
          <h5>
            User Dashboard <br />
          </h5>
          <span className="abla">
            <p>
              <a href="#">Home</a>
            </p>
            /<p>Home</p>
          </span>
        </span>
        <div className="user">
          <Clerk />
        </div>
      </div>
      <ProfilePopup trigger={popupVisible} setTrigger={setPopupVisible} />
    </nav>
  );
};
export default UNavbar;
