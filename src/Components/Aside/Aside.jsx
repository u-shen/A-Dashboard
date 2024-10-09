import {
  BarChart,
  Settings,
  PersonOutline,
  AccountTree,
  Subtitles,
  PeopleOutline,
  InsertDriveFile,
  CreditCard,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./Aside.scss";
function Aside() {
  const AsideData = [
    {
      title: "Dashboard",
      icon: <BarChart />,
      to: "",
    },
    {
      title: "Settings",
      icon: <Settings />,
      to: "Settings",
    },
    {
      title: "Profile",
      icon: <PersonOutline />,
      to: "profile",
    },
    {
      title: "Projects",
      icon: <AccountTree />,
      to: "projects",
    },
    {
      title: "Courses",
      icon: <Subtitles />,
      to: "courses",
    },
    {
      title: "Friends",
      icon: <PeopleOutline />,
      to: "friends",
    },
    {
      title: "Files",
      icon: <InsertDriveFile />,
      to: "files",
    },
    {
      title: "Plans",
      icon: <CreditCard />,
      to: "plans",
    },
  ];
  return (
    <>
      <div className="aside-container">
        <div className="aside-title">
          <h4>ushen</h4>
          <span></span>
        </div>
        <div className="aside-links">
          <nav>
            <ul>
              {AsideData.map((item, key) => {
                return (
                  <li key={key}>
                    <NavLink to={item.to}>
                      <i>{item.icon}</i>
                      <div>{item.title}</div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Aside;
