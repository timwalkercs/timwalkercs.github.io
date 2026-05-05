import './Project.css';

function Project({ title, technologies, description, thumbnail, altText }) {
  const techText = Array.isArray(technologies)
    ? technologies.join(', ')
    : technologies;

  return (
    <article className="Project">
      <div className={`Project-thumbnail ${thumbnail ? '' : 'Project-thumbnail--empty'}`}>
        {thumbnail ? (
          <img src={thumbnail} alt={altText || title} className="Project-thumbnailImage" />
        ) : (
          <div className="Project-thumbnailPlaceholder">Thumbnail</div>
        )}
      </div>

      <div className="Project-content">
        <h2 className="Project-title">{title}</h2>
        <p className="Project-tech">{techText}</p>
        <p className="Project-description">{description}</p>
      </div>
    </article>
  );
}

export default Project;
