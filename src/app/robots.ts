import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ["Googlebot", "Applebot", "Bingbot"],
                allow: ["/"],
                disallow: ["/api", "/privacy"]
            },
        ],
        sitemap: "https://sonatra.vercel.app/sitemap.xml",
    };
}