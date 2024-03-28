import React from "react";
import facebookImgen from "../images/icon-facebook.svg";
import IGImgen from "../images/icon-instagram.svg";
import ytImgen from "../images/icon-youtube.svg";
import xImgen from "../images/icon-twitter.svg";

const OverviewCard = (props) => {
  const imagen = () => {
    switch (props.socialMedia) {
      case "facebook":
        return <img src={facebookImgen} alt="" />;
      case "instagram":
        return <img src={IGImgen} alt="" />;
      case "twitter":
        return <img src={xImgen} alt="" />;
      case "youtube":
        return <img src={ytImgen} alt="" />;

      default:
        return <h1>No project match</h1>;
    }
  };
  const metric = props.metricas[1] ? "metricas" : "metricas down";
  return (
    <div className={`card-info ${props.socialMedia}`}>
      <div>
        <p>{props.title}</p>
      </div>
      <div className="top-right">{imagen()}</div>
      <div className="div-down">
        <h2 className="number">{props.number}</h2>
      </div>
      <div className="div-down down-right">
        <p className={metric}>{props.metricas[0]}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
