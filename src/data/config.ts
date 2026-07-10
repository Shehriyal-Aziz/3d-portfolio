const config = {
  title: "Shehriyal Aziz | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Shehriyal Aziz, a Full Stack Developer from Karachi, Pakistan focused on the MERN stack and modern web applications. With a solid foundation in HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind, MySQL, and Laravel, I build dynamic web apps and also run Elfo Innovations, a web development and digital marketing agency. Explore my projects and let's build something amazing together!",
    short:
      "Portfolio of Shehriyal Aziz, a Full Stack Developer from Karachi building modern web apps with the MERN stack.",
  },
  keywords: [
    "Shehriyal Aziz",
    "portfolio",
    "full-stack developer",
    "MERN developer",
    "web developer Pakistan",
    "Karachi developer",
    "Elfo Innovations",
    "web development",
    "React",
    "Next.js",
    "Laravel",
    "SEO",
  ],
  author: "Shehriyal Aziz",
  email: "shehriyalaziz38@gmail.com",
  site: "https://shehriyalaziz.vercel.app",

  // for github stars button
  githubUsername: "Shehriyal-Aziz",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Shehriyalaziz",
    linkedin: "https://www.linkedin.com/in/shehriyal-aziz",
    instagram: "https://www.instagram.com/_.sherry._x/",
    facebook: "https://www.facebook.com/profile.php?id=61577105013351",
    github: "https://github.com/Shehriyal-Aziz/",
  },
};
export { config };