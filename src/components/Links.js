import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

function Links() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/yuchen-raina-pan/"
        style={{ padding: 1, margin: 1 }}
      >
        <img
          className="scaled-img"
          height={40}
          width={40}
          src={linkedin}
          alt="linkedin"
          title="LinkedIn"
        />
      </a>
      <a href="https://github.com/pyc0422" style={{ padding: 1, margin: 1 }}>
        <img
          className="scaled-img"
          height={40}
          width={40}
          src={github}
          alt="github"
          title="github"
        />
      </a>
    </div>
  );
}

export default Links;
