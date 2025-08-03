// src/layout/Meta.js

import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1E2850" /> {/* <--- Primární barva z loga */}
        <meta
          name="keywords"
          content="detailing, čištění aut, interiér aut, exteriér aut, mytí aut, renovace laku, ochrana laku, autokosmetika, Péče o auto, auto detailing, Teplice"
        />
        {/* Favicony - cesty zůstávají stejné, ale soubory musíte vyměnit v public/ */}
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7L3VBNXWM0"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7L3VBNXWM0');
          `,
        }}
      />

      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical || 'https://www.no-contact.cz'}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical || 'https://www.no-contact.cz',
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          type: 'website',
          images: [
            {
              url: `${router.basePath}/og-image-detailing.png`,
              width: 1200,
              height: 630,
              alt: 'NO-CONTACT – profesionální péče o vůz',
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };