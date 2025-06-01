import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
//import 'react-vertical-timeline-component/style.min.css';
import bank from "../images/bank.png";
import developer from "../images/developer.png";
import reading from "../images/reading.png";
import location from "../images/location.png";
import "./experience.css";

function Experiences() {
  const experiences = [
    {
      time: "Augest 2024 - Present",
      title: "MedTech Platform",
      subTitle: "Software Engineer",
      icon: developer,
      detail: [
        "Contributing to the platform team by building and maintaining frontend, BFF, and web deployment SDKs using TypeScript, Vite, MUI, Node.js, Go, and AWS.\n",
        "Developing and supporting internal tools to manage the control plane API and streamline platform operations. \n",
        "Building a customizable, company-wide console to display product team modules to authorized users based on access privileges.\n",
        "Collaborating with the IAM team to implement and maintain platform-level authentication and authorization, ensuring secure, role-based resource access.\n",
        "Led automation testing efforts across four repositories, designing the page object model (POM) structure and implementing end-to-end tests using TypeScript (Playwright) and Go. Partnered closely with the test architect to deliver environment-specific test reports.\n",
      ],
    },
    {
      time: "January 2024 - May 2024",
      title: "Tech industry",
      subTitle: "Associate Software Engineer",
      icon: developer,
      detail: [
        "Achieved 1st place among peers in completing the software engineering training course. \n",
        "Received my first performance review with score of 3.5 out of 5, indicating above and beyond performance, with 4 being the threshold for promotion. \n",
        "Real industry experience with Typescript, React, Next.js, GraphQL, Java, Jenkins and Jira in an Agile team.",
      ],
    },
    {
      time: "Augest 2023 - December 2023",
      title: "FreeLancer",
      subTitle: "Volunteer Full-stack Developer",
      icon: developer,
      detail: [
        "Desgined and created websites for small bussinesses. Currently working on the offical website of a DC area Chinese chamber of commerce. ",
        "Led client meetings and served as the primary point of contact, effectively communicating project progress, requirements, and updates, ensuring client satisfaction and alignment with their goals",
      ],
    },
    {
      time: "March 2023 - July 2023",
      title: "Tech Industry",
      subTitle: "Software enigneering immersive resident",
      icon: developer,
      detail: [
        "Mentored over 60 students in a full-stack immersive program, providing code reviews, debugging guidance, and addressing complex technical issues. Helped the students to build their Full-stack development skills",
      ],
    },
    {
      time: "May 2022 - Feb 2023",
      title: "Bootcamper",
      subTitle: "36 weeks immersive coding program",
      icon: reading,
      detail:
        "After self-teaching for 1 year, I finally joined the Hack Reactor coding bootcamp and spent 800 hours on coding.",
    },

    {
      time: "Aug 2018 - Pesent",
      title: "Content Creater",
      subTitle: "Relocated to US",
      icon: location,
      detail:
        "After relocating from China to the US, I began sharing my lifestyle vlogs and photos on social media, and I have amassed a following of 75k on one platform.",
    },
    {
      time: "Jun 2011 - Jul 2018",
      title: "Banking Industry",
      icon: bank,
      subTitle: "Senior Morgage Specialist / Personal Banker",
      detail:
        "After graduating from university, I worked at a bank for 7 years and went through 3 different positions: teller, personal relationship banking manager, and senior mortgage loan specialist,\nDuring this time, I accumulated a great deal of financial knowledge and communication skills",
    },
  ];
  return (
    <>
      <div className="separator">Experiences</div>
      <h5 style={{ fontWeight: 300, margin: "1% 0 2% 0" }}>
        My previous jobs and experiences
      </h5>
      <VerticalTimeline layout="2-columns">
        {experiences.map((e, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "rgba(255,255,244,0.5)",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fdf7da" }}
            date={e.time}
            iconStyle={{
              background: "#fdf7da",
              color: "#000",
              padding: "0.5%",
            }}
            icon={<img src={e.icon} alt="icon" />}
          >
            <h3 className="vertical-timeline-element-title">{e.title}</h3>
            <h5 className="vertical-timeline-element-subtitle">{e.subTitle}</h5>

            <p>
              <span className="vertical-timeline-content">{e.detail}</span>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}

export default Experiences;
