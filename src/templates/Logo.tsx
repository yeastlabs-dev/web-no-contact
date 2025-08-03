// src/components/Logo.js

import Link from 'next/link';
import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // Velikosti pro logo NO-CONTACT (přizpůsobte dle potřeby a poměru stran)
  const width = props.xl ? 220 : 150; // Příklad šířky
  const height = props.xl ? 60 : 40;  // Příklad výšky (udržujte poměr stran loga)

  return (
    <Link href="/" className="relative inline-block">
      <Image
        src="/assets/images/nc_logo.png" 
        alt="NO-CONTACT Logo"
        width={width}
        height={height}
        className="h-auto"
      />
    </Link>
  );
};

export { Logo };