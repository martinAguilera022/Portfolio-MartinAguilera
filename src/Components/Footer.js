import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
			<div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
				<span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
					© {currentYear}
					<a
						href="https://www.linkedin.com/in/martin-aguilera-69005527a/"
						className="hover:underline"
					>
						Martin Aguilera
					</a>
					. Casi todos los derechos reservados
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
					<li>
						<Link href="#sobre-mi">
							<a className="hover:underline me-4 md:me-6">Sobre mí</a>
						</Link>
					</li>
					<li>
						<a href="mailto:totoaguil022@gmail.com" className="hover:underline">
							Contacto
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
