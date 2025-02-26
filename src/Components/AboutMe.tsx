import UserCode from "./Icons/UserCode.tsx";

export default function AboutMe(){
    return(
        <div id="sobre-mi" className="h-100vh">
            
            <section className="flex flex-row gap-x-2 items-center">
            <UserCode></UserCode>
            <h1 className="text-2xl font-bold text-white ">
             Sobre mi
            </h1>
            </section>
           
            <p className="text-1xl py-4">
            👨‍💻 Soy estudiante de tercer año de la Licenciatura en Informática, donde he adquirido sólidos conocimientos en Java, SQL, algoritmos y estructuras de datos. Además, complementé mi formación con la carrera de Desarrollador Front-End en Coderhouse, lo que me permitió profundizar en maquetación web, SEO, JavaScript, SASS, HTML, CSS, Bootstrap y React.

            🚀 A lo largo de mi trayectoria, he trabajado en diversos proyectos de desarrollo web, incluyendo una plataforma para la gestión de torneos de pádel, donde implementé lógica avanzada para la asignación de horarios y la administración de cruces.

            🌍 Me apasiona el desarrollo web y sigo aprendiendo constantemente sobre tecnologías y frameworks modernos para crear aplicaciones eficientes, dinámicas y optimizadas para el usuario. Busco oportunidades para seguir creciendo profesionalmente y aportar mis conocimientos en proyectos innovadores.


            </p>
            </div>
    );
}