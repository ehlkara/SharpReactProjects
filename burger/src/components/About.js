import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import '../styles/About.css';

export default function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Mollit anim culpa aliquip eiusmod incididunt in laborum nulla non enim
          laboris. Commodo ullamco cupidatat veniam laborum excepteur sint est
          voluptate minim adipisicing nulla sit magna. Eu veniam duis
          consectetur proident sunt dolor. Adipisicing voluptate magna mollit
          ullamco exercitation in do excepteur cupidatat minim dolore. Ipsum
          eiusmod fugiat esse magna voluptate anim. Reprehenderit dolore Lorem
          Lorem id fugiat voluptate cupidatat culpa ut proident exercitation ea
          anim labore. Dolor veniam sit Lorem incididunt aliquip deserunt
          officia proident incididunt ut anim. Magna proident nostrud cupidatat
          pariatur sit mollit id sint tempor aute dolor pariatur. Nulla commodo
          officia amet dolore cillum officia enim tempor veniam. Est ex ullamco
          excepteur incididunt nostrud. Quis excepteur qui nulla cillum sint
          amet sint sunt nostrud commodo est Lorem irure. Minim elit aliqua
          laborum irure est do aliquip.
        </p>
      </div>
    </div>
  );
}
