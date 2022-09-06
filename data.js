export const data = [
  {
    slug: undefined,
    title: "Astro | Build faster websites",
    template: "HomePage",
    content: [
      {
        template: "Stage",
        title: "Build faster websites.",
        image: 0,
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
        children: [
          {
            template: "TitleIcon",
            type: "lightning",
            text: "Designed for speed",
          },
          {
            template: "Headline",
            text: "Introducing: Astro Islands",
          },
          {
            template: "Text",
            children:
              " Astro Islands represent a leading paradigm shift for frontend web architecture. Astro extracts your UI into smaller, isolated components on the page. Unused JavaScript is replaced with lightweight HTML, guaranteeing faster loads and time-to-interactive (TTI).          ",
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
    ],
  },
  {
    slug: "themes",
    title: "Themes | Astro",
    content: [
      {
        template: "Headline",
        text: "Themes",
      },
      {
        template: "Text",
        children:
          "Start your next Astro project with a real world theme built by our amazing community.",
      },
    ],
  },
  {
    slug: "blog",
    title: "The Astro Blog | Astro",
    content: [
      {
        template: "Headline",
        text: "The Astro Blog",
      },
      {
        template: "Text",
        children: "Get all the latest news from the Astroverse.",
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
