import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">
          Tu Nombre
        </Link>
        <div className="space-x-4">
          <Link href="/#projects">Proyectos</Link>
          <Link href="/#about">Sobre Mí</Link>
          <Link href="/#contact">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};