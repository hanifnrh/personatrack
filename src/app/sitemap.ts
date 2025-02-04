import { MetadataRoute } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sonatra.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(), // Optional: Add lastModified date
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/dashboard`,
            lastModified: new Date().toISOString(),
        },
    ];
}
