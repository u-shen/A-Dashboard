import React from "react";
import { useFetchData } from "../../CustomHooks/useFetchData";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Friend1 from "./pix/friend-01.jpg";
import Friend2 from "./pix/friend-02.jpg";
import Friend3 from "./pix/friend-03.jpg";
import Friend4 from "./pix/friend-04.jpg";
import Friend5 from "./pix/friend-05.jpg";
import "./Friends.scss";

function Friends() {
  const pix = [Friend1, Friend2, Friend3, Friend4, Friend5];
  const { data, isLoading, isPending, isError } = useFetchData();
  // if (isLoading | isPending) return <h1>LOADING ...</h1>;
  // if (isError) return <h1>ERROR ...</h1>;
  return (
    <section className="friends">
      <div className="friends-title">
        <h2>Friends</h2>
      </div>
      <div className="firends-box-container">
        {data?.map((user, key) => {
          return (
            <div className="firends-box" key={key}>
              <div className="icons">
                <i className="phone">
                  <MailOutlineIcon />
                </i>
                <i className="email">
                  <LocalPhoneIcon />
                </i>
              </div>
              <div className="img-description">
                <div className="img">
                  <img
                    src={pix[Math.floor(Math.random() * pix.length)]}
                    alt="Friends Img"
                  />
                </div>
                <h3>{user.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Friends;
