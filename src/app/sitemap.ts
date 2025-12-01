import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://artlist.ai',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        // Add more pages here as they are created
    ];
}
