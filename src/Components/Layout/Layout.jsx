import Aside from "../Aside/Aside";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import { useContext } from "react";
function Layout() {
  return (
    <div className="whole-app">
      <Aside />
      <div className="flex-container">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout;
