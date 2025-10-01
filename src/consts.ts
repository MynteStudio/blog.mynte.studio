import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mynte Studio",
  EMAIL: "hello@mynte.studio",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/myntestudio",
  },
  {
    NAME: "github",
    HREF: "https://github.com/MynteStudio",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/company/mynte-studio",
  },
];
