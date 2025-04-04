import Image from 'next/image';
import Link from 'next/link';

export function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 xl:gap-3"
    >
      <Image
        src="/huntlee-logo.svg"
        alt="Huntlee Logo"
        width={48}
        height={48}
        className="w-10 h-10 xl:w-12 xl:h-12"
      />

      <h1 className="font-semibold text-2xl text-(--border-dark)">Huntlee</h1>
    </Link>
  );
}
