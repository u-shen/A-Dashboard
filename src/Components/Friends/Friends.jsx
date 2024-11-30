import { useFetchData } from "../../CustomHooks/useFetchData";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Friend1 from "./pix/friend-01.jpg";
import Friend2 from "./pix/friend-02.jpg";
import Friend3 from "./pix/friend-03.jpg";
import Friend4 from "./pix/friend-04.jpg";
import Friend5 from "./pix/friend-05.jpg";
import "./Friends.scss";
import { useState } from "react";

function Friends() {
  const pix = [Friend1, Friend2, Friend3, Friend4, Friend5];
  const { data, isLoading, isPending, isError } = useFetchData();
  if (isLoading | isPending) return <h1>LOADING ...</h1>;
  if (isError) return <h1>ERROR ...</h1>;
  // const [modifiedData, setModifiedData] = useState();
  // useEffect(() => {
  //   if (data) {
  //     const dataCopy = [...data];
  //     setModifiedData(dataCopy);
  //   }
  // }, [data]);
  return (
    <section className="friends">
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
                <small>{user.company.catchPhrase}</small>
              </div>
              <div className="desc-icons">
                <div>
                  <i>
                    <GpsFixedIcon />
                  </i>
                  <p>{user.address.geo.lat}</p>
                </div>
                <div>
                  <i>
                    <GpsNotFixedIcon />
                  </i>
                  <p>{user.address.geo.lng}</p>
                </div>
                <div>
                  <i>
                    <ApartmentIcon />
                  </i>
                  <p>{user.address.city}</p>
                </div>
              </div>
              <div className="meta-deta">
                <div className="website">
                  <small>{user.website}</small>
                </div>
                <div className="button">
                  <button className="profile">Profile</button>
                  <button
                    onClick={() => {
                      data.filter((dt) => dt.id != user.id);
                    }}
                    className="remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Friends;
