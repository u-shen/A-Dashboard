import { Star } from "@mui/icons-material";
import LOGO from "../Navbar/avatar.png";
import ACTIVITY01 from "./assets/activity-01.png";
import ACTIVITY02 from "./assets/activity-02.png";
import ACTIVITY03 from "./assets/activity-03.png";
import "./Profile.scss";
function Profile() {
  const skills = [
    ["Javascript", "TypeScript", "C++"],
    ["Python", "Dajngo", "Flask"],
    ["Html", "Css", "Sass"],
    ["Next", "View", "React"],
    ["Php", "Laravel", "Jest"],
  ];
  return (
    <div className="profile">
      <div className="profile-user">
        <div className="user">
          <div className="user-profile">
            <div className="image">
              <img src="https://avatar.iran.liara.run/public/boy" alt="" />
            </div>
            <div className="name">USHEN</div>
            <div className="level">Level 20</div>
            <span className="line"></span>
            <div className="rating">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <small>500 Rating</small>
          </div>
          <div className="user-meta-data">
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Full Name:</label>
                  <div className="answer">Farah Ushen</div>
                </div>
                <div className="gender">
                  <label>Geneder:</label>
                  <div className="answer">Male</div>
                </div>
                <div className="gender">
                  <label>Country:</label>
                  <div className="answer">Morocco</div>
                </div>
                <div className="input">
                  <div>
                    <label class="switch">
                      <input
                        defaultChecked={true}
                        className="toggle-checkbox"
                        type="checkbox"
                      />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Email:</label>
                  <div className="answer">farah.ush@gmail.com</div>
                </div>
                <div className="gender">
                  <label>Phone:</label>
                  <div className="answer">06619770716</div>
                </div>
                <div className="gender">
                  <label>Date Of Birth:</label>
                  <div className="answer">01/01/2002</div>
                </div>
                <div className="input">
                  <div>
                    <label class="switch">
                      <input className="toggle-checkbox" type="checkbox" />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Job Title: </label>
                  <div className="answer">Web Developer </div>
                </div>
                <div className="gender">
                  <label>Language: </label>
                  <div className="answer">React</div>
                </div>
                <div className="gender">
                  <label>Years Of Experience: </label>
                  <div className="answer">+2</div>
                </div>
                <div className="input">
                  <div>
                    <label class="switch">
                      <input
                        defaultChecked={true}
                        className="toggle-checkbox"
                        type="checkbox"
                      />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Payment Method: </label>
                  <div className="answer">Paypal</div>
                </div>
                <div className="gender">
                  <label>Plan: </label>
                  <div className="answer">2 Months</div>
                </div>
                <div className="gender">
                  <label>Subscription: </label>
                  <div className="answer">Monthly</div>
                </div>
                <div className="input">
                  <div>
                    <label class="switch">
                      <input className="toggle-checkbox" type="checkbox" />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-meta-data">
        <div className="skills">
          <div className="skills-title">
            <h4>My Skills</h4>
            <small>Complete Skills List</small>
          </div>
          <ul className="skills-list">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="skill-name">
                  {skill.map((sk, index) => {
                    return <li key={index}>{sk}</li>;
                  })}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="latset-active">
          <div className="activity-title">
            <h4>Latest Activities</h4>
            <small>Latest Activities Done By The User</small>
          </div>
          <div className="active active-01">
            <div className="active-img">
              <img src={ACTIVITY01} alt="" />
            </div>
            <div className="active-title">
              <div className="title">Store</div>
              <div className="desc">Bought The Mastering Python Course</div>
            </div>
            <div className="active-date">
              <div className="time">18:10</div>
              <div className="date">Yesterday</div>
            </div>
          </div>
          <div className="active active-01">
            <div className="active-img">
              <img src={ACTIVITY02} alt="" />
            </div>
            <div className="active-title">
              <div className="title">Store</div>
              <div className="desc">Bought The Mastering Python Course</div>
            </div>
            <div className="active-date">
              <div className="time">18:10</div>
              <div className="date">Yesterday</div>
            </div>
          </div>
          <div className="active active-01">
            <div className="active-img">
              <img src={ACTIVITY03} alt="" />
            </div>
            <div className="active-title">
              <div className="title">Store</div>
              <div className="desc">Bought The Mastering Python Course</div>
            </div>
            <div className="active-date">
              <div className="time">18:10</div>
              <div className="date">Yesterday</div>
            </div>
          </div>
          <div className="active active-01">
            <div className="active-img">
              <img src={ACTIVITY01} alt="" />
            </div>
            <div className="active-title">
              <div className="title">Store</div>
              <div className="desc">Bought The Mastering Python Course</div>
            </div>
            <div className="active-date">
              <div className="time">18:10</div>
              <div className="date">Yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
