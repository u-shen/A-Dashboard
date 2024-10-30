import "./Profile.scss";
import LOGO from "../Navbar/avatar.png";
import ACTIVITY01 from "./assets/activity-01.png";
import ACTIVITY02 from "./assets/activity-02.png";
import ACTIVITY03 from "./assets/activity-03.png";
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
              <img src={LOGO} alt="" />
            </div>
            <div className="name">USHEN</div>
            <div className="Level">Level 20</div>
            <span className="line"></span>
            <div className="rating"></div>
            <small>550 Rating</small>
          </div>
          <div className="user-meta-data">
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Full Name:</label>
                  <div className="answer">Mohamed Samy</div>
                </div>
                <div className="gender">
                  <label>Geneder:</label>
                  <div className="answer">Male</div>
                </div>
                <div className="gender">
                  <label>Country:</label>
                  <div className="answer">Egypt</div>
                </div>
              </div>
            </div>
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Full Name:</label>
                  <div className="answer">Mohamed Samy</div>
                </div>
                <div className="gender">
                  <label>Geneder:</label>
                  <div className="answer">Male</div>
                </div>
                <div className="gender">
                  <label>Country:</label>
                  <div className="answer">Egypt</div>
                </div>
              </div>
            </div>
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Full Name:</label>
                  <div className="answer">Mohamed Samy</div>
                </div>
                <div className="gender">
                  <label>Geneder:</label>
                  <div className="answer">Male</div>
                </div>
                <div className="gender">
                  <label>Country:</label>
                  <div className="answer">Egypt</div>
                </div>
              </div>
            </div>
            <div className="general-info">
              <div className="title">General Information</div>
              <div className="data">
                <div className="name">
                  <label>Full Name:</label>
                  <div className="answer">Mohamed Samy</div>
                </div>
                <div className="gender">
                  <label>Geneder:</label>
                  <div className="answer">Male</div>
                </div>
                <div className="gender">
                  <label>Country:</label>
                  <div className="answer">Egypt</div>
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
            {skills.map((skill) => {
              return (
                <>
                  <div className="skill-name">
                    {skill.map((sk) => {
                      return <li>{sk}</li>;
                    })}
                  </div>
                </>
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
