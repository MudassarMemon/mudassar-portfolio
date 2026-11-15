export function SheetLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs tracking-widest text-accent uppercase">{children}</p>;
}

export function SectionHeading({ id, sheet, title }: { id: string; sheet: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <SheetLabel>{sheet}</SheetLabel>
      <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
    >
      {children} <span aria-hidden>↗</span>
    </a>
  );
}
