import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  // --- Added for Shehriyal's real stack ---
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Lv</span>,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">My</span>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Bs</span>,
  },
  jquery: {
    title: "jQuery",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">jQ</span>,
  },
  emailjs: {
    title: "EmailJS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">EJ</span>,
  },
  aspnet: {
    title: "ASP.NET Core MVC",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">ASP</span>,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Fl</span>,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Sq</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "elfo-innovations",
    category: "Web dev & digital marketing agency",
    title: "Elfo Innovations",
    src: "/assets/projects-screenshots/elfo/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.mysql],
    },
    live: "https://elfoinnovations.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A web development & digital marketing agency I co-founded, serving
            international startup clients.
          </TypographyP>
          <TypographyP className="font-mono">
            Elfo Innovations builds custom websites, CRM systems, and SEO
            campaigns for clients across the US, EU, and beyond. As a founder,
            I handle full-stack development across multiple tech stacks
            (Laravel, WordPress, Shopify) alongside SEO audits, cold outreach
            infrastructure, and client delivery.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">What we do</TypographyH3>
          <p className="font-mono mb-2">
            Custom websites, CRM development, SEO audits, and digital
            marketing for growing businesses — with a focus on clean delivery
            and honest client communication.
          </p>
        </div>
      );
    },
  },
  {
    id: "ned-marathon-notes",
    category: "Study web app",
    title: "NED Marathon Notes",
    src: "/assets/projects-screenshots/ned-notes/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://sir-hashim-notes.vercel.app/",
    github: "https://github.com/Shehriyal-Aziz/notes",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Turned 12-hour YouTube MCQ lectures into a 1-hour offline revision
            tool.
          </TypographyP>
          <TypographyP className="font-mono">
            While prepping for the NED University entry test, I noticed a gap
            — YouTube had 12-hour lecture videos covering 200+ MCQs per
            subject, but no notes or test system to revise from. So I built
            one myself with plain HTML, CSS, and JavaScript.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">How it works</TypographyH3>
          <p className="font-mono mb-2">
            I extracted the context of every MCQ from the lectures and
            organized them into Bootstrap accordion modules with a built-in
            test mode. The app also caches itself via service workers, so it
            runs fully offline once loaded — no internet needed to revise.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            What used to take 24 hours of revision now takes about 1 hour.
          </p>
        </div>
      );
    },
  },
  {
    id: "care",
    category: "Healthcare booking platform",
    title: "Care",
    src: "/assets/projects-screenshots/care/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.mysql],
    },
    live: "#",
    github: "https://github.com/Shehriyal-Aziz/Health-Care-Management-System",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An Ola-Doc style platform connecting patients with doctors —
            booking, filtering, and monetization built in.
          </TypographyP>
          <TypographyP className="font-mono">
            Care lets patients search and book appointments with doctors,
            while doctors can register themselves on the platform. Built with
            Laravel, MySQL, and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Smart filtering</TypographyH3>
          <p className="font-mono mb-2">
            The booking flow narrows results by location first (e.g. Karachi
            patients only see Karachi doctors), then by specialization —
            stacking filters to get patients to the right doctor fast.
          </p>
          <TypographyH3 className="my-4 mt-8">Monetization model</TypographyH3>
          <p className="font-mono mb-2">
            Care charges a small transaction fee per patient booking, plus a
            monthly subscription for doctors to remain listed on the
            platform. Not yet live — currently a demo/concept build.
          </p>
        </div>
      );
    },
  },
  {
    id: "car-auction",
    category: "Live bidding platform",
    title: "Online Car Auction",
    src: "/assets/projects-screenshots/car-auction/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.aspnet],
      backend: [PROJECT_SKILLS.aspnet, PROJECT_SKILLS.mysql],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A live car-bidding marketplace built to explore ASP.NET Core MVC.
          </TypographyP>
          <TypographyP className="font-mono">
            I wanted to try something outside my usual stack, so I built this
            on ASP.NET Core MVC. Both users and admins can post car listings
            with a bidding price and a fixed buy-now price, with live bidding
            windows and timelines.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">How bidding works</TypographyH3>
          <p className="font-mono mb-2">
            Other users can place bids during the active window and win the
            car — or skip the wait entirely by paying the fixed price to
            purchase it outright. Still a work in progress, not yet deployed.
          </p>
        </div>
      );
    },
  },
  {
    id: "bbajapan",
    category: "Used car export platform + CRM",
    title: "BBA Japan",
    src: "/assets/projects-screenshots/bbajapan/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.mysql],
    },
    live: "https://bbajapan.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An e-commerce-style storefront for a used car export business,
            with a built-in CRM for the owner.
          </TypographyP>
          <TypographyP className="font-mono">
            Built for a client who buys, repairs, and modifies used cars
            before exporting them internationally. The frontend mirrors a
            typical e-commerce store — but instead of products, it lists
            cars. Built with Laravel, MySQL, and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Client-managed CRM</TypographyH3>
          <p className="font-mono mb-2">
            The client wanted full control over inventory without needing a
            developer for every change — so I built a CRM panel letting him
            add, update, and delete car listings himself.
          </p>
        </div>
      );
    },
  },
  {
    id: "hardware-crm",
    category: "Offline-first POS / CRM",
    title: "Hardware Store POS & CRM",
    src: "/assets/projects-screenshots/hardware-crm/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.flutter],
      backend: [PROJECT_SKILLS.sqlite, PROJECT_SKILLS.supabase],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An offline-first POS + inventory system built for a hardware
            store owner losing money to manual records.
          </TypographyP>
          <TypographyP className="font-mono">
            A client was frustrated with keeping manual inventory records —
            it was costing him money in untracked stock and errors. I built
            him a cross-platform POS/CRM using Flutter, so the same codebase
            runs as a Windows desktop app at the counter and a mobile app for
            him to manage inventory on the go.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">
            Offline-first, auto-syncing
          </TypographyH3>
          <p className="font-mono mb-2">
            Local data is stored in SQLite directly on-device, so sales and
            inventory updates work with zero internet — critical for a busy
            counter. When a connection is available, data syncs automatically
            across the desktop and mobile apps via a local-first sync layer
            (Supabase/PostgreSQL).
          </p>
          <TypographyH3 className="my-4 mt-8">
            Counter checkout & inventory panel
          </TypographyH3>
          <p className="font-mono mb-2">
            The main counter view has a searchable product gallery with
            category tabs and a sidebar cart — checkout triggers an instant
            silent print to a thermal receipt printer, no OS print dialog. A
            password-protected inventory panel lets the owner update stock —
            even from his phone in the stockroom — with changes syncing to
            the counter once he&apos;s back online.
          </p>
        </div>
      );
    },
  },
  {
    id: "maru-dry-fruit",
    category: "E-commerce (freelance)",
    title: "Maru Dry Fruit",
    src: "/assets/projects-screenshots/maru/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.jquery,
      ],
      backend: [PROJECT_SKILLS.emailjs],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A responsive e-commerce site built for a dry fruit retailer, as a
            freelance project.
          </TypographyP>
          <TypographyP className="font-mono">
            Built with plain HTML, CSS, JavaScript, Bootstrap, jQuery, and
            EmailJS for order/contact handling. Not currently deployed since
            hosting belongs to the client — kept as a local demo per their
            preference.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "shahee",
    category: "E-commerce (demo)",
    title: "Shahee",
    src: "/assets/projects-screenshots/shahee/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.jquery,
      ],
      backend: [PROJECT_SKILLS.emailjs],
    },
    live: "https://shahee.vercel.app",
    github: "https://github.com/Shehriyal-Aziz/Shahee-Ecommerce-Brand",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            One of my earliest projects — a fully responsive e-commerce demo
            built to showcase my skills to a potential client.
          </TypographyP>
          <TypographyP className="font-mono">
            Built with plain HTML, CSS, JavaScript, Bootstrap, jQuery, and
            EmailJS. The client never followed up after asking for a demo, so
            I kept it live as a personal project instead.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">What stands out</TypographyH3>
          <p className="font-mono mb-2">
            The slider and overall smoothness were the highlight — one of the
            first projects where I really focused on polish and feel, early
            in my development journey.
          </p>
        </div>
      );
    },
  },
  {
    id: "3d-portfolio",
    category: "Portfolio",
    title: "This Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://shehriyalaziz.vercel.app",
    github: "https://github.com/Shehriyal-Aziz/3d-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            The very site you&apos;re looking at right now — an interactive
            3D portfolio with a Spline-powered skills keyboard, smooth
            animations, and a working contact form.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Built with</TypographyH3>
          <p className="font-mono mb-2">
            Next.js, TypeScript, Tailwind CSS, and an interactive 3D keyboard
            rendered with Spline — deployed on Vercel with Resend powering
            the contact form.
          </p>
        </div>
      );
    },
  },
  {
    id: "old-portfolio",
    category: "Portfolio (legacy)",
    title: "First Portfolio",
    src: "/assets/projects-screenshots/old-portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.bootstrap],
      backend: [],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            The portfolio that started it all.
          </TypographyP>
          <TypographyP className="font-mono">
            I built this early in my journey hoping to land a job — instead,
            it landed me freelance clients and investor interest that ended
            up paying more than a job could have.
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
