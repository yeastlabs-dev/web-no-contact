// src/components/Reservations.js

import { Section } from '@/layout/Section'; // Zkontrolujte cestu

const Reservations = () => (
  <Section
    id="rezervace" // ID sekce pro navigaci
    bgColor="bg-white" // Bílé pozadí pro tuto sekci (pokud chcete oddělit od tmavé/jiné sekce)
    title={
      <>
        Online <span className="text-primary">Rezervace</span> termínu {/* Titulek sekce */}
      </>
    }
    description={<span className="text-gray-700">Zarezervujte si svůj termín pro profesionální péči o vůz pohodlně online.</span>}
  >
    <div className="max-w-5xl mx-auto mt-8 text-center"> {/* Kontejner pro iFrame */}
      {/* Váš iFrame kód z Reservio */}
      <iframe
        src="https://no-contact-s-r-o.reservio.com" // <--- ZDE JE URL Z RESERVIO! Ujistěte se, že je správná
        width="100%" // Nastavíme 100% šířku pro responzivitu
        height="1000px" // Výška, jakou jste zadal/a (můžete upravit)
        frameBorder="0"
        className="w-full h-[1000px] border-0 rounded-lg shadow-xl" // Tailwind CSS pro responzivitu a vzhled
        // classList="w-full h-[1000px] border-0 rounded-lg shadow-xl" // Alternativa, pokud classname nefunguje pro iframe
      >
      </iframe>
    </div>
  </Section>
);

export { Reservations };