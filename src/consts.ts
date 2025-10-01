import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mynte Studio",
  EMAIL: "hello@mynte.studio",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "This is a minimal and lightweight blog and portfolio of our web agency.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics we are passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of our projects, with our work methodology.",
};

export const SOCIALS: Socials = [
  {
    NAME: "book a meeting",
    HREF: "https://mynte.studio",
  },
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/myntestudio",
  },
  {
    NAME: "instagram",
    HREF: "https://instagram.com/mynte.studio",
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
