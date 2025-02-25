export default function NavBar() {
	return (
		<header className="bg-gray bg-opacity-100 fixed top-0 z-10 flex justify-center  w-full mx-auto mt-2 ">
			<nav className="flex px-3 gap-x-10 text-m font-semibold rounded-full text-gray-300  justify-center items-center">
				<a href="#HOME">Home</a>
				<a href="#sobre-mi">Sobre mi</a>
				<a href="#proyectos">Mis Proyectos</a>
			</nav>
		</header>
	);
}
