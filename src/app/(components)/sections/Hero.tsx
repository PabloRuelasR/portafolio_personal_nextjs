import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">
        Hola, soy Pablo Ruelas Rojas
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Desarrollador de Software especializado en crear experiencias web increíbles.
      </p>
      <Link
        href="/#contact"
        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Contáctame
      </Link>
    </section>
  );
};