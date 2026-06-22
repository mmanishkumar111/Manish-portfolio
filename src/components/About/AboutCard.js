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
            from <span className="purple">Balasore,Odisha,India</span>.
            <br />
          → I’m currently working as a{" "}
            <span className="purple">Student</span> at{" "}
            <span className="purple">Jspiders</span>.
            <br/>→ I hold an Bachlorer's degree in{" "}
            <span className="purple">Computer science & Engineering</span> from{" "}
            <span className="purple">MEMS ,Balasore</span>.
            <br />
            <br />
          → Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring History of invantions
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Vloging short stories
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
