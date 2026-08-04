import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/Projects.css";

import film1 from "../../images/films/film1.png";
import film2 from "../../images/films/film2.png";
import film3 from "../../images/films/film3.png";
import film4 from "../../images/films/film4.png";
import film5 from "../../images/films/film5.png";
import film6 from "../../images/films/film6.png";

const projects = [
  {
    id: "Biblical Documentary",
    thumbnail: film1,
    category: "Biblical Documentary",
    title: "How did King Nebuchadnezzar destroy Solomon's temple and seize God's treasure?",
    runtime: "33 mins",
    description:
      "How King Nebuchadnezzar destroyed Solomon's Temple and seized God's sacred treasures in 586 BC.",
    tools: ["ChatGPT", "Claude", "Google Veo", "Capcut", "ElevenLabs"],
    link: "https://drive.google.com/file/d/17WU8aHZoAb899meDquWTrx9F0CA7ZvoG/preview",
  },
  {
    id: "Stickman Animations",
    thumbnail: film2,
    category: "Stickman Animations",
    title: "What Does Dying Feel Like?",
    runtime: "27 mins",
    description:
      "Dying is the one experience everyone gets and no one reports back from. Except the ones who did.",
    tools: ["Kling", "Claude", "Leonardo AI", "Premiere Pro", "ElevenLabs"],
    link: "https://drive.google.com/file/d/16B5sG4nbKZy6vNxZ50XNQYx_z7m-Pb5Q/preview",
  },
  {
    id: "AI cartoon animation",
    thumbnail: film3,
    category: "AI cartoon animation",
    title: "Tower of Babel",
    runtime: "12 mins",
    description:
      "A tense true-crime style trailer crafted to hook audiences within the first ten seconds.",
    tools: ["Google AI studio", "Seedance 2.0", "DaVinci Resolve", "Gemini"],
    link: "https://drive.google.com/file/d/1ohmMtIGWyzCtW8Sr6rrT_tfSBhp7Epso/preview",
  },
  {
    id: "Immersive progression animation video",
    thumbnail: film4,
    category: " Immersive progression animation video",
    title: "Your Life After Marrying Into a Billionaire Family",
    runtime: "26 mins",
    description:
      "You marry the woman you love, and then you find out what her last name really costs.",
    tools: ["Nano Banana", "Davinci resolve", "Google AI studio", "Capcut"],
    link: "https://drive.google.com/file/d/1ieBPjBiGsFXh8-XS-7OmqR_FM20T5x4R/preview",
  },
  {
    id: "Biblical story",
    thumbnail: film5,
    category: "Biblical story",
    title: "Why did God turn King Nebuchadnezzar into an animal?",
    runtime: "16 mins",
    description:
      "Explore one of the most mysterious and powerful stories from the Bible—the transformation of King Nebuchadnezzar into an animal.",
    tools: ["Gemini", "Midjourney", "Kling", "Capcut", "Chatterbox" ],
    link: "https://drive.google.com/file/d/104IpVuRxcRjc0dH1GbndA-Amyu9tstMK/preview",
  },
  {
    id: "Youtube Short",
    thumbnail: film6,
    category: "Youtube Short",
    title: "Why did fire fall from heaven and consume a soaking wet altar?",
    runtime: "2 mins",
    description:
      "A short reel explaining the biblical events of Elijah vs 450 Baal Prophets.",
    tools: ["Flux AI", "Runway", "Imagine Grok", "ElevenLabs", "Premiere Pro"],
    link: "https://drive.google.com/file/d/1jA9RMgruRZKtsY5cuZJqwHLaSYnweRXz/preview",
  },
];

// If the link is a local video file, play it natively; otherwise embed (Drive/Vimeo)
const isVideoFile = (url) => /\.(mp4|webm|ogg)$/i.test(url);

const Projects = () => {
  const [activeFilm, setActiveFilm] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    AOS.refresh();
  }, []);

  // Lock page scroll while the player is open
  useEffect(() => {
    document.body.style.overflow = activeFilm ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeFilm]);

  // Close with Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActiveFilm(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg">
        <div className="projects-blob projects-blob-blue" />
        <div className="projects-blob projects-blob-purple" />
        <div className="projects-grid-lines" />

        <span className="projects-float projects-float-1">01001</span>
        <span className="projects-float projects-float-2">{"</>"}</span>
        <span className="projects-float projects-float-3">10110</span>
        <span className="projects-float projects-float-4">AI</span>
        <span className="projects-float projects-float-5">{"{ }"}</span>
        <span className="projects-float projects-float-6">11001</span>

        <svg
          className="projects-circuit"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L180,120 L180,220 L420,220 L420,90 L620,90 L620,320"
            fill="none"
            stroke="url(#projectsCircuitGradient)"
            strokeWidth="1"
          />
          <path
            d="M800,470 L600,470 L600,360 L360,360 L360,510 L110,510"
            fill="none"
            stroke="url(#projectsCircuitGradient)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient
              id="projectsCircuitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="projects-container">
        <div className="projects-heading" data-aos="fade-up">
          <span className="projects-eyebrow">
            <span className="projects-eyebrow-dot" />
            Featured AI Films
            <span className="projects-eyebrow-dot" />
          </span>
          <h2 className="projects-title">
            Stories Created with Artificial Intelligence
          </h2>
          <p className="projects-subtitle">
            A curated collection of AI-generated documentaries, commercials,
            trailers and cinematic productions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="film-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="film-card-media"
                onClick={() => setActiveFilm(project)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="film-card-thumbnail"
                  loading="lazy"
                />
                <div className="film-card-overlay" />

                <span className="film-card-badge">{project.category}</span>
                <span className="film-card-runtime">{project.runtime}</span>

                <div className="film-card-play">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="film-card-body">
                <h3 className="film-card-title">{project.title}</h3>
                <p className="film-card-description">{project.description}</p>

                <div className="film-card-tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className="film-tool-chip">
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  className="film-card-button"
                  onClick={() => setActiveFilm(project)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Film
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CINEMATIC POPUP PLAYER ===== */}
      {activeFilm && (
        <div className="film-modal-backdrop" onClick={() => setActiveFilm(null)}>
          <div className="film-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="film-modal-close"
              onClick={() => setActiveFilm(null)}
              aria-label="Close player"
            >
              ✕
            </button>

            <div className="film-modal-player">
              {isVideoFile(activeFilm.link) ? (
                <video src={activeFilm.link} controls autoPlay />
              ) : (
                                <iframe
                  src={activeFilm.link}
                  title={activeFilm.title}
                  allow="autoplay; fullscreen"
                />
              )}
            </div>

            <div className="film-modal-info">
              <h3>{activeFilm.title}</h3>
              <p>{activeFilm.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;