import React from "react";
import CodeIcon from "./Icons/code";
import TaildwindIcon from "./Icons/TaildwindIcon";
import ReactIcon from "./Icons/ReactIcon";
import LinkButton from "./LinkButton";
import VerIcon from "./Icons/VerIcon";
import GithubIcon from "./Icons/GithubIcon";
import HTMLIcon from "./Icons/HTMLIcon";
import JavaScriptIcon from "./Icons/JavaScriptIcon";
import FireBaseIcon from "./Icons/FireBaseIcon";
import SassIcon from "./Icons/SassIcon";
import cssIcon from "./Icons/cssIcon";
import Image from "next/image";
const Projects = () => {
	const TAGS = {
		TAILWIND: {
			name: "Tailwind CSS",
			className: "",
			icon: TaildwindIcon,
		},
		HTML: {
			name: "HTML",
			className: "",
			icon: HTMLIcon,
		},
		JavaScript: {
			name: "JavaScript",
			className: "",
			icon: JavaScriptIcon,
		},
		FireBase: {
			name: "Firebase",
			className: "",
			icon: FireBaseIcon,
		},
		Sass: {
			name: "Sass",
			className: "",
			icon: SassIcon,
		},
		CSS: {
			name: "CSS",
			className: "",
			icon: cssIcon,
		},
		React: {
			name: "React",
			className: "",
			icon: ReactIcon,
		},
	};

	const projects = [
		{
			title: "CrudoShop - Eccommerce",
			description:
				"E-commerce Multi-Producto con Carrito de Compras y Panel de Administración para Gestión de Productos: Una plataforma de comercio electrónico completa que permite a los usuarios explorar varios productos, añadirlos a un carrito de compras y realizar compras de manera sencilla. Además, cuenta con un panel de administración exclusivo para usuarios con rol de Administrador, que les permite gestionar y cargar nuevos productos al catálogo. La base de datos está gestionada con Firebase, garantizando una integración fluida y escalable. Para la autenticación de usuarios, se utiliza Firebase Authentication, asegurando un inicio de sesión seguro y eficiente tanto para usuarios generales como para administradores.",
			image: "/projects/crudoShop.png",
			link: "https://crudo-shop-iagb.vercel.app/",
			github: "https://github.com/martinAguilera022/crudoShop",
			tags: [TAGS.HTML, TAGS.CSS, TAGS.React, TAGS.JavaScript, TAGS.FireBase],
		},
		{
			title: "PadelPlanner - Torneos de Pádel",
			description:
				"PadelPlanner es una aplicación web diseñada para organizar y gestionar torneos de pádel de manera eficiente. Permite a los organizadores crear torneos, gestionar parejas y asignar horarios de partidos según la disponibilidad de los jugadores. Los participantes pueden inscribirse y especificar sus horarios, y el sistema ajusta automáticamente las zonas de juego, asignando partidos entre las parejas de acuerdo a su disponibilidad. Además, permite llevar un registro de los resultados y cruces de los partidos, asegurando que cada torneo se desarrolle de manera fluida y organizada. Todo esto se gestiona de forma dinámica, sin necesidad de intervención manual constante.",
			image: "/projects/PadelPlanner.png",
			link: "https://martinaguilera022.github.io/PadelPlanner/",
			github: "https://github.com/martinAguilera022/PadelPlanner",
			tags: [TAGS.HTML, TAGS.CSS, TAGS.JavaScript],
		},
		{
			title: "App del Clima ",
			description:
				"Esta una aplicación web sencilla que te permite ver el clima en tiempo real según tu ubicación actual o buscar el clima de cualquier localidad a través de un buscador. Solo necesitas permitir el acceso a tu ubicación o escribir el nombre de la ciudad, y la app te mostrará la información más actualizada sobre temperatura, condiciones climáticas y otros detalles importantes. Es ideal para tener siempre a mano el pronóstico del clima, sin complicaciones.",
			image: "/projects/AppClima.png",
			link: "https://martinaguilera022.github.io/App-Clima/",
			github: "https://github.com/martinAguilera022/App-Clima",
			tags: [TAGS.HTML, TAGS.CSS, TAGS.JavaScript],
		},
		{
			title: "NexShop - Maquetacion de E-commerce",
			description:
				"Es una maquetacion de un E-commerce con todas sus secciones necesarias, Optimizacion Seo y Responsive",
			image: "/projects/nexShop.png",
			link: "https://martinaguilera022.github.io/nexshop/",
			github: "https://github.com/martinAguilera022/nexshop",
			tags: [TAGS.HTML, TAGS.CSS, TAGS.JavaScript, TAGS.Sass],
		},
		// Agrega más proyectos aquí
	];

	const ProjectCard = ({ title, description, image, link, github, tags }) => {
		return (
			<div className=" p-6 rounded-lg shadow-md">
				<h3 className="text-2xl font-bold mb-4 text-green-400">{title}</h3>
				<p className="text-lg mb-4">{description}</p>
				<Image className="w-full rounded-lg mb-4" src={image} alt={title} />
				<div className="flex flex-wrap gap-2 mb-4">
					{tags.map((tag, index) => (
						<span
							key={index}
							className={`text-white inline-flex items-center justify-center gap-2 px-4 py-1  transition bg-black bg-opacity-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md  group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 `}
						>
							{tag.icon && (
								<tag.icon className="w-4 h-4" width={16} height={16} />
							)}
							{tag.name}
						</span>
					))}
				</div>
				<div className="flex gap-4">
					{github && (
						<LinkButton href={github}>
							<GithubIcon className="w-2 h-2" /> Code
						</LinkButton>
					)}
					{link && (
						<LinkButton href={link}>
							<VerIcon className="w-2 h-2" /> Ver
						</LinkButton>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className=" flex flex-col  justify-center">
			<section className="flex items-center gap-2 mt-8">
				<CodeIcon />
				<h1 className="text-2xl font-bold text-white">Mis Proyectos</h1>
			</section>
			<section id="proyectos" className="grid grid-cols-1 md:grid-cols-1 gap-4">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						image={project.image}
						link={project.link}
						github={project.github}
						tags={project.tags}
					/>
				))}
			</section>
		</div>
	);
};

export default Projects;
