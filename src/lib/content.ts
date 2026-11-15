// All site copy lives here. Edit this file, not the components.

export const profile = {
  name: "Mudassar Memon",
  headline: "Full-stack engineer with a test-automation background.",
  intro:
    "I build React and Next.js products and the Playwright suites that keep them stable. Most recently at QA Wolf: about 600 end-to-end tests across roughly 60 client SaaS apps. Before software, six years managing NYC school construction projects.",
  email: "mudassar95memon@gmail.com",
  github: "https://github.com/MudassarMemon",
  linkedin: "https://www.linkedin.com/in/mudassarmemon/",
  resumeFile: "/Mudassar-Memon-Resume.pdf", // drop the PDF in /public; buttons fall back to email if missing
  titleBlock: [
    ["STATUS", "Available now"],
    ["SEEKING", "Full-stack · SDET · FDE"],
    ["STACK", "React · TypeScript · Next.js"],
    ["TESTING", "Playwright"],
    ["BASE", "Long Island, NY · Remote / NYC"],
  ] as [string, string][],
};

export type Sheet = {
  tag: string;
  title: string;
  context: string;
  did: string;
  outcome: string;
  links?: { label: string; href: string }[];
};

export const work: Sheet[] = [
  {
    tag: "QA WOLF · PLAYWRIGHT · TYPESCRIPT",
    title: "Stabilizing suites that failed two runs in three",
    context:
      "Several client suites were failing so often that engineers spent their time on reattempts instead of real bugs.",
    did: "Isolated test data per run, built reusable MFA and API helpers, and added state teardown so tests stopped depending on each other.",
    outcome:
      "Reattempts dropped about 80%. Flakiness on those suites fell from roughly 65–70% to 10–12%.",
  },
  {
    tag: "QA WOLF · SALESFORCE · GOOGLE WORKSPACE APIS",
    title: "Growing an enterprise account from under 10 tests to about 90",
    context:
      "A Salesforce-integrated product had thin end-to-end coverage and no safe way to test against real org state.",
    did: "Owned the account end to end. Set up five isolated Salesforce orgs and drove Google Workspace through its APIs for test setup and verification.",
    outcome: "The suite grew from under 10 tests to about 90, each running against isolated org state instead of shared data.",
  },
  {
    tag: "QA WOLF · WEB3",
    title: "Automating browser-extension wallet flows",
    context:
      "Crypto apps depend on wallet browser extensions, which sit outside the page and are awkward to automate.",
    did: "Built automation for wallet extension interactions, mock wallet state and transaction validation.",
    outcome: "Wallet-dependent user flows became testable end to end.",
  },
  {
    tag: "FREELANCE · NEXT.JS · SANITY",
    title: "Two client sites, one with a self-serve CMS",
    context:
      "Two clients needed fast, good-looking sites, and one wanted to edit her own content without a developer.",
    did: "Built both in Next.js. Priya Krishna's was designed with my sister, a web designer. For Aliza Abarbanel I set up a Sanity Studio so she edits her own content, wrote handover docs and supported the site after launch.",
    outcome: "Both sites are live, each shipped in under a month.",
    links: [
      { label: "priyakrishna.me", href: "https://priyakrishna.me/" },
      { label: "aliza-abarbanel.com", href: "https://aliza-abarbanel.com/" },
    ],
  },
];

export const experience = [
  {
    dates: "Apr 2024 – Sep 2026",
    role: "Software QA Engineer II · QA Wolf",
    body: "Wrote and maintained roughly 600 Playwright end-to-end tests in TypeScript across about 60 client SaaS apps. Promoted from QA Engineer I in Oct 2024. Led technical onboarding for about seven client engineering teams and mentored four QA engineers.",
  },
  {
    dates: "Jul 2023 – Dec 2024",
    role: "Freelance Software Engineer · Memelope LLC",
    body: "Responsive sites in Next.js, TypeScript, Tailwind and Sanity, deployed on Vercel. Overlapped with my QA Wolf role in 2024.",
  },
  {
    dates: "Aug 2017 – Jul 2023",
    role: "Project Manager · EW Howell Construction Group",
    body: "Managed NYC public-school construction projects with 100+ people on site daily. Started as an estimator.",
  },
  {
    dates: "Education",
    role: "B.S. Civil Engineering, summa cum laude · Stony Brook University",
    body: "Plus App Academy's full-stack software engineering program, 2023.",
  },
];

export const projects = [
  {
    name: "Officebook",
    body: "Full-stack social network built from scratch in two weeks. React, Redux, Rails, PostgreSQL, Active Storage on S3. Use the Demo login on the splash page; the free host can take ~30s to wake up.",
    links: [
      { label: "Live demo", href: "https://officebook-1.onrender.com" },
      { label: "Repo", href: "https://github.com/MudassarMemon/Officebook" },
    ],
  },
  {
    name: "TuneUp",
    body: "MERN app for connecting musicians. I was backend co-lead: Express, MongoDB, JWT auth and Google Maps.",
    links: [{ label: "Repo", href: "https://github.com/danielhlee4/TuneUp" }],
  },
  {
    name: "PLS Mechanical",
    body: "Site for an HVAC contractor, with an Express and Nodemailer contact flow. Deployed on Vercel.",
    links: [{ label: "Live site", href: "https://pls-mechanical.vercel.app" }],
  },
  {
    name: "Binary Search Tree visualizer",
    body: "Animated inserts and searches in vanilla JavaScript.",
    links: [
      { label: "Try it", href: "https://mudassarmemon.github.io/Binary-Search-Tree-Visualizer/" },
      { label: "Repo", href: "https://github.com/MudassarMemon/Binary-Search-Tree-Visualizer" },
    ],
  },
];

export const skills: [string, string][] = [
  ["LANGUAGES", "JavaScript · TypeScript · Python · Ruby · SQL"],
  ["FRONTEND", "React · Next.js · Redux · Tailwind · Sanity"],
  ["BACKEND", "Node · Express · Rails · PostgreSQL · MongoDB"],
  ["TESTING", "Playwright · Selenium · Puppeteer"],
  ["TOOLS", "Git · Docker · AWS S3 · Vercel · Postman"],
];

export const background = {
  title: "Plan. Spec. Build. Inspect.",
  body: "Six years in construction taught me to scope work clearly, keep people informed and check everything before sign-off. I work the same way as an engineer.",
};
