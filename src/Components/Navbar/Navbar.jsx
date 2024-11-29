import "./Navbar.scss";
import { NotificationsNone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import avatar from "./avatar.png";

function Navbar() {
  const navigate = useNavigate();
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
        <i className="icon">
          <NotificationsNone />
        </i>
        <div onClick={() => navigate("/profile")} className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}
export default Navbar;
