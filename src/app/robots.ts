import type { MetadataRoute } from "next";

const BASE_URL = "https://dental-clinic-aoba.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
