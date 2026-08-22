import { motion } from "motion/react"
import { useState } from "react"

const projects = [
  {
    number: "01",
    label: "ACCESSIBILITY & AI",
    title: "S.A.R.A.H.",
    headline: "Helping people understand an environment they can't see.",
    description:
      "A multimodal assistive AI prototype that combines proactive hazard detection with an on-demand visual voice assistant for people with visual impairments.",
    tags: ["Computer Vision", "Gemini", "Python", "Accessibility"],
    status: "Completed",
    image: "/sarah-preview.png",
    link: "https://github.com/esutaria/SARAH",
    demo: "https://youtu.be/WMObGMByjl4",
  },
  {
    number: "02",
    label: "PRODUCT & AI",
    title: "SenseAI",
    headline: "Turning customer noise into product signal.",
    description:
      "A Voice of Customer intelligence platform that transforms fragmented feedback into evidence-backed product insights.",
    tags: ["Product", "AI", "NLP", "Full Stack"],
    status: "Building",
    image: null,
    link: "#",
    demo: null,
  },
  {
    number: "03",
    label: "HEALTHCARE & ML",
    title: "Care Navigation",
    headline: "Helping people understand the right next step in care.",
    description:
      "An AI-assisted healthcare navigation system focused on helping users distinguish between self-care, routine care, and situations that may need more urgent attention.",
    tags: ["Healthcare", "AI", "ML Systems", "Product"],
    status: "Exploring",
    image: null,
    link: "#",
    demo: null,
  },
]

const experience = [
  {
    year: "2026",
    company: "Western Cape Department of Health & Wellness",
    role: "Service Design & Digital Health Product Intern",
    detail:
      "Built digital tools for clinical workflows and translated stakeholder needs into systems used in public healthcare environments.",
    tags: ["Digital Health", "Product", "Power Apps"],
  },
  {
    year: "2026",
    company: "PlayMaker",
    role: "Data & Artificial Intelligence Intern",
    detail:
      "Built an AI-powered pricing pipeline using Gemini, FastAPI, and Firebase to automate recommendations across historical business data.",
    tags: ["AI", "FastAPI", "Firebase"],
  },
  {
    year: "2025",
    company: "Jamf",
    role: "Software Engineering Intern",
    detail:
      "Shipped backend and API security features in Kotlin within a production Agile engineering environment.",
    tags: ["Kotlin", "AWS", "APIs"],
  },
  {
    year: "2024",
    company: "Axon",
    role: "Firmware Automation Intern",
    detail:
      "Built internal automation tooling inside a firmware and hardware engineering environment.",
    tags: ["Python", "Automation", "Hardware"],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Start with people",
    text:
      "Understand the users, workflows, incentives, context, and constraints before deciding what to build.",
  },
  {
    number: "02",
    title: "Make ambiguity concrete",
    text:
      "Turn messy problems into requirements, tradeoffs, priorities, and a plan that teams can act on.",
  },
  {
    number: "03",
    title: "Build enough to learn",
    text:
      "Prototype quickly, connect the full system, and test the assumptions that actually matter.",
  },
  {
    number: "04",
    title: "Let evidence change the answer",
    text:
      "Measure what works, understand what doesn't, and iterate instead of defending the first idea.",
  },
]

