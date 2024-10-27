import { aviablePlans } from "./PlansData";
import { DownloadDone, Close } from "@mui/icons-material";
import "./Plans.scss";

function Plans() {
  return (
    <>
      <div className="Plans-Container">
        {aviablePlans.map((plan) => {
          return (
            <div className="plan">
              <div className={`${plan.color} plan-meta-data`}>
                <div className="title">{plan.name}</div>
                <div className="price">{`$${plan.price}`}</div>
              </div>
              <div className="plan-features">
                {plan.features.map((feature) => {
                  return (
                    <>
                      <div className="plan-feature">
                        <label className="label-icons">
                          {feature.checked ? (
                            <DownloadDone color="success" />
                          ) : (
                            <Close color="error" />
                          )}
                        </label>
                        <p className="desc">{feature.descrition}</p>
                      </div>
                      <span className="line"></span>
                    </>
                  );
                })}

                {!plan.current ? (
                  <div className="btn">
                    <button className={`${plan.color}-btn plan-btn`}>
                      Join
                    </button>
                  </div>
                ) : (
                  <div className="current">
                    <p>This Is Your Current Plan</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Plans;
