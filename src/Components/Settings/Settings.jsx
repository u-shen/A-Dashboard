import "./Settings.scss";
function Settings() {
  return (
    <>
      <section className="settings">
        <div className="settings-title-container">
          <h2>Settings</h2>
          <span></span>
        </div>
        <div className="setting-box-container">
          <div className="site-control">
            <h3>Site Control</h3>
            <small>Control The Website If There Is Maintenance</small>
            <div className="website-control">
              <p> Website Control </p>
              <small>Open/Close Website And Type The Reason</small>
              <input type="checkbox" name="opne-close" id="open-close" />
              <textarea
                placeholder="Close Message Content"
                type="text"
                name="message"
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="general-info">
            <h3>General Info</h3>
            <small>General Information About Your Account</small>
            <div className="form-control">
              <form>
                <div className="form-input-control">
                  <label htmlFor="name">First Name</label>
                  <input id="name" type="text" plceholder="First Name" />
                </div>
                <div className="form-input-control">
                  <label htmlFor="last">Last Name</label>
                  <input id="last" type="text" plceholder="Last Name" />
                </div>
                <div className="form-input-control">
                  <label htmlFor="email">Email</label>
                  <input
                    disabled={true}
                    id="email"
                    type="text"
                    plceholder="email"
                    value="farah.ushen@gmail.com"
                  />
                </div>
                <button className="change">Change</button>
              </form>
            </div>
          </div>

          <div className="site-control">
            <h3>Security Info</h3>
            <small>Security Information About Your Account</small>
            <div className="password-config">
              <div className="password">
                <div className="password-info">
                  <p>password</p>
                  <small>last change on 25/10/2021</small>
                </div>
                <div className="password-control">
                  <button className="password-change">Change</button>
                </div>
              </div>
              <div className="two-factor">
                <div className="password-info">
                  <p> Two-Factor Authentication </p>
                  <small>Enable/Disable The Feature</small>
                </div>
                <div className="password-control">
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
              <div className="devices">
                <div className="password-info">
                  <p>Devices</p>
                  <small>Check The Login Devices List</small>
                </div>
                <div className="password-control">
                  <button className="password-change">Devices</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Settings;
