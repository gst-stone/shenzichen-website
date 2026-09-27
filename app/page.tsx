const projects = [
  {
    number: "01",
    title: "最后一格",
    type: "Browser Game",
    description:
      "A fast tactical arena where every step changes the battlefield.",
    href: "https://github.com/gst-stone/lastspace",
  },
  {
    number: "02",
    title: "寿元将尽",
    type: "Cultivation Game",
    description:
      "A xianxia-inspired experiment about time, choices, and the price of immortality.",
    href: "https://github.com/gst-stone/timeOut",
  },
  {
    number: "03",
    title: "AI × Eastern Culture",
    type: "Experiment",
    description:
      "Exploring how code, generative AI, and Eastern aesthetics can become digital products.",
    href: "#",
  },
];

const areas = ["PROGRAMMING", "AI", "GAMES", "EASTERN CULTURE"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="SHENZICHEN home">
          SZ
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="ink-orbit" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">PROGRAMMER · AI · GAMES · EASTERN CULTURE</p>
          <h1>
            Building
            <br />
            <span>digital worlds.</span>
          </h1>
          <p className="hero-description">
            I use code, AI, and imagination to build software, games, and
            experiments inspired by technology and Eastern culture.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore projects <span>↘</span>
            </a>
            <a className="button button-ghost" href="#about">
              About me
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <span>01</span>
          <p>CODE</p>
          <p>CREATE</p>
          <p>EXPLORE</p>
        </div>

        <div className="scroll-note">SCROLL TO EXPLORE ↓</div>
      </section>

      <section className="marquee" aria-label="Areas of work">
        {areas.map((area) => (
          <span key={area}>{area} ·</span>
        ))}
      </section>

      <section id="projects" className="section projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Things I&apos;m building.</h2>
          </div>
          <p className="section-note">
            Small experiments today, products tomorrow.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              key={project.number}
            >
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
              <span className="project-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>
            From backend
            <br />
            systems to
            <br />
            <span>digital worlds.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a software developer interested in the intersection of
            engineering, AI, games, and Eastern culture.
          </p>
          <p>
            This site is a living notebook for the things I build, test, and
            learn along the way.
          </p>
        </div>
      </section>

      <section className="section philosophy">
        <p className="eyebrow">NOW EXPLORING</p>
        <div className="philosophy-line">
          <span>Code</span>
          <i>×</i>
          <span>AI</span>
          <i>×</i>
          <span>Games</span>
          <i>×</i>
          <span>东方</span>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>
          <h2>See you in the next experiment.</h2>
        </div>
        <div className="footer-meta">
          <a href="https://github.com/gst-stone" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <span>SHENZICHEN.WEBSITE</span>
        </div>
      </footer>
    </main>
  );
}
