import fs from "node:fs";
import path from "node:path";
import { ExternalLink, SectionHeading, SheetLabel } from "@/components/Ui";
import {
  background,
  experience,
  profile,
  projects,
  skills,
  work,
} from "@/lib/content";

const hasResume = fs.existsSync(path.join(process.cwd(), "public", profile.resumeFile));

const btnPrimary =
  "inline-flex items-center rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-ink hover:brightness-110";
const btnGhost =
  "inline-flex items-center rounded-sm border border-line/70 px-5 py-3 text-sm font-semibold hover:bg-white/5";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-line/30 bg-ink/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4" aria-label="Primary">
          <a href="#top" className="font-display text-lg font-bold">
            {profile.name}
          </a>
          <ul className="flex items-center gap-5 text-sm">
            <li className="hidden sm:block"><a href="#work" className="hover:text-accent">Work</a></li>
            <li className="hidden sm:block"><a href="#experience" className="hover:text-accent">Experience</a></li>
            <li className="hidden sm:block"><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#contact" className="rounded-sm bg-accent px-3 py-1.5 font-semibold text-ink">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="grid gap-10 pb-20 pt-16 md:grid-cols-[1.4fr_1fr] md:items-end md:pt-24">
          <div>
            <SheetLabel>Sheet 00 / Overview</SheetLabel>
            <h1 className="font-display mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {hasResume ? (
                <a href={profile.resumeFile} className={btnPrimary} target="_blank" rel="noopener noreferrer">
                  View resume
                </a>
              ) : (
                <a href={`mailto:${profile.email}`} className={btnPrimary}>
                  Email me
                </a>
              )}
              <a href={profile.github} className={btnGhost} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.linkedin} className={btnGhost} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="border border-line/70 font-mono text-xs">
            <p className="border-b border-line/70 px-4 py-2 tracking-widest uppercase">Title block</p>
            <dl>
              {profile.titleBlock.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-line/20 px-4 py-2.5 last:border-b-0">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Selected work */}
        <section className="py-16">
          <SectionHeading id="work" sheet="Sheet 01 / Selected work" title="Selected work" />
          <div className="grid gap-6 md:grid-cols-2">
            {work.map((w) => (
              <article key={w.title} className="flex flex-col border border-line/70 bg-ink-2/60 p-6">
                <p className="font-mono text-xs tracking-widest text-muted uppercase">{w.tag}</p>
                <h3 className="font-display mt-3 text-xl font-bold leading-snug">{w.title}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                  <div><dt className="inline font-semibold text-white">Context. </dt><dd className="inline">{w.context}</dd></div>
                  <div><dt className="inline font-semibold text-white">What I did. </dt><dd className="inline">{w.did}</dd></div>
                  <div><dt className="inline font-semibold text-white">Outcome. </dt><dd className="inline">{w.outcome}</dd></div>
                </dl>
                {w.links && (
                  <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {w.links.map((l) => (
                      <ExternalLink key={l.href} href={l.href}>{l.label}</ExternalLink>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted">
            QA Wolf client names omitted for confidentiality.
          </p>
        </section>

        {/* Experience */}
        <section className="py-16">
          <SectionHeading id="experience" sheet="Sheet 02 / Experience" title="Where I've worked" />
          <ol className="border border-line/70">
            {experience.map((e) => (
              <li key={e.role} className="grid gap-2 border-b border-line/30 p-5 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-6">
                <p className="font-mono text-xs tracking-wide text-muted uppercase">{e.dates}</p>
                <div>
                  <h3 className="font-semibold">{e.role}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{e.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section className="py-16">
          <SectionHeading id="projects" sheet="Sheet 03 / Projects" title="Projects" />
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="border border-dashed border-line/60 p-5">
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.body}</p>
                <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  {p.links.map((l) => (
                    <ExternalLink key={l.href} href={l.href} label={`${l.label}: ${p.name}`}>{l.label}</ExternalLink>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Background */}
        <section className="grid gap-10 py-16 md:grid-cols-2">
          <div>
            <SheetLabel>Sheet 04 / Background</SheetLabel>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{background.title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate-300">{background.body}</p>
          </div>
          <dl className="self-start border border-line/70 font-mono text-xs">
            {skills.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 border-b border-line/20 px-4 py-3 last:border-b-0 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted">{k}</dt>
                <dd className="sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 pb-24 pt-8">
          <div className="flex flex-col gap-6 bg-[#e8f0fd] p-8 text-ink md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Open to full-stack, SDET and forward-deployed roles.
              </h2>
              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a className="font-semibold underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
                <a className="font-semibold underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="font-semibold underline underline-offset-4" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </div>
            {hasResume ? (
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 whitespace-nowrap rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-white">
                View resume
              </a>
            ) : (
              <a href={`mailto:${profile.email}`} className="inline-flex shrink-0 whitespace-nowrap rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-white">
                Get in touch
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-line/30 py-6 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · New York, NY
      </footer>
    </>
  );
}
