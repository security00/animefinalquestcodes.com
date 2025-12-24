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
        // We can add other dynamic routes here in the future
    ];
}
