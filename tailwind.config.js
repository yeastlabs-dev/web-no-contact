// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem',
      xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem',
      '5xl': '3rem', '6xl': '4rem',
    },
    extend: {
      colors: {
        // ---- NO-CONTACT BAREVNÁ PALETA START ----
        primary: {
          50: '#E6E8ED', 100: '#CAD1DC', 200: '#9FB0C5', 300: '#738FAD',
          400: '#476D96', 500: '#1E497F', 600: '#183B65', 700: '#122D4B',
          800: '#0C1E32', 900: '#060F19',
          DEFAULT: '#1E2850', // <--- Tmavě modrá z loga NO-CONTACT
        },
        secondary: {
          // Jasná bílá pro "lesk" a kontrast s primární tmavě modrou
          DEFAULT: '#FFFFFF', // <--- Bílá z loga a pro akcent
        },
        gray: { // Standardní šedé barvy
          100: '#f7fafc', 200: '#edf2f7', 300: '#e2e8f0', 400: '#cbd5e0', 500: '#a0aec0',
          600: '#718096', 700: '#4a5568', 800: '#2d3748', 900: '#1a202c',
        },
        // ---- NO-CONTACT BAREVNÁ PALETA END ----
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};