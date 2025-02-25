import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-gray-500 fixed top-0 z-10 flex justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 gap-x-10 text-m font-semibold rounded-full text-gray-300 justify-center items-center">
        <Link href="#HOME">
          <a>Home</a>
        </Link>
        <Link href="#sobre-mi">
          <a>Sobre mi</a>
        </Link>
        <Link href="#proyectos">
          <a>Mis Proyectos</a>
        </Link>
      </nav>
    </header>
  );
}
