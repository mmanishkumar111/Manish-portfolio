import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.svg.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             
              <br />
              <br />
              I’m Student in <span className="purple">Computer Science and Engineering</span>, passionate about
              building impactful software solutions.
              <br />
              <br />
              I love programming languages like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript,C, Node.js, and Java{" "}
                </b>
              </i>
              <br />
              My field of Interest's are learnig new programming languages and
              also in areas related to 
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Api handling{" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Node.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
