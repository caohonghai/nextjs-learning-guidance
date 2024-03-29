export interface Course {
  name: string;
  description: string;
  icon: string;
  url?: string;
}

export const courses: Course[] = [
  {
    name: "Defining Routes",
    description:
      "Include Routes, Pages, Layouts, Root Layout, Template, Loading, Error Handling, Not Found etc.",
    icon: "ion:navigate-circle-outline",
    url: "/defining-routes",
  },
  {
    name: "Dynamic Routes",
    description:
      "Display the content of the article corresponding to the id parameter in the URL.",
    icon: "ph:planet-bold",
    url: "/dynamic-routes",
  },
  {
    name: "Route Groups",
    description:
      "Mark the folder as a route group to prevent the folder name from being mapped to the URL.",
    icon: "ic:outline-group-work",
    url: "/route-groups",
  },
  {
    name: "Parallel Routes",
    description:
      "Render one or more pages simultaneously or conditionally within the same layout.",
    icon: "icons8:parallel-tasks",
    url: "/parallel-routes",
  },
  {
    name: "Intercepting Routes",
    description:
      "Intercept other routes in the current route and display content in the current route.",
    icon: "heroicons-outline:ban",
    url: "intercepting-routes",
  },
  {
    name: "Route Handlers",
    description:
      "In a front-end and back-end separation architecture, the client and server interact through API interfaces.",
    icon: "pajamas:merge-request",
    url: "route-handlers",
  },
  {
    name: "Middleware",
    description:
      "Middleware allows you to run code before a request is completed.",
    icon: "mdi:middleware-outline",
    url: "middleware",
  },
];
