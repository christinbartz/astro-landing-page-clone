export const data = [
  {
    slug: undefined,
    title: "Astro | Build faster websites",
    template: "HomePage",
    content: [
      {
        template: "Stage",
        title: "Build faster websites.",
        text: "Pull content from anywhere and serve it fast with Astro's next-gen island architecture.",
        children: [
          {
            template: "Row",
            content: [
              {
                template: "Column",
                content: [
                  {
                    template: "Button",
                    targetUrl: "https://docs.astro.build/en/getting-started/",
                    text: "Get Started",
                  },
                ],
              },
              {
                template: "Column",
                content: [
                  {
                    template: "Code",
                    lang: "bash",
                    text: "npm create astro@latest",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        template: "Section",
        background: "canvas",
        children: [
          {
            template: "TitleIcon",
            type: "lightning",
            text: "Designed for speed",
          },
          {
            template: "Headline",
            level: 2,
            text: "Introducing: Astro Islands",
          },
          {
            template: "Text",
            text: " Astro Islands represent a leading paradigm shift for frontend web architecture. Astro extracts your UI into smaller, isolated components on the page. Unused JavaScript is replaced with lightweight HTML, guaranteeing faster loads and time-to-interactive (TTI).          ",
          },
          {
            template: "Link",
            text: "Learn more about Astro Islands",
            targetUrl: "https://docs.astro.build/en/concepts/islands/",
          },
          {
            template: "CardList",
            columns: 3,
            content: [
              {
                template: "Card",
                title: "Zero JavaScript Runtime",
                text: "Astro renders HTML on the server and strips away any remaining, unused JavaScript.",
              },
              {
                template: "Card",
                title: "The Power of Islands",
                text: "Need interactive UI? Load individual, non-blocking component islands in parallel.",
              },
              {
                template: "Card",
                title: "Lazy-Loading Islands",
                text: "Components only hydrate when they scroll into view. If you don't see it, Astro won't load it.",
              },
            ],
          },
        ],
      },
      {
        template: "Section",
        background: "light",
        children: [
          {
            template: "TitleIcon",
            type: "document",
            text: "Designed for speed",
          },
          {
            template: "Headline",
            level: 2,
            text: "Your content, your way.",
          },
          {
            template: "Tabs",
            content: [
              {
                title: "CMS",
                children: [
                  {
                    template: "Headline",
                    level: 3,
                    text: "Using your CMS",
                  },
                  {
                    template: "Text",
                    text: "With top-level await, Astro makes it easy to fetch content from your CMS.",
                  },
                ],
              },
              {
                title: "Markdown",
                children: [
                  {
                    template: "Headline",
                    level: 3,
                    text: "Creating pages with Markdown",
                  },
                  {
                    template: "Text",
                    text: "Creating a page using Markdown is easy with Astro! Add a .md file to your pages directory and Astro will turn it into a page on your site. You can specify an Astro component in frontmatter to use as a page layout.",
                  },
                ],
              },
              {
                title: "MDX",
                children: [
                  {
                    template: "Headline",
                    level: 3,
                    text: "Creating pages with MDX",
                  },
                  {
                    template: "Headline",
                    level: 4,
                    text: "Creating a page using MDX is _easy_ with Astro!",
                  },
                  {
                    template: "Text",
                    text: "Add a .mdx file to your pages directory and Astro will turn it into a page on your site. MDX files make it easy to mix components from any framework with your text content.",
                  },
                ],
              },
              {
                title: "API",
                children: [
                  {
                    template: "Headline",
                    level: 3,
                    text: "Using an API",
                  },
                  {
                    template: "Text",
                    text: "With native fetch built-in, Astro makes it easy to work with data from any API. Powered by https://owen-wilson-wow-api.herokuapp.com",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "themes",
    title: "Themes | Astro",
    content: [
      {
        template: "Headline",
        level: 2,
        text: "Themes",
      },
      {
        template: "Text",
        text: "Start your next Astro project with a real world theme built by our amazing community.",
      },
    ],
  },
  {
    slug: "blog",
    title: "The Astro Blog | Astro",
    content: [
      {
        template: "Headline",
        level: 2,
        text: "The Astro Blog",
      },
      {
        template: "Text",
        text: "Get all the latest news from the Astroverse.",
      },
    ],
  },
];

// [
//   {
//     slug: undefined,
//     title: "Astro Store",
//     text: "Welcome to the Astro store!",
//   },
//   {
//     slug: "products",
//     title: "Astro products",
//     text: "We have lots of products for you",
//   },
//   {
//     slug: "products/astro-handbook",
//     title: "The ultimative Astro handbook",
//     text: "If you want to learn Astro, you must read this book.",
//   },
// ];
