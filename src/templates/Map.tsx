import { Section } from '@/layout/Section'; // Zkontrolujte cestu

const Map = () => ( // <--- Název komponenty je Map
  <Section
    id="kde-nas-najdete" // <--- Nové ID pro tuto sekci (lépe vystihuje obsah)
    bgColor="bg-white" // Bílé pozadí pro tuto sekci
    title={
      <>
        Kde nás <span className="text-primary">najdete</span>
      </>
    }

  >
    {/* Kontejner pro obsah mapy */}
    <div className="max-w-4xl mx-auto mt-8">

      {/* SEKCE PRO GOOGLE MAPS */}
      <div className="mt-4 text-center">
        <p className="mt-4 mb-4 text-lg text-gray-700">
          Naše adresa: <span className="font-semibold">Žižkova 630/73a, 400 01 Ústí nad Labem</span>
        </p>
        <div className="relative overflow-hidden rounded-lg shadow-xl" style={{ paddingTop: '75%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.5005687954967!2d14.024347777029602!3d50.653381672730944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470984bb115e8097%3A0xa7fb643b31ed16ff!2sNo%20Contact!5e1!3m2!1scs!2scz!4v1754244995091!5m2!1scs!2scz" // <--- ZDE JE OPRAVENÁ URL Z GOOGLE MAPS EMBED KÓDU
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa NO-CONTACT"
          ></iframe>
        </div>
      </div>
    </div>
  </Section>
);

export { Map };