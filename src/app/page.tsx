
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "TYPE DESIGN",
    title: "MONSTER BRUTAL",
    description: "Aggressive typography for the unconventional.",
    className: "art-monster",
    visual: "MB",
    year: "2026",
  },
  {
    number: "02",
    category: "GRAPHIC DESIGN",
    title: "PAINTING",
    description: "Raw brush strokes. Unfiltered expression.",
    className: "art-painting",
    visual: "PAINT",
    year: "2026",
  },
  {
    number: "03",
    category: "EXPERIMENTAL TYPE",
    title: "MARKER XPRAY",
    description: "Street culture meets handmade typography.",
    className: "art-marker",
    visual: "SPRAY!",
    year: "2026",
  },
];

const fonts = [
  { name: "BIG BRUSH", style: "Heavy / Brush", sample: "Bb" },
  { name: "CLOUDIE", style: "Rounded / Display", sample: "Cc" },
  { name: "CRAYON", style: "Handmade / Texture", sample: "Aa" },
  { name: "SOFT MARKER", style: "Rounded / Marker", sample: "Mm" },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <Link href="#home" className="brand">
          F<span>✳</span>STUDIO
        </Link>

        <nav className="nav-links">
          <Link href="#works">WORKS</Link>
          <Link href="#foundry">FONT FOUNDRY</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#contact">CONTACT</Link>
        </nav>

        <Link href="#contact" className="nav-cta">
          LET&apos;S TALK <span>↗</span>
        </Link>

        <Link href="#works" className="mobile-menu">
          MENU +
        </Link>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-topline">
          <span>INDEPENDENT CREATIVE STUDIO</span>
          <span>JAKARTA, INDONESIA — EST. 2026</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              DESIGN WITHOUT BOUNDARIES
            </p>

            <h1>
              WE MAKE
              <br />
              <span className="outline-text">WEIRD</span>
              <br />
              <span className="lime-text">THINGS.</span>
            </h1>

            <p className="hero-description">
              An independent creative playground exploring typography,
              digital art, visual culture and unexpected ideas.
            </p>

            <Link href="#works" className="primary-button">
              EXPLORE OUR WORLD <span>↘</span>
            </Link>
          </div>

          <div className="hero-art" aria-label="Abstract experimental artwork">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-circle">
              <div className="art-circle-inner" />
            </div>
            <div className="art-cross">✳</div>
            <div className="art-side-label">CREATIVITY IN MOTION — 001</div>
            <div className="art-index">F / 001</div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE ↓</span>
          <span>ART / TYPE / EXPERIMENTS</span>
          <span>01 — 06</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-label="Art, type, design and experiments">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index}>
              ART <b>✳</b> TYPE <b>✳</b> DESIGN <b>✳</b> EXPERIMENTS <b>✳</b>
              DIGITAL CULTURE <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="intro section-padding">
        <p className="section-label">[ 001 — WHAT WE DO ]</p>
        <div className="intro-content">
          <h2>
            NOT HERE TO
            <br />
            FIT <span>IN.</span>
          </h2>
          <div className="intro-description">
            <p>
              FUNTASY STUDIO is an independent creative universe built
              around curiosity, experimentation and visual expression.
            </p>
            <p>
              We create original typefaces, artwork and digital experiences
              for people who see the world a little differently.
            </p>
            <span className="intro-symbol">✳</span>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="works section-padding" id="works">
        <div className="section-heading">
          <div>
            <p className="section-label">[ 002 — THE PORTFOLIO ]</p>
            <h2>SELECTED <span>WORKS.</span></h2>
          </div>
          <span className="section-count">2026 / VOL. 01</span>
        </div>

        <div className="works-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.number}>
              <div className={`work-visual ${project.className}`}>
                <span className="work-visual-index">{project.number}</span>
                <span className="work-visual-type">{project.visual}</span>
                <span className="work-visual-plus">↗</span>
              </div>

              <div className="work-meta">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span className="work-description">
                    {project.description}
                  </span>
                </div>
                <span className="work-year">{project.year}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="works-footer">
          <span>MORE EXPERIMENTS COMING SOON</span>
          <span>03 SELECTED PROJECTS ↗</span>
        </div>
      </section>

      {/* FONT FOUNDRY */}
      <section className="foundry section-padding" id="foundry">
        <div className="section-heading">
          <div>
            <p className="section-label">[ 003 — TYPE DEPARTMENT ]</p>
            <h2>FONT <span>FOUNDRY.</span></h2>
          </div>
          <span className="section-count">INDEPENDENT TYPE DESIGN</span>
        </div>

        <p className="foundry-intro">
          Original typefaces for loud ideas and bold personalities.
          Made with curiosity, crafted with character.
        </p>

        <div className="font-list">
          {fonts.map((font, index) => (
            <article className="font-row" key={font.name}>
              <span className="font-number">0{index + 1}</span>
              <div>
                <h3>{font.name}</h3>
                <p>{font.style}</p>
              </div>
              <span className="font-sample">{font.sample}</span>
              <span className="font-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="foundry-footer">
          <span>TYPE IS A VISUAL LANGUAGE.</span>
          <span>MORE TYPEFACES IN THE WORKS ↗</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-padding" id="about">
        <p className="section-label">[ 004 — BEHIND THE STUDIO ]</p>
        <div className="about-content">
          <h2>
            A LITTLE
            <br />
            BIT <span>ODD.</span>
            <br />
            A LOT OF
            <br />
            <span>IMAGINATION.</span>
          </h2>

<div className="about-side">
  <div className="about-symbol">F✳</div>
  <p>
    We believe good design doesn&apos;t always need to behave.
    Sometimes it needs to challenge, surprise and make people
    feel something.
  </p>
  <span>INDEPENDENT BY NATURE. CREATIVE BY DEFAULT.</span>
</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-padding" id="contact">
        <p className="section-label">[ 005 — START SOMETHING ]</p>
        <h2>
          GOT A
          <br />
          <span>WEIRD</span> IDEA?
        </h2>
        <div className="contact-bottom">
          <p>
            Have a project, collaboration or just want to say hello?
            We&apos;re always open to interesting conversations.
          </p>
          <a
            className="contact-button"
            href="mailto:hello@funtasystudio.com"
          >
            SAY HELLO <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Link href="#home" className="footer-brand">
          F<span>✳</span>STUDIO
        </Link>
        <p>INDEPENDENT CREATIVE UNIVERSE © 2026</p>
        <Link href="#home" className="back-top">
          BACK TO TOP ↑
        </Link>
      </footer>
    </main>
  );
}
