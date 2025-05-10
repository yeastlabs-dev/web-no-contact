type FooterProps = {
  className?: string;
};

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`mt-16 border-t border-gray-200 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500 font-medium tracking-tight font-mono">
        Baked fresh in the lab by{" "}
        <a
          href="https://yeastlabs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700 transition"
        >
          Yeastlabs
        </a>{" "}
        🍞 © {new Date().getFullYear()}
      </div>
    </footer>
  );
}