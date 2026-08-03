import "../../styles/Toolkit.css";

// AI Models (LLMs)
import chatgpt from "../../images/tools/chatgpt.jpg";
import claude from "../../images/tools/claude.jpg";
import gemini from "../../images/tools/gemini.jpg";
import grok from "../../images/tools/grok.jpg";

// Image & Video Generation
import veo from "../../images/tools/veo.jpg";
import kling from "../../images/tools/kling.jpg";
import midjourney from "../../images/tools/midjourney.jpg";
import leonardo from "../../images/tools/leonardo.webp";
import runway from "../../images/tools/runway.jpg";
import seedance from "../../images/tools/seedance.png";
import sora from "../../images/tools/Sora.webp";
import nanoBanana from "../../images/tools/banana.jpg";

// Video Production
import premiere from "../../images/tools/premierpro.jpg";
import davinci from "../../images/tools/davinci.jpg";
import capcut from "../../images/tools/capcut.jpg";

// Design
import photoshop from "../../images/tools/photoshop.jpg";
import canva from "../../images/tools/canva.jpg";
import figma from "../../images/tools/figma.jpg";

// Voice
import elevenlabs from "../../images/tools/elevenlabs.jpg";
import chatterbox from "../../images/tools/chatterbox.png";
import studio from "../../images/tools/studio.jpg";

// Research
import vidiq from "../../images/tools/vidiq.png";


const toolkitCategories = [
  

  {
    id: "image-video-generation",
    icon: "✨",
    label: "Image & Video Generation Tools",
    tools: [
      { name: "Google Veo", logo: veo },
      { name: "Sora", logo: sora },
      { name: "Nano Banana", logo: nanoBanana },
      { name: "Kling AI", logo: kling },
      { name: "Midjourney", logo: midjourney },
      { name: "Leonardo AI", logo: leonardo },
      { name: "Runway ML", logo: runway },
      { name: "Seedance", logo: seedance },
      { name: "Imagine Grok", logo: grok },
    ],
  },

{
    id: "ai-models",
    icon: "🤖",
    label: "Research & Writing Tools",
    tools: [
      { name: "ChatGPT", logo: chatgpt },
      { name: "Claude", logo: claude },
      { name: "Gemini", logo: gemini },
      { name: "Grok", logo: grok },
      { name: "vidIQ", logo: vidiq },
    ],
  },

  {
    id: "video-production",
    icon: "🎬",
    label: "Video Editing & Thumbnail creation",
    tools: [
      { name: "Adobe Premiere Pro", logo: premiere },
      { name: "DaVinci Resolve", logo: davinci },
      { name: "CapCut Pro", logo: capcut },
      { name: "Adobe Photoshop", logo: photoshop },
      { name: "Canva Pro", logo: canva },
      { name: "Figma", logo: figma },
    ],
  },

  {
    id: "voice-audio",
    icon: "🎙️",
    label: "Voice Generation Tools",
    tools: [
      { name: "ElevenLabs", logo: elevenlabs },
      { name: "Chatterbox", logo: chatterbox },
      { name: "Google AI Studio", logo: studio },
    ],
  },
];


const About = () => {
  return (
    <section className="about-section">

      <div className="about-bg-glow"></div>

      <div className="toolkit-container">

        <div className="toolkit-header">
          <span>
            ⚡ MY CREATIVE STACK
          </span>
          <h2>
            Tools Behind The Vision
          </h2>
          <p>
            A combination of artificial intelligence,
            editing software, and creative platforms
            used to bring cinematic ideas to life.
          </p>
        </div>

        <div className="toolkit-grid">
          {toolkitCategories.map((category) => (
            <div
              className="toolkit-category"
              key={category.id}
            >
              <div className="category-title">
                <span className="category-icon">
                  {category.icon}
                </span>
                <h3>
                  {category.label}
                </h3>
              </div>

              <div className="tools-grid">
                {category.tools.map((tool) => (
                  <div
                    className="tool-card"
                    key={tool.name}
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                    />
                    <p>
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;