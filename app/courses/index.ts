export interface Course {
  name: string;
  description: string;
  icon: string;
}

export const courses: Course[] = [
  {
    name: "Defining Routes",
    description:
      "Include Routes, Pages, Layouts, Root Layout, Template, Loading, Error Handling, Not Found etc.",
    icon: "ion:navigate-circle-outline",
  },
  {
    name: "Dynamic Routes",
    description:
      "Display the content of the article corresponding to the id parameter in the URL.",
    icon: "ph:planet-bold",
  },
  {
    name: "Route Groups",
    description:
      "Mark the folder as a route group to prevent the folder name from being mapped to the URL.",
    icon: "ic:outline-group-work",
  },
  {
    name: "Parallel Routes",
    description:
      "Render one or more pages simultaneously or conditionally within the same layout.",
    icon: "icons8:parallel-tasks",
  },
  {
    name: "Intercepting Routes",
    description:
      "Intercept other routes in the current route and display content in the current route.",
    icon: "heroicons-outline:ban",
  },
];