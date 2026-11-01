import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PairPlanner",
    short_name: "PairPlanner",
    description: "Plan your budget together",
    theme_color: "#0f172a",
    background_color: "#0f172a",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/icons/PairPlanner192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/PairPlanner512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
