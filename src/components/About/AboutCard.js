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
          → I got trained currently from{" "}
            <span className="purple">Jspiders</span>as a{" "}
            <span className="purple">MERN Stack Student</span> .
            <br/>→ I hold an Bachlorer's degree in{" "}
            <span className="purple">Computer science & Engineering</span> from{" "}
            <span className="purple">Modern Engineering And Management Studies ,Balasore</span>.
            <br />
            <br />
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
              <ImPointRight /> Vloging short stories posting then in my YT(MMK_Unfolded)
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
