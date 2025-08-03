import { Section } from '@/layout/Section'; // Zkontrolujte cestu

const ServicesAndPricing = () => (
  <Section
    id="sluzby-a-cenik" // ID sekce pro navigaci
    bgColor="bg-white" // Bílé pozadí pro tuto sekci (pokud ji chcete oddělit od tmavé 'O nás')
    title={
      <>
        Naše <span className="text-primary">služby</span> & <span className="text-primary">ceník</span> {/* Tmavý text a bílý akcent */}
      </>
    }
    description={<span className="text-gray-700">Nabízíme komplexní péči o interiér a exteriér vašeho vozu s transparentním ceníkem. Každá služba je navržena pro maximální čistotu a ochranu.</span>}
  >
    <div className="max-w-5xl mx-auto mt-8"> {/* Větší max-w pro tabulku */}

      {/* Popis služeb - pokud chcete úvodní text před tabulkou */}
      <div className="mb-12 text-lg text-center text-gray-700">
      <p>
          Platit u nás můžete hotově, kartou nebo pomocí CCS.
        </p>
      <p className="mt-4 text-sm text-gray-600">
      Upozornění: Pro vozidla kategorie MPV a SUV je účtován příplatek +20% k základní ceně služby.
      </p>
      </div>

      {/* TABULKA CENÍKU */}
      <div className="overflow-x-auto rounded-lg shadow-xl"> {/* Pro responzivitu tabulky a vizuální styl */}
        <table className="min-w-full leading-normal bg-white">
          <thead>
            <tr className="text-white bg-primary-800"> {/* Tmavě modré záhlaví tabulky */}
              <th className="px-5 py-3 text-sm font-semibold tracking-wider text-center uppercase border-b-2 border-gray-200 rounded-tl-lg">
                Název služby
              </th>
              <th className="px-5 py-3 text-sm font-semibold tracking-wider text-center uppercase border-b-2 border-gray-200">
                Popis
              </th>
              <th className="px-5 py-3 text-sm font-semibold tracking-wider text-center uppercase border-b-2 border-gray-200 rounded-tr-lg">
                Cena
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Classic */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-semibold text-primary">CLASSIC</p>
              </td>
              <td className="px-5 py-5 text-sm text-center text-gray-700">
                <p>Ruční mytí, sušení, luxování interiéru, otření prachu.</p>
              </td>
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-bold text-primary">od 600 Kč</p>
              </td>
            </tr>
            {/* Classic plus */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-semibold text-primary">CLASSIC PLUS</p>
              </td>
              <td className="px-5 py-5 text-sm text-center text-gray-700">
                <p>Ruční mytí, sušení, luxování interiéru, čištění vnitřních plastů, leštění oken.</p>
              </td>
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-bold text-primary">od 1 250 Kč</p>
              </td>
            </tr>
            {/* Elegance */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-semibold text-primary">ELEGANCE</p>
              </td>
              <td className="px-5 py-5 text-sm text-center text-gray-700">
                <p>Ruční mytí, sušení, luxování a tepování interiéru, čištění vnitřních plastů, leštění oken.</p>
              </td>
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-bold text-primary">od 2 500 Kč</p>
              </td>
            </tr>
            {/* Elegance - kamion */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-semibold text-primary">ELEGANCE - KAMION</p>
              </td>
              <td className="px-5 py-5 text-sm text-center text-gray-700">
                <p>Ruční mytí, sušení, luxování a tepování interiéru, čištění vnitřních plastů, leštění oken.</p>
              </td>
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-bold text-primary">od 4 500 Kč</p>
              </td>
            </tr>
            {/* Dezinfekce ozonem */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-semibold text-primary">DEZINFEKCE OZONEM</p>
              </td>
              <td className="px-5 py-5 text-sm text-center text-gray-700">
                <p>Dezinfekce interiéru ozonem.</p>
              </td>
              <td className="px-5 py-5 text-sm text-center">
                <p className="font-bold text-primary">od 400 Kč</p>
              </td>
            </tr>
            {/* ZDE PŘIDEJTE DALŠÍ ŘÁDKY TABULKY PRO VÍCE SLUŽEB */}
            {/* Ujistěte se, že ID odkazuje na sekci, kde je tento komponent umístěn */}
          </tbody>
        </table>
      </div>

      {/* Text pod tabulkou, např. pro individuální nabídky */}
      <div className="mt-4 text-lg text-center text-gray-700">
        <p>
          Ceny jsou orientační a mohou se lišit v závislosti na velikosti a stavu vozu.
          Pro detailní nacenění nás prosím kontaktujte nebo využijte náš rezervační systém.
        </p>
      </div>
      {/* Text pod tabulkou, např. pro individuální nabídky */}
      <div className="mt-4 text-6xl text-center text-gray-700">
        <p>Pro objednání volejte</p>
        <p>734 234 134</p>
      </div>

    </div>
  </Section>
);

export { ServicesAndPricing };