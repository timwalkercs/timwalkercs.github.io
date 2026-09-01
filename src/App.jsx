import './App.css';
import Project from './components/Project';
import resumePdf from './resources/Timothy-Walker-Resume.pdf';
import pylonSS from './resources/pylon.png';
import mxSS from './resources/mxmatrix.png';
import printerSS from './resources/printfailure.jpg';

const links = [
  { label: 'Email', href: 'mailto:timothywalker2000@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/timwalkercs' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/timwalkercs' },
  { label: 'Resume', href: resumePdf },
];

const projects = [
  {
    title: 'Pylon',
    subtitle: 'Real-Time Voice & Chat Client',
    technologies: ['Electron', 'React', 'WebRTC', 'mediasoup', 'Rust'],
    thumbnail: pylonSS,
    altText: 'Pylon desktop client showing a voice channel alongside chat',
    bullets: [
      'Discord-style desktop client for live voice, video/screen sharing, and text chat — built with Electron and React, packaged with electron-vite.',
      'Real-time media over WebRTC (mediasoup SFU): a shared Web Audio mixing graph, RNNoise suppression, per-user volume controls, a native screen-share source and quality picker, and global OS-wide mute/deafen hotkeys.',
      'Full chat experience with markdown, syntax-highlighted code, emoji, attachments, editing, typing indicators, and infinite scroll-back — synced over a WebSocket event layer with heartbeat and session resumption.',
    ],
    repoUrl: 'https://github.com/Phloxin/client',
    siteUrl: 'https://phloxin.github.io/client/',
  },
  {
    title: 'MxMatrix',
    subtitle: 'Mechanical Keyboard Switch Database',
    technologies: ['React', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Azure'],
    thumbnail: mxSS,
    altText: 'MxMatrix web application showing switch details and filters',
    bullets: [
      'Full-stack web app that helps keyboard enthusiasts navigate a custom database of switches and the specs that shape typing feel and sound.',
      'Responsive React frontend with dynamic filtering across 300+ switches, gallery browsing, detail views, and state-driven UI updates.',
      'RESTful ASP.NET Core API backed by Entity Framework Core and SQL Server; frontend, API, and database deployed on Microsoft Azure.',
    ],
    repoUrl: 'https://github.com/timwalkercs/MxMatrix',
    siteUrl: 'https://mxmatrix.xyz',
  },
  {
    title: '3D Print Failure Detection',
    subtitle: 'Embedded AI / Computer Vision',
    technologies: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2'],
    thumbnail: printerSS,
    altText: 'A failed 3D print captured by the monitoring camera',
    bullets: [
      'Real-time failure detection that watches a printer camera stream over the network and can remotely pause the print, with a consecutive-frame debounce so one bad frame never halts a good print.',
      'Trained and tuned MobileNetV2-based classifiers, validating model polarity and confidence thresholds against live prints rather than trusting validation accuracy alone.',
      'Lightweight local web interface for live streaming and frame analysis with real-time Normal/Failure predictions.',
    ],
    repoUrl: 'https://github.com/timwalkercs/3D-Print-Failure-Detection',
  },
];

const skills = [
  { group: 'Languages', items: ['Java', 'C#', 'JavaScript', 'Python', 'SQL', 'T-SQL', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['React', '.NET Core', 'ASP.NET Core', 'Node.js', 'Electron', 'REST APIs'] },
  { group: 'Data', items: ['MySQL', 'MS SQL Server', 'Entity Framework Core', 'Azure Data Studio'] },
  { group: 'Tools', items: ['Azure', 'GitHub', 'Visual Studio', 'VS Code', 'Agentic & Generative AI'] },
];

function App() {
  return (
    <div className="App">
      <header className="Nav">
        <a className="Nav-brand" href="#top">
          tim<span>walker</span>
        </a>
        <nav className="Nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a className="Nav-resume" href={resumePdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </header>

      <main id="top" className="Shell">
        <section className="Hero">
          <p className="Eyebrow">Old Bridge, New Jersey</p>
          <h1 className="Hero-title">Timothy Walker</h1>
          <p className="Hero-role">Software Engineer</p>
          <p className="Hero-copy">
            I build things that have to work in real time — desktop clients, streaming
            media pipelines, and the APIs behind them. Rutgers CS grad who cares about
            interfaces that stay clear under pressure.
          </p>
          <div className="Hero-links">
            {links.map(({ label, href }) => (
              <a
                key={label}
                className="Button"
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <section id="work" className="Section">
          <h2 className="Section-title">Selected Work</h2>
          <div className="Section-body Projects">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="experience" className="Section">
          <h2 className="Section-title">Experience</h2>
          <div className="Section-body">
            <article className="Entry">
              <div className="Entry-head">
                <h3 className="Entry-title">AI Training Consultant — Software Engineering</h3>
                <p className="Entry-meta">Outlier · Jan 2024 – April 2026</p>
              </div>
              <ul className="Bullets">
                <li>
                  Authored reference solutions and step-by-step reasoning for complex
                  programming tasks in Java, Python, and C#, producing training data used
                  to improve frontier models' code generation.
                </li>
                <li>
                  Reviewed and ranked model-generated code for correctness, efficiency, and
                  edge-case handling, rewriting failing outputs into working solutions with
                  a diagnosis of the underlying error.
                </li>
                <li>
                  Designed adversarial prompts targeting known model weaknesses that fed
                  into subsequent training iterations.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="Section">
          <h2 className="Section-title">Skills</h2>
          <div className="Section-body Skills">
            {skills.map(({ group, items }) => (
              <div key={group} className="Skills-group">
                <h3 className="Skills-label">{group}</h3>
                <ul className="Tags">
                  {items.map((item) => (
                    <li key={item} className="Tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="Section">
          <h2 className="Section-title">Education</h2>
          <div className="Section-body">
            <article className="Entry">
              <div className="Entry-head">
                <h3 className="Entry-title">B.S. Computer Science</h3>
                <p className="Entry-meta">Rutgers University, New Brunswick NJ · 2018 – 2022</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="Footer">
        <p>Timothy Walker · timothywalker2000@gmail.com</p>
        <div className="Footer-links">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
