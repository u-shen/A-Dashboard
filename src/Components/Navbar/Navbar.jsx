import "./Navbar.scss";
import { useState } from "react";
import { NotificationsNone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import avatar from "./avatar.png";

function Navbar() {
  const navigate = useNavigate();
  const [isNotifyActive, setIsNotifyActive] = useState(false);
  return (
    <header>
      <div className="search-input-container">
        <input
          placeholder="Not implemented yet"
          style={{ background: "rgba(88,88,88,0.2)" }}
          disabled
          type="search"
          name="search"
          id="serach"
        />
      </div>
      <div className="notify-container">
        <i onClick={() => setIsNotifyActive((prev) => !prev)} className="icon">
          <NotificationsNone />
        </i>
        <div onClick={() => navigate("/profile")} className="avatar">
          <img src="https://avatar.iran.liara.run/public/boy" alt="Avatar" />
        </div>

        {isNotifyActive && (
          <ul onClick={() => setIsNotifyActive(false)} id="notif-list">
            <h4>Notifications</h4>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>It's Mohamed Awad's birthday!</span>
                  <small>12 Hours Ago</small>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>Aliaa mentioned you in a comment.</span>
                  <small>4 Hours Ago</small>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>Ahmed sent you a friend request.</span>
                  <small>19 Hours Ago</small>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>Ahlam reacted to your post.</span>
                  <small>23 Hours Ago</small>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>Asmaa reacted to your comment.</span>
                  <small>7 Hours Ago</small>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>Ahmed sent you a friend request.</span>
                  <small>10 Hours Ago</small>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>Ashraf invited you to a group.</span>
                  <small>8 Hours Ago</small>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="Avatar"
                />
                <div>
                  <span>Abbas replied to your comment.</span>
                  <small>2 Hours Ago</small>
                </div>
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
export default Navbar;
