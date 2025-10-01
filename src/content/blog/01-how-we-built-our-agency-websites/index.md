---
title: "How We Built Our Agency Websites"
description: "Making the right tech choices."
date: "Sep 29 2025"
---

Welcome to our website (and first article)!

Choosing the right technologies is always a crucial step when building an application. Every project comes with its own requirements, and our approach is to optimize tech choices based on those needs rather than forcing one stack everywhere.

For our agency, we quickly realized that our **[presentation website](https://mynte.studio)** and our **blog** had different requirements. Instead of trying to fit everything into a single app, we decided to split them into two separate applications. Here’s how we approached it, and why.

---

### Agency Website (mynte.studio)

Even though our agency website looks simple, we needed backend features like email sending, rate limiting, and room for future extensions.

For this project, building a dedicated API would have been overkill. What we needed was a setup that gave us **server-side rendering (SSR) for SEO**, the **simplicity of a monolith**, and the **user experience of a SPA**.

That’s why we chose **[Inertia.js](https://inertiajs.com/)**. It acts as a bridge between frontend frameworks and backend frameworks (agnostic), and it’s well-known in the Laravel and [AdonisJS](https://adonisjs.com) ecosystems.
It has benefits like strong SEO thanks to SSR, simplicity, and a SPA-like feel without the complexity of managing an API.

We considered alternatives like HTMX or Unpoly with Alpine.js for lightweight reactivity with a Go backend. But since we wanted a **JavaScript monorepo setup** and a stack that played together with our blog in the future, **AdonisJS with Inertia** made the most sense.

Next came the frontend framework. While we love **Svelte** and **SolidJS**, we leaned toward something supported, stable, and with a solid LSP experience. **Vue** won here, for its philosophy and developer experience.

For styling, we didn’t want something heavy like shadcn-vue. Instead, we went for an **unstyled primitives library**. The options were:

- **[Ark UI](https://ark-ui.com/)**: Headless UI with state machines, framework-agnostic.
- **[Reka UI](https://reka-ui.com/)**: Vue-based, clean and lightweight.

We chose **Ark UI**, as it perfectly fit our needs for flexibility without unnecessary overhead. It was the right time to try it, since we had used Reka UI on other projects.

For the styling layer, we went with UnoCSS. It brings in all the utility-first features we love from Tailwind, but with a better developer experience. No bloated configs, no unused classes — just a lightweight, flexible system that feels faster and more pleasant to work with every day.

---

### Blog (blog.mynte.studio)

The blog had different requirements:

- **SEO** and performance optimization
- **Markdown support** for easy article writing
- A setup designed for **content-first development**

The obvious choice here was **Astro**.

Astro is based on Vite and built for **content-heavy websites like blogs and documentation**. It’s SEO-friendly by design, supports Markdown natively, and embraces the “**ship less JavaScript**” philosophy. When interactivity is needed, it uses **framework-agnostic islands** to inject fine-grained JavaScript where required.

Other key advantages:

- Markdown and MDX integration out of the box
- Hybrid SSR/SSG model
- Great community templates to start projects quickly

The biggest downside is that Astro introduces a custom `.astro` file extension, and the LSP experience isn’t as smooth. But since our blog content lives in `.md` files, this hasn’t been an issue for us.

We looked at alternatives like **[Vike](https://vike.dev/)**, which is promising but still in beta and more suited for complex apps. For our use case, Astro was the perfect fit.

---

### Final Thoughts

Instead of trying to force a one-size-fits-all solution, we matched each project with the stack that made the most sense. **AdonisJS + Inertia + Vue** gave us the flexibility and backend power we needed for our main site, while **Astro** gave us performance, SEO, and simplicity for the blog.

This approach let us keep things lightweight, maintainable, and scalable without over engineering.

In a future article, we’ll take a closer look at our workflow and how we handle app deployments.
