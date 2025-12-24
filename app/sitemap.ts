import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://animefinalquestcodes.com";
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.2,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.2,
        },
        // We can add other dynamic routes here in the future
    ];
}
