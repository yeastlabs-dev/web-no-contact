// src/components/Footer.js

import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter'; // Zkontrolujte cestu
import { Section } from '../layout/Section';
import { Logo } from './Logo'; // Zkontrolujte cestu k vaší Logo komponentě
import  Image  from 'next/image'; // Import Image z Next.js

const Footer = () => (
  <Background color="bg-gray-100"> {/* Pozadí hlavní části patičky */}
    <Section yPadding="py-2"> {/* Menší vertikální padding */}
      <CenteredFooter
        logo={<Logo />} // Používá vaši Logo komponentu
        iconList={null} // <--- Odstraníme ikony, takže necháme null nebo prázdný fragment
      >
        {/* TEXTOVÉ ODKAZY: Upravíme tak, aby směřovaly na ID sekcí */}
        <li className="mr-6">
          <Link href="/" className="text-gray-700 transition-colors duration-200 hover:text-primary">Home</Link>
        </li>
        <li className="mr-6">
          <Link href="#o-nas" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">O nás</Link>
        </li>
        <li className="mr-6">
          <Link href="#sluzby-a-cenik" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">Služby & ceník</Link>
        </li>
        <li className="mr-6">
          <Link href="#rezervace" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">Rezervace</Link>
        </li>
        <li className="mr-6">
          <Link href="#kontakt" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">Kontakt</Link>
        </li>
        {/* Případně další odkazy, např. GDPR/Zásady ochrany osobních údajů */}
        {/* <li>
          <Link href="/gdpr" className="text-gray-700 transition-colors duration-200 hover:text-primary">Zásady ochrany osobních údajů</Link>
        </li> */}
      </CenteredFooter>
    </Section>

      {/* NOVÁ SEKCE PRO DALŠÍ LOGO S ODKAZEM */}
      <div className="py-8 text-center bg-gray-100">
      {/* <--- ZDE JE ZMĚNA: Image je obalena Link komponentou */}
      <Link href="https://www.yeast-group.cz" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/images/moyg_transparent.png" // <--- Doplňte CESTU K SOUBORU NOVÉHO LOGA!
          alt="Doplňkové logo"
          width={673} // Upravte šířku dle potřeby (příklad)
          height={40} // Upravte výšku dle potřeby (příklad)
          className="h-auto mx-auto" // Vycentrování a zachování poměru stran
        />
      </Link>
    </div>

    {/* Nová sekce pro copyright a zmínku o Yeastlabs */}
    <div className="py-4 text-sm text-center text-white bg-primary-900">
      © {new Date().getFullYear()} NO-CONTACT - Všechna práva vyhrazena. | Vytvořeno s pomocí <span className="font-semibold text-secondary"><a
      href="https://yeastlabs.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition hover:text-gray-700"
    >
      Yeastlabs
    </a></span>.
    </div>
  </Background>
);

export { Footer };