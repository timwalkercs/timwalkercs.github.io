import './Project.css';

function Project({
  title,
  subtitle,
  technologies,
  bullets,
  thumbnail,
  altText,
  repoUrl,
  siteUrl,
}) {
  return (
    <article className="Project">
      <div className="Project-media">
        <img src={thumbnail} alt={altText || title} loading="lazy" />
      </div>

      <div className="Project-content">
        <header className="Project-head">
          <h3 className="Project-title">{title}</h3>
          {subtitle && <p className="Project-subtitle">{subtitle}</p>}
        </header>

        <ul className="Bullets">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <ul className="Tags">
          {technologies.map((tech) => (
            <li key={tech} className="Tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="Project-links">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {siteUrl && (
            <a href={siteUrl} target="_blank" rel="noreferrer">
              Website <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
