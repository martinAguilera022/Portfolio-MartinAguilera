import "../app/globals.css";

export default function NavBar() {
	return (
		<header className="">
			<nav className="flex px-3 fixed top-0 left-0 w-full gap-x-10 text-m font-semibold rounded-full  justify-center items-center">
				<a className="text-gray-300 " href="#HOME">Home</a>
				<a className="text-gray-300 " href="#sobre-mi">Sobre mi</a>
				<a className="text-gray-300 " href="#proyectos">Mis Proyectos</a>
			</nav>
		</header>
	);
}
