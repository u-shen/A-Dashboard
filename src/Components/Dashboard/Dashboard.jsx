import React, { useState, useEffect } from "react";
import {
  AccountTree,
  Facebook,
  GitHub,
  Twitter,
  Mail,
  LinkedIn,
  CheckCircle,
  WorkHistory,
  PostAddTwoTone,
  SocialDistance,
  Note,
  ListAlt,
  Newspaper,
  BarChartRounded,
  Circle,
  Code,
  Delete,
  Search,
  UploadFile,
  Pending,
  CalendarMonthRounded,
} from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import TEAM from "./assets/team-talk.webp";
import NEWS1 from "./assets/news-01.webp";
import NEWS2 from "./assets/news-02.webp";
import NEWS3 from "./assets/news-03.png";
import NEWS4 from "./assets/news-04.webp";
import avi from "../Files/assets/avi.svg";
import eps from "../Files/assets/eps.svg";
import pdf from "../Files//assets/pdf.svg";
import png from "../Files/assets/png.svg";
import psd from "../Files/assets/psd.svg";
import sql from "../Files/assets/sql.svg";
import txt from "../Files/assets/txt.svg";
import zip from "../Files/assets/zip.svg";
import "./Dashboard.scss";
function Dashboard() {
  const [randomFiles, setRandomFiles] = useState([]);
  const [search, setSearch] = useState([
    {
      title: "Keyword",
      priority: "Search Count",
    },
    {
      title: "Programming",
      priority: 243,
    },
    {
      title: "Javascript",
      priority: 122,
    },
    {
      title: "Php",
      priority: 100,
    },
    {
      title: "Code",
      priority: 88,
    },
    {
      title: "Design",
      priority: 80,
    },
    {
      title: "Logic",
      priority: 71,
    },
    {
      title: "Algoritheme",
      priority: 55,
    },
  ]);
  const [tasks, setTasks] = useState([
    {
      title: "Record One New Video",
      desc: "Record Python Create Exe Project",
      compelted: false,
    },
    {
      title: "Write Article",
      desc: "Write Low Level vs High Level Languages",
      compelted: false,
    },
    {
      title: "Finish Project",
      desc: "Publish Academy Programming Project",
      compelted: true,
    },
    {
      title: "Attend The Meeting",
      desc: "Attend The Project Business Analysis Meeting",
      compelted: true,
    },
    {
      title: "Finish Lesson",
      desc: "Finish Teaching Flex Box",
      compelted: false,
    },
  ]);
  const fileData = [
    {
      title: "my-file.pdf",
      img: pdf,
      uploader: "USHEN",
      size: 5.5,
    },
    {
      title: "my-file.avi",
      img: avi,
      uploader: "Admin",
      size: 12.5,
    },
    {
      title: "my-file.eps",
      img: eps,
      uploader: "Uploader",
      size: 2.7,
    },
    {
      title: "my-file.png",
      img: png,
      uploader: "Ushen",
      size: 15.2,
    },
    {
      title: "my-file.psd",
      img: psd,
      uploader: "Ubbe",
      size: 1.5,
    },
    {
      title: "my-file.sql",
      img: sql,
      uploader: "Farah",
      size: 1.4,
    },
    {
      title: "my-file.txt",
      img: txt,
      uploader: "Farah",
      size: 10.2,
    },
    {
      title: "my-file.zip",
      img: zip,
      uploader: "Ippo",
      size: 7.2,
    },
  ];
  useEffect(() => {
    const randomFileData = [];
    fileData.map(() => {
      return randomFileData.push(
        fileData[Math.floor(Math.random() * fileData.length)],
      );
    });
    setRandomFiles(randomFileData);
  }, []);
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-grid-container">
          <div className="grid-item-welcome">
            <div className="flex-welcome">
              <div className="welcome">
                <h1>Welcome,</h1>
                <b>USHEN</b>
              </div>
              <img src={TEAM} alt="TEAM" />
              <div className="user-pix">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="user"
                />
              </div>
            </div>
            <div className="welcome-container">
              <div className="welcome-static">
                <div className="preif">
                  <h4 className="title">USHEN</h4>
                  <p>Developer</p>
                </div>
                <div className="projects">
                  <h4 className="title">80</h4>
                  <p>Projects</p>
                </div>
                <div className="price">
                  <h4 className="number">$5800</h4>
                  <p>Projects</p>
                </div>
              </div>
              <button className="profile">Profile</button>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <Pending />
                  Quick Draft
                </h4>
                <p>Write a Draft for your Idea</p>
              </div>
            </div>
            <div className="flex-draft">
              <div className="draft-form">
                <input placeholder="Title" type="text" />
                <textarea
                  placeholder="your throughts"
                  name="draft-msg"
                ></textarea>
              </div>
              <button>Save</button>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <CalendarMonthRounded />
                  Yearly Targets
                </h4>
                <p>Targets of the year</p>
              </div>
              <div className="target-items">
                <div className="projects">
                  <div className="icon">
                    <Code />
                  </div>
                  <div className="info">
                    <div className="name">Projects</div>
                    <small className="number">574</small>
                    <div className="progress" data-progress="80%"></div>
                  </div>
                </div>
                <div className="projects money">
                  <div className="icon">
                    <AttachMoneyIcon />
                  </div>
                  <div className="info money">
                    <div className="name">Money</div>
                    <div className="number">$50,000</div>
                    <div className="progress" data-progress="63%"></div>
                  </div>
                </div>
                <div className="projects team">
                  <div className="icon">
                    <PersonIcon />
                  </div>
                  <div className="info team">
                    <div className="name">Team</div>
                    <div className="number">19</div>
                    <div className="progress" data-progress="95%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <BarChartRounded />
                  Tickets Statistics
                </h4>
                <p>Everything about Support Tickets</p>
              </div>
              <div className="Statistics-items">
                <div className="row">
                  <div className="icon-row-container">
                    <Code />
                    <p>2500</p>
                    <small>Total</small>
                  </div>
                  <div className="icon-row-container">
                    <Code />
                    <p>500</p>
                    <small>Pending</small>
                  </div>
                </div>
                <div className="row">
                  <div className="icon-row-container">
                    <Code />
                    <p>1900</p>
                    <small>Closed</small>
                  </div>
                  <div className="icon-row-container">
                    <Code />
                    <p>100</p>
                    <small>Deleted</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <Newspaper />
                  Latest News
                </h4>
              </div>
              <div className="news-items">
                <div className="news">
                  <div className="img">
                    <img src={NEWS1} alt="news" />
                  </div>
                  <div className="desc">
                    <p>Created SASS Section</p>
                    <small>New SASS Examples & Tutorials</small>
                  </div>
                  <div className="date">3 Days Ago</div>
                </div>
                <div className="news">
                  <div className="img">
                    <img src={NEWS2} alt="news" />
                  </div>
                  <div className="desc">
                    <p>Changed The Design</p>
                    <small>A Brand New Website Design</small>
                  </div>
                  <div className="date">5 Days Ago</div>
                </div>
                <div className="news">
                  <div className="img">
                    <img src={NEWS3} alt="news" />
                  </div>
                  <div className="desc">
                    <p>Team Increased</p>
                    <small>3 Developers Joined The Team</small>
                  </div>
                  <div className="date">7 Days Ago</div>
                </div>
                <div className="news">
                  <div className="img">
                    <img src={NEWS4} alt="news" />
                  </div>
                  <div className="desc">
                    <p>Added Payment Gateway</p>
                    <small>Many New Payment Gateways Added</small>
                  </div>
                  <div className="date">9 Days Ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <ListAlt />
                  Latest Tasks
                </h4>
              </div>
              <div className="tasks-items">
                {tasks.map((task) => {
                  return (
                    <div
                      className="task"
                      style={{
                        textDecoration: task.compelted ? "line-through" : null,
                      }}
                    >
                      <div className="text">
                        <div className="task-title">{task.title}</div>
                        <small className="task-desc">{task.desc}</small>
                      </div>
                      <button className="delete">
                        <Delete />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <Search />
                  Top Search Items
                </h4>
              </div>
              <div className="search-items">
                {search.map((item) => {
                  return (
                    <div className="item">
                      <div className="title">{item.title}</div>
                      <small className="priority">{item.priority}</small>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <UploadFile />
                  Latest Uploads
                </h4>
              </div>
              <div className="upload-items">
                {randomFiles.map((file) => {
                  return (
                    <div className="file">
                      <div className="img">
                        <img src={file.img} alt="file" />
                      </div>
                      <div className="file-desc">
                        <div className="file-title">{file.title}</div>
                        <div className="file-title">{file.uploader}</div>
                      </div>
                      <small className="size">{`${file.size}MB`}</small>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <WorkHistory />
                  Project Progress
                </h4>
              </div>
              <div className="projects-items">
                <ul>
                  <li className="done">
                    <CheckCircle />
                    Got The Project
                  </li>
                  <li className="done">
                    <CheckCircle />
                    Started The Project
                  </li>
                  <li className="done">
                    <CheckCircle />
                    The Project About To Finish
                  </li>
                  <li className="current">
                    <CheckCircle />
                    Test The Project
                  </li>
                  <li>
                    <Circle />
                    Finish The Project &amp; Get Money
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <Note />
                  Reminders
                </h4>
              </div>
              <div className="reminder-items">
                <div className="box reminders">
                  <div className="reminder">
                    <span></span>
                    <div>
                      <p>Check My Tasks List</p>
                      <span>28/09/2022 - 7:31 PM</span>
                    </div>
                  </div>
                  <div className="reminder">
                    <span className="green"></span>
                    <div>
                      <p>Check My Projects</p>
                      <span>26/10/2022 - 5:48 PM</span>
                    </div>
                  </div>
                  <div className="reminder">
                    <span className="blue"></span>
                    <div>
                      <p>Call My Clients</p>
                      <span>04/08/2023 - 2:57 PM</span>
                    </div>
                  </div>
                  <div className="reminder">
                    <span className="yellow"></span>
                    <div>
                      <p>Finish The Development Workshop</p>
                      <span>11/04/2023 - 8:23 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <PostAddTwoTone />
                  Latest Posts
                </h4>
              </div>
              <div className="reminder-items"></div>
            </div>
          </div>
          <div className="grid-item-target">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <SocialDistance />
                  Social Media Stats
                </h4>
              </div>
              <div className="social-items">
                <div className="social-item facebook">
                  <div className="icon">
                    <Facebook />
                  </div>
                  <div className="like">2M Likes</div>
                  <div className="view">View</div>
                </div>
                <div className="social-item github">
                  <div className="icon">
                    <GitHub />
                  </div>
                  <div className="like">200 Stars</div>
                  <div className="view">View</div>
                </div>
                <div className="social-item twitter">
                  <div className="icon">
                    <Twitter />
                  </div>
                  <div className="like">500K Followers</div>
                  <div className="view">View</div>
                </div>
                <div className="social-item mail">
                  <div className="icon">
                    <Mail />
                  </div>
                  <div className="like">8K Mail</div>
                  <div className="view">View</div>
                </div>
                <div className="social-item linkdein">
                  <div className="icon">
                    <LinkedIn />
                  </div>
                  <div className="like">3K Connections</div>
                  <div className="view">View</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-target projects">
            <div className="flex-target">
              <div className="title">
                <h4>
                  <AccountTree />
                  Projects
                </h4>
              </div>
              <div className="projects-items">
                <div className="responsive-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>Client</th>
                        <th>Profit</th>
                        <th>Team</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
