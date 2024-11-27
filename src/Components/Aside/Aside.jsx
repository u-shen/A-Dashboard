import {
  BarChart,
  Settings,
  PersonOutline,
  AccountTree,
  Subtitles,
  PeopleOutline,
  InsertDriveFile,
  CreditCard,
  LinkedIn,
  Facebook,
  GitHub,
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
        <div className="aside-links">
          <div className="aside-title">
            <h4>ushen</h4>
            <span></span>
          </div>
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
              <div className="social">
                <a className="facebook" href="https://www.facebook.com/u-shen">
                  <i>
                    <Facebook />
                  </i>
                </a>
                <a className="github" href="https://github.com/u-shen">
                  <i>
                    <GitHub />
                  </i>
                </a>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/u-shen/"
                >
                  <i>
                    <LinkedIn />
                  </i>
                </a>
              </div>
            </ul>
          </nav>
          <div className="Copyrights">
            <div>
              <p>
                Made By<span> Ushen</span>
              </p>
              <p>
                Designed By<span> Elzero</span>
              </p>
            </div>
            <div>
              <p>All rights reserved ®</p>
              <p>
                Copyrights at<span> {new Date().getFullYear()}</span> ©
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aside;
