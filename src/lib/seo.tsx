import Script from 'next/script';

export function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Artlist",
        "url": "https://artlist.ai", // Placeholder, should be replaced with actual URL
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://artlist.ai/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify(schema)}
        </Script>
    );
}

export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        }))
    };

    return (
        <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify(schema)}
        </Script>
    );
}

export function ProductSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Artlist AI",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        }
    };

    return (
        <Script id="product-schema" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify(schema)}
        </Script>
    );
}
