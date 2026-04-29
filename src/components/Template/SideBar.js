import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <Link to="/">
          <h2>Hanzla Munir</h2>
        </Link>
        <p><a href="mailto:mehanzlamunir1@gmail.com">mehanzlamunir1@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Hanzla. Frontend Engineer
        at <a href="https://informly.com/" rel="noreferrer" target="_blank">Informly</a>,
        building responsive, performance-optimized React web apps.
        2+ years of experience with JavaScript, React, Next.js, Redux, and modern frontend tooling.
        Diploma in Website Development from <a href="https://www.aptech-pak.com/" rel="noreferrer" target="_blank">Aptech Pakistan</a>.
        Based in <a href="https://en.wikipedia.org/wiki/Lahore" rel="noreferrer" target="_blank">Lahore, Pakistan</a>.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button sidebar-btn">About</Link>
        </li>
        <li>
          <Link to="/resume" className="button sidebar-btn">Resume</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Hanzla Munir <Link to="/">hanzlamunir.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
