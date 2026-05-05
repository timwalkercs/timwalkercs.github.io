import './App.css';
import Project from './components/Project';
import resumePdf from './resources/Timothy-Walker-Resume.pdf';
import mxSS from './resources/mxmatrix.png';
import printerSS from './resources/printfailure.jpg';

function App() {
  return (
    <div className="App">
      <main className="App-home">
        <section className="App-intro">
          <p className="App-intro-top">
            My name is <span className="App-name">Tim</span>
          </p>
          <p className="App-intro-copy">
            I’m a developer building clean, intuitive web experiences. This section is set
            up for a short intro about the projects and skills I bring to the table.
          </p>
          <div className="App-links">
            <a
              href="mailto:timothywalker2000@gmail.com"
              className="App-link-card"
              aria-label="Email"
            >
              <span className="App-link-icon">📧</span>
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/timwalkercs"
              target="_blank"
              rel="noreferrer"
              className="App-link-card"
              aria-label="GitHub"
            >
              <span className="App-link-icon">🔗</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/timwalkercs"
              target="_blank"
              rel="noreferrer"
              className="App-link-card"
              aria-label="GitHub"
            >
              <span className="App-link-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="App-link-card"
              aria-label="Resume"
            >
              <span className="App-link-icon">📄</span>
              <span>Resume</span>
            </a>
          </div>
        </section>

        <section className="App-projects">
          <h2>Some of my projects...</h2>
          <Project
            title="Mechanical Keyboard Switch Database"
            technologies={[
              '.NET',
              'React',
              'API Development',
            ]}
            description="MxMatrix is a web-based application designed for mechanical keyboard enthusiasts to 
            explore, filter, and view detailed information about mechanical keyboard switches. Whether you're building a custom board or 
            researching switch specs, MxMatrix makes it easy to find the right switch for your needs."
            thumbnail={mxSS}
            altText="Screenshot of MxMatrix application showing switch details and filters"
          />
          <Project
            title="3D Printer Failure Detection System"
            technologies={[
              'Python',
              'TensorFlow',
              'Machine Learning',
            ]}
            description="Live 3D printer monitoring software with real-time failure detection."
            thumbnail={printerSS}
            altText="Image of a 3D printer failure."
          />
          
          
        </section>
      </main>
    </div>
  );
}

export default App;
