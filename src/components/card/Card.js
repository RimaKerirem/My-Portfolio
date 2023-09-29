import "./card.css";

function Card({ project }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={project.image} alt="" />
      </div>
      <div className="card-content">
        <h3 className="title">{project.title}</h3>
        <p className="languages">{project.languages}</p>
        <div className="buttons">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="demo"
          >
            Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="code"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