function App() {
  return (
    <main className="min-h-screen text-[#241720]">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#fbf7f2]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.18em]"
          >
            EESHA SUTARIA
          </a>

          <div className="flex gap-6 text-sm">
            <a href="#work" className="transition hover:opacity-50">
              Work
            </a>

            <a href="#experience" className="transition hover:opacity-50">
              Experience
            </a>

            <a href="#about" className="transition hover:opacity-50">
              About
            </a>

            <a href="#contact" className="transition hover:opacity-50">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-[#6b5cff]"
            >
              PRINCETON ECE · SOFTWARE · AI · PRODUCT
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
            >
              I build intelligent products for{" "}
              <span className="font-serif italic text-[#8a3158]">
                real-world problems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-black/60"
            >
              I’m Eesha — an engineer and product builder working across
              software, AI, healthcare, accessibility, and intelligent
              systems.
            </motion.p>

            <p className="mt-4 font-serif text-lg italic text-[#8a3158]/75">
              from perception to decisions.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="rounded-full bg-[#241720] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Explore my work ↓
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition hover:bg-white"
              >
                Resume ↗
              </a>
            </motion.div>
          </div>

          <SignalGraphic />
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <SectionLabel>SELECTED WORK</SectionLabel>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              From messy problems to{" "}
              <span className="font-serif italic text-[#8a3158]">
                working products.
              </span>
            </h2>
          </div>

          <div className="space-y-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 transition duration-500 hover:-translate-y-1 hover:bg-white"
              >
                <div
                  className={`grid ${
                    project.image
                      ? "lg:grid-cols-[0.9fr_1.1fr]"
                      : ""
                  }`}
                >
                  {project.image && (
                    <div className="relative min-h-[360px] overflow-hidden bg-[#2b1430]">
                      <img
                        src={project.image}
                        alt={`${project.title} prototype`}
                        className="h-full w-full object-contain p-4 transition duration-700 group-hover:scale-[1.015]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                      <motion.div
                        className="absolute left-0 top-0 h-[2px] w-full bg-[#a993ff]/70"
                        animate={{
                          top: ["0%", "100%", "0%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-6 left-6 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#241720] transition hover:scale-105"
                        >
                          ▶ Watch demo
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex min-h-[360px] flex-col justify-between p-8 md:p-10 lg:p-12">
                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-xs text-black/35">
                            {project.number}
                          </p>

                          <p className="mt-2 text-sm font-medium tracking-[0.18em] text-[#6b5cff]">
                            {project.label}
                          </p>
                        </div>

                        <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/45">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="mt-10 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 font-serif text-2xl italic leading-snug text-[#8a3158]">
                        {project.headline}
                      </p>

                      <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
                        {project.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#f3ede7] px-3 py-1.5 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.link === "#" ? (
                      <p className="mt-10 text-sm font-medium text-black/40">
                        Case study coming soon
                      </p>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-10 inline-block text-sm font-medium transition hover:translate-x-1"
                      >
                        Explore project →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DanceDivider number={1} />

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <SectionLabel>EXPERIENCE</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Building beyond the{" "}
                <span className="font-serif italic text-[#8a3158]">
                  classroom.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-black/50">
                Software, AI, healthcare, and hardware — across startups,
                public systems, and engineering teams.
              </p>
            </div>

            <div>
              {experience.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="grid gap-5 border-t border-black/10 py-8 md:grid-cols-[90px_1fr]"
                >
                  <div className="flex items-start gap-3">
                    <p className="text-sm text-black/35">
                      {item.year}
                    </p>

                    <div className="mt-2 h-2 w-2 rounded-full bg-[#8a3158]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">
                      {item.company}
                    </h3>

                    <p className="mt-1 font-serif text-lg italic text-[#8a3158]">
                      {item.role}
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-black/50">
                      {item.detail}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f3ede7] px-3 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DanceDivider number={2} />

      {/* PROCESS */}
      <section id="process" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel>HOW I BUILD</SectionLabel>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                I like problems where the answer{" "}
                <span className="font-serif italic text-[#8a3158]">
                  isn't obvious.
                </span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-[#8a3158]/15 sm:block" />

              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="relative grid gap-5 border-t border-black/10 py-7 sm:grid-cols-[60px_1fr]"
                >
                  <div className="relative z-10">
                    <motion.div
                      whileInView={{
                        backgroundColor: "#8a3158",
                        color: "#ffffff",
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.12,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#fbf7f2] text-xs"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-black/50">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DanceDivider number={3} />

      {/* ABOUT */}
      <section id="about" className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
          >
            <SectionLabel>A LITTLE MORE HUMAN</SectionLabel>

            <h2 className="mt-5 font-serif text-5xl italic tracking-[-0.04em] text-[#8a3158] sm:text-6xl">
              Engineer.
              <br />
              Builder.
              <br />
              Storyteller.
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xl leading-9 text-black/65">
              I study Electrical & Computer Engineering at Princeton and
              love building technology where software has to understand
              people, environments, or messy real-world systems.
            </p>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Some of how I think about building comes from somewhere very
              different: more than a decade of Bharatanatyam. Dance taught
              me precision, storytelling, iteration, and how tiny details
              can completely change an experience.
            </p>

            <p className="mt-6 text-lg leading-8 text-black/55">
              I bring that same curiosity to technology — especially AI,
              healthcare, accessibility, and products designed around real
              human problems.
            </p>

            <div className="mt-12">
              <p className="text-xs tracking-[0.2em] text-black/35">
                CURRENTLY
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["building", "SenseAI"],
                  ["learning", "ML systems"],
                  ["dancing", "Bharatanatyam"],
                  ["craving", "tiramisu"],
                ].map(([label, value], index) => (
                  <motion.div
                    key={label}
                    whileHover={{
                      y: -4,
                      rotate:
                        index % 2 === 0
                          ? -0.5
                          : 0.5,
                    }}
                    className="rounded-2xl border border-black/10 bg-white/55 px-5 py-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-black/35">
                      {label}
                    </p>

                    <p className="mt-1 font-serif text-xl italic text-[#8a3158]">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DanceDivider number={4} />

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#241720] px-8 py-16 text-white md:px-14 md:py-20">
          <p className="text-sm tracking-[0.2em] text-white/45">
            LET’S CONNECT
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            I’m always looking for problems worth{" "}
            <span className="font-serif italic text-[#dca6bf]">
              thinking deeply about.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
            Software, AI, healthcare, product ideas, research — or
            something completely unexpected.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:eeshasutaria@gmail.com"
              className="underline underline-offset-4 transition hover:text-white/60"
            >
              Email ↗
            </a>

            <a
              href="https://www.linkedin.com/in/eesha-s-994a662a1"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:text-white/60"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/esutaria"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:text-white/60"
            >
              GitHub ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:text-white/60"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-black/40">
        Designed, built & choreographed by Eesha Sutaria.
      </footer>
    </main>
  )
}

/* -------------------------------------------------------------------------- */
/* HERO DANCE / SKILLS                                                       */
/* -------------------------------------------------------------------------- */

function SignalGraphic() {
  const [activeStep, setActiveStep] = useState(0)

  const leftSkills = [
    {
      title: "AI Systems",
      detail: "LLMs · Multimodal AI",
    },
    {
      title: "Full-Stack",
      detail: "React · APIs · Backend",
    },
    {
      title: "Product Strategy",
      detail: "PRDs · Prioritization",
    },
  ]

  const rightSkills = [
    {
      title: "Computer Vision",
      detail: "OpenCV · Gemini Vision",
    },
    {
      title: "Healthcare",
      detail: "Digital Health · Clinical Systems",
    },
    {
      title: "ML + Evaluation",
      detail: "Models · Evals · Evidence",
    },
  ]

  function handleVideoTime(
    event: React.SyntheticEvent<HTMLVideoElement>
  ) {
    const video = event.currentTarget

    if (!video.duration) return

    const progress =
      video.currentTime / video.duration

    if (progress < 0.34) {
      setActiveStep(0)
    } else if (progress < 0.67) {
      setActiveStep(1)
    } else {
      setActiveStep(2)
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto w-full max-w-[760px]"
    >
      <div className="grid grid-cols-[1fr_0.9fr_1fr] items-center gap-3">
        {/* LEFT */}
        <div className="flex flex-col gap-12">
          {leftSkills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              detail={skill.detail}
              active={index === activeStep}
              side="left"
            />
          ))}
        </div>

        {/* VIDEO */}
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-[3rem]">
            <video
              src="/dance-skills.mp4"
              autoPlay
              muted
              loop
              playsInline
              onLoadedMetadata={(event) => {
                event.currentTarget.playbackRate = 0.58
              }}
              onTimeUpdate={handleVideoTime}
              className="h-full w-full"
            />

            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#fbf7f2]/70 to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#fbf7f2]/70 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fbf7f2]/60 to-transparent" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-12">
          {rightSkills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              detail={skill.detail}
              active={index === activeStep}
              side="right"
            />
          ))}
        </div>
      </div>

      <motion.p
        className="mt-3 text-center font-serif text-sm italic text-[#8a3158]/70"
        animate={{
          opacity: [0.55, 0.9, 0.55],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        engineering with rhythm, intention, and a little creativity
      </motion.p>
    </motion.div>
  )
}

type SkillCardProps = {
  title: string
  detail: string
  active: boolean
  side: "left" | "right"
}

function SkillCard({
  title,
  detail,
  active,
  side,
}: SkillCardProps) {
  return (
    <motion.div
      animate={{
        x:
          active
            ? side === "left"
              ? 10
              : -10
            : 0,
        scale: active ? 1.055 : 1,
        opacity: active ? 1 : 0.48,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className={`relative rounded-2xl border px-4 py-4 ${
        active
          ? "border-[#8a3158]/35 bg-[#fff8fb] shadow-[0_12px_30px_rgba(138,49,88,0.12)]"
          : "border-black/10 bg-white/45"
      }`}
    >
      <motion.div
        animate={{
          scale: active ? 1.65 : 1,
          opacity: active ? 1 : 0.48,
        }}
        transition={{
          duration: 0.45,
        }}
        className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#8a3158] ${
          side === "left"
            ? "-right-[6px]"
            : "-left-[6px]"
        }`}
      />

      <p
        className={`text-sm font-medium ${
          active
            ? "text-[#8a3158]"
            : "text-[#241720]"
        }`}
      >
        {title}
      </p>

      <p className="mt-1 text-[10px] leading-4 text-black/40">
        {detail}
      </p>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/* DANCE DIVIDERS                                                            */
/* -------------------------------------------------------------------------- */

type DanceDividerProps = {
  number: 1 | 2 | 3 | 4
}

function DanceDivider({
  number,
}: DanceDividerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 6,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="mx-auto max-w-5xl px-8 py-2"
    >
      <img
        src={`/dance-divider-${number}.png`}
        alt=""
        aria-hidden="true"
        className="mx-auto block w-full object-contain"
      />
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/* SECTION LABEL                                                             */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-sm tracking-[0.2em] text-black/45">
        {children}
      </p>

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 58,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mt-3 h-px bg-[#8a3158]/40"
      />
    </div>
  )
}

export default App