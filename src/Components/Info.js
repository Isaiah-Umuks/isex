import React, { Link } from "react-router-dom";
import "./styles/Info.css";

const Info = () => {
  return (
    <div className="info-section">
      <div className="info-about">
        <h3>
          About <span>Isex</span>{" "}
        </h3>
        <p>
          Arise, shine; for thy light is come, and the glory of the Lord is
          risen upon thee. For, behold, the darkness shall cover the earth, and
          gross darkness the people: but the Lord shall arise upon thee, and his
          glory shall be seen upon thee. And the Gentiles shall come to thy
          light, and kings to the brightness of thy rising.
        </p>
        <div className="info-btn">
          <Link to="/about">More</Link>
        </div>
      </div>

      <div className="info-content">
        <h1>Who is Isex?</h1>

        <p>Web Developer</p>
        <p>Fronend and Backend</p>
        <p>SQL Developer</p>
        <p>Wordpress Developer</p>
        <p>Content Creator</p>
        <p>JavaScript Developer</p>
        <p>React-Native Developer</p>
        <p>NodeJS Developer</p>
        <p>Restful API Developer</p>
      </div>
    </div>
  );
};

export default Info;
