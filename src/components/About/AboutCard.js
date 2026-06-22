import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
          → Hi everyone! I’m <span className="purple">M.Manish Kumar</span>{" "}
            an aspiring <span className="purple">MERN Stack Developer</span> passionate about building responsive, user-friendly, and scalable web applications.
<br /><br/>
          → I completed my Bachelor's degree in {" "}
            <span className="purple">Computer Science & Engineering </span>from 
            <span className="purple">Modern Engineering and Management Studies </span>and am{" "}
            recently completed professional training in MERN Stack development at  Jspiders.
<br/><br/>
          → I am actively seeking opportunities as a{" "}
            <span className="purple">Frontend Developer</span> or{" "}
            <span className="purple">MERN Stack Developer </span>where I can contribute, learn, and grow while building impactful digital products.
 <br /> <br />
          → Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring History of inventions
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Vloging short stories posting then in my YT<span className="purple">(MMK_Unfolded)</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> I also  love to learn new coding languages and much more
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn new technologies and adapt with that environment"{" "}
          </p>
          <footer className="blockquote-footer">Manish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
