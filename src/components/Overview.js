import React from "react";
import OverviewCard from "./OverviewCard";
const OverviewInfo = [
  {
    title: "Page Views",
    socialMedia: "facebook",
    metricas: ["3%", true],
    number: 87,
  },
  {
    title: "Likes",
    socialMedia: "facebook",
    metricas: ["2%", false],
    number: 52,
  },
  {
    title: "Likes",
    socialMedia: "instagram",
    metricas: ["2257%", true],
    number: 5462,
  },
  {
    title: "Profile Views",
    socialMedia: "instagram",
    metricas: ["1375%", true],
    number: "52k",
  },
  {
    title: "Retweets",
    socialMedia: "twitter",
    metricas: ["303%", true],
    number: 117,
  },
  {
    title: "Likes",
    socialMedia: "twitter",
    metricas: ["553%", true],
    number: 507,
  },
  {
    title: "Likes",
    socialMedia: "youtube",
    metricas: ["19%", false],
    number: 107,
  },
  {
    title: "Total Views",
    socialMedia: "youtube",
    metricas: ["12%", false],
    number: 1407,
  },
];
const Overview = (props) => {
  return (
    <div className="overviews">
      <div className="overview">
        <h2>Overview - Today</h2>
      </div>
      <div className="cards card-overviews">
        {OverviewInfo.map((card) => (
          <OverviewCard
            key={card.number}
            number={card.number}
            title={card.title}
            metricas={card.metricas}
            socialMedia={card.socialMedia}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
