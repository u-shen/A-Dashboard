import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./Settings.scss";
import {
  Twitter,
  Facebook,
  LinkedIn,
  YouTube,
  Computer,
} from "@mui/icons-material";
import { useState } from "react";
function Settings() {
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [passwordDate, setPasswordDate] = useState("24/12/2024");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const toggleEmail = (e) => {
    e.preventDefault();
    setIsEmailEnabled((prev) => !prev);
  };
  const formSchema = z.object({
    message: z.string().min(50),
    name: z.string,
    lastName: z.string(),
    password: z.string().min(8).max(20),
    email: z.string().email("Email Not Valid"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });
  const submitedForm = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitedForm)}>
      <div className="settings-grid-container">
        <div className="grid-item control">
          <div className="title">
            <h2>Site Control</h2>
            <p className="desc">Control The Website If There Is Maintenance </p>
          </div>
          <div className="web-control">
            <div className="web-control-title">
              <h2>Website Control</h2>
              <small className="desc">
                Open/Close Website And Type The Reason
              </small>
            </div>
            <div className="web-control-radio">
              <input defaultChecked={true} type="checkbox" />
            </div>
          </div>
          <div className="textarea-control">
            <textarea
              {...register("message")}
              placeholder="Close Message Content"
            ></textarea>
            {errors.message && (
              <small className="error"> {errors.message.message}</small>
            )}
          </div>
        </div>
        <div className="grid-item general">
          <div className="title">
            <h2>General Info</h2>
            <p className="desc">General Information About Your Account</p>
          </div>
          <div className="general-info">
            <div className="name">
              <label htmlFor="name">First Name</label>
              <input
                {...register("firstName")}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                id="name"
                type="text"
                placeholder="First Name"
              />
              {errors.name && (
                <small className="error"> {errors.name.message}</small>
              )}
            </div>

            <div className="last">
              <label htmlFor="last">Last Name</label>
              <input
                {...register("firstName")}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                id="last"
                type="text"
                placeholder="Last Name"
              />

              {errors.lastName && (
                <small className="error"> {errors.lastName.message}</small>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <div className="email-control">
                <input
                  {...register("email")}
                  id="email"
                  disabled={!isEmailEnabled}
                  style={
                    isEmailEnabled
                      ? { background: "#fff", cursor: "text" }
                      : null
                  }
                  type="text"
                  value={
                    !isEmailEnabled ? `${firstName}-${lastName}@ush.org` : null
                  }
                  placeholder="ushen@email.com"
                />
                <button onClick={toggleEmail}>Change</button>
              </div>
              {errors.lastName && (
                <small className="error"> {errors.lastName.message}</small>
              )}
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="title">
            <h2>Security Info</h2>
            <p className="desc"> Security Information About Your Account </p>
          </div>
          <div className="password-control">
            <div className="password item">
              <div className="password-info">
                <h4>Password</h4>
                <small className="desc">Last Change On {passwordDate}</small>
              </div>
              <div className="change-btn">
                <button
                  onClick={() => setIsChangePassword((prev) => !prev)}
                  type="button"
                >
                  Change
                </button>
              </div>
              {isChangePassword && (
                <div id="password">
                  <input placeholder="password" type="password" />
                  <button
                    onClick={() => {
                      setIsChangePassword(false);
                      setPasswordDate(
                        `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
                      );
                    }}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
            <div className="two-factor item">
              <div className="two-factor-info">
                <h4>Two-Factor Authentication</h4>
                <small className="desc">Enable/Disable The Feature</small>
              </div>
              <div className="change-btn">
                <input type="radio" defaultChecked={true} />
              </div>
            </div>
            <div className="Device item">
              <div className="title">
                <h4>Security Info</h4>
                <small className="desc">Check The Login Devices List</small>
              </div>
              <div className="device-btn">
                <button type="button">Devices</button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="title">
            <h2>Social Info</h2>
            <p className="desc">Social Media Information</p>
          </div>
          <div className="socials">
            <div className="social-input twitter">
              <label className="twitter-label" htmlFor="twitter">
                <Twitter />
              </label>
              <input
                id="twitter"
                className="twitter-input"
                type="text"
                placeholder="Twitter Username"
              />
            </div>
            <div className="social-input facebook">
              <label htmlFor="facebook">
                <Facebook />
              </label>
              <input
                id="facebook"
                className="facebook-input"
                type="text"
                placeholder="Facebook Username"
              />
            </div>
            <div className="social-input Linked-in">
              <label htmlFor="LinkedIn">
                <LinkedIn />
              </label>
              <input
                className="linkdein-input"
                id="LinkedIn"
                type="text"
                placeholder="LikdeIn Username"
              />
            </div>
            <div className="social-input youtube">
              <label htmlFor="youtube">
                <YouTube />
              </label>
              <input
                className="youtube-input"
                id="youtube"
                type="text"
                placeholder="Youtube Username"
              />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="title">
            <h2>Widgets Control</h2>
            <p className="desc">Show/Hide Widgets</p>
          </div>
          <div className="widget">
            <div>
              <input id="quick" defaultChecked={true} type="checkbox" />
              <label htmlFor="quick">Quick Draft</label>
            </div>
            <div>
              <input id="year" type="checkbox" />
              <label htmlFor="year">Yearly Targets</label>
            </div>
            <div>
              <input defaultChecked={true} id="ticket" type="checkbox" />
              <label htmlFor="ticket">Tickets Statistics</label>
            </div>
            <div>
              <input id="news" type="checkbox" />
              <label htmlFor="news">Latest News</label>
            </div>
            <div>
              <input defaultChecked={true} id="tasks" type="checkbox" />
              <label htmlFor="tasks">Latest Tasks</label>
            </div>
            <div>
              <input defaultChecked={true} id="top" type="checkbox" />
              <label htmlFor="top">Top Search Items</label>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="title">
            <h2>Backup Manager</h2>
            <p className="desc">Control Backup Time And Location</p>
          </div>
          <div className="backup">
            <div className="radio">
              <div className="daily">
                <input type="radio" name="backup" id="daily" />
                <label htmlFor="daily">Daily</label>
              </div>
              <div className="weekly">
                <input type="radio" name="backup" id="weekly" />
                <label htmlFor="weekly">Weekly</label>
              </div>
              <div className="daily">
                <input type="radio" name="backup" id="monthly" />
                <label htmlFor="monthly">Monthly</label>
              </div>
            </div>
            <div className="location">
              <div className="location-failed">
                <input name="location" id="ushen" type="radio" />
                <label htmlFor="ushen">
                  <Computer />
                  USHEN
                </label>
              </div>
              <div className="location-failed">
                <input name="location" id="ulli" type="radio" />
                <label htmlFor="ulli">
                  <Computer />
                  LLI
                </label>
              </div>

              <div className="location-failed">
                <input
                  defaultChecked={true}
                  name="location"
                  id="sigma"
                  type="radio"
                />
                <label htmlFor="sigma">
                  <Computer />
                  SIGMA
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="submit" />
    </form>
  );
}
export default Settings;
