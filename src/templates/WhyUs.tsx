import { Section } from '@/layout/Section';

const WhyUs = () => (
  <Section
    id="o-nas" // ID sekce pro navigaci "O nás"
    bgColor="bg-primary-900" // Tmavé pozadí pro celou sekci
    title={
      <>
        Proč zvolit <span className="text-secondary">NO-CONTACT</span>? {/* <--- Titulek s bílým akcentem na tmavém pozadí */}
      </>
    }
    // Popis pod titulkem v Section - barva už je text-gray-300 díky Section logice
    description={<span className="text-gray-300">Naše metody a precizní přístup přinášejí vašemu vozu dokonalý vzhled a ochranu bez kompromisů.</span>}
  >
    {/* Celý tento vnitřní blok má text-gray-200 (světlý) */}
    <div className="max-w-3xl mx-auto space-y-8 text-xl text-gray-200">
      <p className="font-medium leading-relaxed">
        V NO-CONTACT věříme, že péče o vůz by měla být efektivní, bezpečná a šetrná. Kombinujeme <strong>inovativní technologie</strong> s precizní ruční prací, abychom dosáhli bezchybného výsledku pro interiér i exteriér.
      </p>
      <p className="font-medium leading-relaxed">
        Naše klíčové pilíře zahrnují:
      </p>
      <ul className="max-w-xl mx-auto space-y-3 text-left list-disc list-inside">
        <li>
          <strong className="text-secondary">Šetrné metody:</strong> Minimalizace rizika poškození laku a povrchů pro maximální bezpečnost vašeho vozu. {/* <--- Změněno z text-primary na text-secondary */}
        </li>
        <li>
          <strong className="text-secondary">Prémiová autokosmetika:</strong> Používáme pouze ověřené produkty, které zajišťují špičkovou ochranu a dlouhotrvající lesk. {/* <--- Změněno z text-primary na text-secondary */}
        </li>
        <li>
          <strong className="text-secondary">Detailní přístup:</strong> Každé vozidlo je pro nás unikátní. Věnujeme se i těm nejmenším detailům, které odlišují perfektní výsledek. {/* <--- Změněno z text-primary na text-secondary */}
        </li>
        <li>
          <strong className="text-secondary">Ekologické postupy:</strong> Snažíme se minimalizovat dopad na životní prostředí s použitím šetrných prostředků a metod. {/* <--- Změněno z text-primary na text-secondary */}
        </li>
      </ul>
      <p className="font-medium leading-relaxed">
        S NO-CONTACT získá váš vůz nejen <strong>nový lesk</strong>, ale i <strong>prodlouženou ochranu</strong>. Jsme vaším partnerem pro dokonalý vzhled a udržení hodnoty vašeho automobilu.
      </p>
    </div>
  </Section>
);

export { WhyUs };