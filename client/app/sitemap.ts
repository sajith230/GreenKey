import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://greenkey.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/room", "/food", "/gallery", "/safari", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
