// src/components/Hero.js

import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  // Nastavíme bílé pozadí pro Hero sekci
  <Background color="bg-white">
    <Section yPadding="py-2">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* Navigační odkazy pro NO-CONTACT */}
        <li className="mr-6">
          <Link href="#o-nas" scroll={false} className="font-medium text-primary hover:text-secondary-700">
            O nás
          </Link>
        </li>
        <li className="mr-6">
          <Link href="#sluzby-a-cenik" scroll={false} className="font-medium text-primary hover:text-secondary-700">
            Služby & Ceník
          </Link>
        </li>
        <li className="mr-6">
          <Link href="#rezervace" scroll={false} className="font-medium text-primary hover:text-secondary-700">
            Rezervace
          </Link>
        </li>
        <li>
          <Link href="#kde-nas-najdete" scroll={false} className="font-medium text-primary hover:text-secondary-700">
            Kontakt
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-10 pb-20">
      <HeroOneButton
        // HLAVNÍ TITULEK JE NYNÍ PRÁZDNÝ - HeroOneButton ho ale stále očekává
        // Můžeme ho buď nastavit na null, nebo jej úplně odstranit z props HeroOneButton,
        // pokud to komponenta zvládá. Prozatím ho ponechám prázdný, aby HeroOneButton
        // nepřeskočila vykreslování subtitle.
        title={<></>} // <--- HLAVNÍ TITULEK JE NYNÍ PRÁZDNÝ
        // Podtitulek Hero sekce pro NO-CONTACT - tmavý text na světlém pozadí
        subtitle={
          <h2 className="text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl"> {/* <--- Styly z h1 přesunuty na h2 */}
            Profesionální šetrné čištění interiérů a exteriérů vozů s důrazem na detail a dlouhotrvající ochranu.
          </h2>
        }
        // Popis Hero sekce pro NO-CONTACT - tmavý text na světlém pozadí
        description={
          <>
            <p className="mt-4 text-xl text-gray-700 sm:text-xl md:text-2xl"> {/* <--- Zvětšena velikost písma */}
              Používáme nejmodernější techniky a prémiovou autokosmetiku pro dosažení <strong>perfektního vzhledu</strong> a <strong>dlouhodobé ochrany</strong> vašeho vozu.
            </p>
            <p className="mt-2 text-xl text-gray-700 sm:text-xl md:text-2xl"> {/* <--- Zvětšena velikost písma */}
              Odstraňujeme špínu, škrábance a navracíme vozu <strong>nový lesk</strong>.
            </p>
          </>
        }
        // Tlačítko Hero sekce pro NO-CONTACT - tmavé pozadí s bílým textem, akcent sekundární (bílá)
        button={
          <Link href="#rezervace" scroll={false}>
            <Button xl className="px-6 py-3 font-bold rounded-lg shadow-md bg-primary hover:bg-primary-700 text-secondary">
              Zarezervovat termín
            </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };