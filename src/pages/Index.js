import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Hanzla Munir — Frontend Engineer building responsive, performance-optimized web interfaces with React, Next.js, and modern JavaScript."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Frontend Engineer</Link></h2>
          <p>
            Building responsive, performant web interfaces with React and modern JavaScript.
          </p>
        </div>
      </header>
      <p>
        I&apos;m a Frontend Engineer with 2+ years of
        experience building responsive, performance-optimized
        web applications using React, Next.js, and modern
        JavaScript. Currently shipping production features
        at <a href="https://informly.com/" rel="noreferrer" target="_blank">Informly</a>,
        focused on reusable component architecture,
        centralized state management, and UI performance
        optimization.
      </p>
      <p>
        My focus is on clean component design, scalability,
        and smooth user experiences. I work with AI-assisted
        tooling (Cursor, GitHub Copilot, Claude) to accelerate
        iteration without compromising code quality, and I
        partner closely with backend teams to ship integrated
        features end-to-end.
      </p>
      <h3>What I Deliver</h3>
      <ul>
        <li>Reusable React component libraries with clean separation of concerns</li>
        <li>
          Performance-optimized UIs through code-splitting,
          memoization, and efficient state management
        </li>
        <li>Responsive, mobile-first interfaces that look great on every device</li>
        <li>Seamless integration with REST APIs and modern backend services</li>
        <li>
          AI-assisted development workflows that boost
          iteration speed without sacrificing quality
        </li>
      </ul>
      <h3>Technical Skills</h3>
      <p>
        <strong>Languages:</strong> JavaScript (ES6+),
        TypeScript, HTML5, CSS3
        <br />
        <strong>Frameworks/Libraries:</strong> React.js,
        Next.js, Redux, React Hooks, Context API, React Router
        <br />
        <strong>Styling:</strong> Tailwind CSS, SASS/SCSS,
        CSS Modules, Styled Components, Responsive &amp;
        Mobile-first Design
        <br />
        <strong>Tools/Build:</strong> Vite, Webpack, Git,
        GitHub, npm/yarn, VS Code, Chrome DevTools, ESLint,
        Prettier
        <br />
        <strong>APIs/Data:</strong> REST APIs, Firebase,
        Axios, JSON
        <br />
        <strong>Practices:</strong> Component-Driven Design,
        Performance Optimization, Code Review, Agile/Scrum
        <br />
        <strong>AI Tooling:</strong> Cursor, GitHub Copilot,
        Claude, AI-Assisted Development Workflows
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Resume</Link>
        </li>
        <li>
          <Link to="/projects" className="button">Projects</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hanzlamunir" rel="noreferrer" target="_blank" className="button">LinkedIn</a>
        </li>
        <li>
          <Link to="/contact" className="button">Get in Touch</Link>
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
