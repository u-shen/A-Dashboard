import "./Navbar.scss";
import { NotificationsNone } from "@mui/icons-material";
import avatar from "./avatar.png";

function Navbar() {
  return (
    <header>
      <div className="search-input-container">
        <input
          placeholder="Type A Keyword"
          type="search"
          name="search"
          id="serach"
        />
      </div>
      <div className="notify-container">
        <i className="icon">
          <NotificationsNone />
        </i>
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}
export default Navbar;
