export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {currentYear} Juan Pablo Ruelas Rojas. Todos los derechos reservados.</p>
    </footer>
  );
};