'use client';

import { Header, Container, Footer } from "shared-ui";
import SEO from "@components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="NO-CONTACT – ruční mytí a detailing"
        description="Profesionální ruční mytí aut a detailingové služby v Ústí nad Labem. Objednejte se online nebo telefonicky."
        url="https://www.no-contact.cz"
        image="https://www.no-contact.cz/og-image.jpg"
      />
      <Header title="NO-CONTACT – ruční mytí a detailing" />
      <main className="flex min-h-screen flex-col justify-center bg-white py-10 text-center">
        <Container>
          <img
            src="/no_contact_logo.png"
            alt="NO-CONTACT logo"
            className="w-48 h-auto mb-6 mx-auto"
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Web ve výstavbě</h1>
          <p className="text-lg text-gray-700 mb-2">
            Pracujeme na zbrusu novém webu pro naši myčku a detailingové služby.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Pro objednání volejte{" "}
            <a
              href="tel:+420734234134"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "click_to_call", {
                    event_category: "Kontakt",
                    event_label: "Telefonní číslo",
                  });
                }
              }}
              className="text-blue-600 underline hover:text-blue-800"
            >
              734 234 134
            </a>
            .
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Nebo si můžete rezervovat termín rovnou online přes formulář níže:
          </p>

          <div className="w-full aspect-[4/3] md:aspect-[16/9]">
            <iframe
              src="https://no-contact-s-r-o.reservio.com"
              className="w-full h-full rounded shadow-md border-0"
              allowFullScreen
              onLoad={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "iframe_loaded", {
                    event_category: "Rezervace",
                    event_label: "Reservio iframe zobrazen",
                  });
                }
              }}
            ></iframe>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}