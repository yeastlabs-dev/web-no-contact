'use client';

import Head from 'next/head';

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({
  title,
  description = 'Oficiální web NO-CONTACT – ruční mytí a detailing vozidel v Ústí nad Labem.',
  image = 'https://www.no-contact.cz/og-image.jpg',
  url = 'https://www.no-contact.cz',
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}