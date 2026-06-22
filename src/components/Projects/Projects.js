import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// ------------------------------------------------------
import comskill from "../../Assets/Projects/comskill.jpg"
import preskill from "../../Assets/Projects/preskill.jpg"
import simple from "../../Assets/Projects/simple.jpg"
import jspider from "../../Assets/Projects/jspider.jpg"
import next from "../../Assets/Projects/next.jpg"
import code from "../../Assets/Projects/code.jpg"
// -------------------------------------------------------
// import { FaLinkedinIn } from 'react-icons/fa';
// import Github from './../About/Github';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificate I've earned on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simple}
              isBlog={false}
              title="Type script"
              description="I have completed my introduction to type script from SIMPLILEARN skillup program"
              ghLink="https://www.linkedin.com/posts/m-manish-kumar-mmk_here-i-share-the-completion-of-my-web-development-share-7409122885530882048-9pwu/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfd1lABV3VvGRXoxvQPO9mBxd-BOKEbuGY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={preskill}
              isBlog={false}
              title="presentation skill"
              description="Enhanced my presentetion skill and knowledge with TCS iON"
              ghLinkk="https://www.linkedin.com/posts/m-manish-kumar-mmk_excited-to-share-another-milestone-in-my-ugcPost-7474047876432621568-sljQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfd1lABV3VvGRXoxvQPO9mBxd-BOKEbuGY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comskill}
              isBlog={false}
              title="Communication skill"
              description="Upgraded my knowledge on communication with TCS iON"
              ghLink="https://www.linkedin.com/posts/m-manish-kumar-mmk_communication-skill-certification-from-tcs-ugcPost-7473627763422179328-NgOh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfd1lABV3VvGRXoxvQPO9mBxd-BOKEbuGY"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="Plant AI"
              description="Earned skills on frontend programming witk CODE ALPHA"
              ghLink="https://www.linkedin.com/posts/m-manish-kumar-mmk_share-7280677554271707136-rOhh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfd1lABV3VvGRXoxvQPO9mBxd-BOKEbuGY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={next}
              isBlog={false}
              title="AI for students"
              description="Learn and developed an ai model for experience with NEXT WAVE"
              ghLink="https://www.linkedin.com/posts/m-manish-kumar-mmk_share-7280677693854035968-cxXD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfd1lABV3VvGRXoxvQPO9mBxd-BOKEbuGY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jspider}
              isBlog={false}
              title="MERN Stack development"
              description="Learn and upgraded my skills on frontend as well as backend at JSPIDERS"
              ghLink="https://www.linkedin.com/posts/m-manish-kumar-mmk_share-7280677693854035968-cxXD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfd1lABV3VvGRXoxvQPO9mBxd-BOKEbuGY"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
