
import Badge from '../Components/Badge';
import GithubIcon from "../Components/icons/GithubIcon";
import LinkedInIcon from "../Components/icons/LinkedIn";
import GoogleEmailIcon from '../Components/icons/Gmail';
import ButtonLink from '../Components/icons/ButtonLinks';
import CodeIcon from '../Components/icons/code';
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Projects';

export default function Home() {
  return (
    
    <main className='w-full mx-auto lg:w-[740px]  flex flex-col'>

      <section id='HOME' className="h-screen flex flex-col  justify-center gap-y-4">
        <CodeIcon />
        <h1 className='text-white text-4xl font-bold flex flex-row gap-x-4 pb-4'>
          Holaa, soy Martin Aguilera👋🏻. 
          <a 
            href='https://www.linkedin.com/in/martin-aguilera-69005527a/' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='flex justify-center items-center'
          >
            <Badge>Ready to Work</Badge>
          </a>
        </h1>
        <h2 className="text-white text-2xl text-wrap">
          <span className="opacity-90 text-green-400">💻 Desarrollador Web apasionado </span>  
          <span className="opacity-90 text-purple-400">🎓 Estudiante de Licenciatura en Informática </span>  
          <span className="opacity-90 text-blue-400">📍 Desde Buenos Aires, Argentina 🇦🇷</span>
        </h2>
        <ul className='flex flex-row gap-x-4'>
          <li>
            <ButtonLink 
              className='opacity-90 text-white-90' 
              href="https://www.linkedin.com/in/martin-aguilera-69005527a/"
            >
              <LinkedInIcon width={20} height={20} fill="white" />
              <p className='text-white'>LinkedIn</p>
            </ButtonLink>
          </li>
          <li>
            <ButtonLink href="https://github.com/martinAguilera022">
              <GithubIcon width={20} height={20} fill="white" />
              <p className='text-white'>Github</p>
            </ButtonLink>
          </li>
          <li>
            <ButtonLink href="mailto:totoaguil022@gmail.com">
              <GoogleEmailIcon width={20} height={20} />
              <p className='text-white'>totoaguil022@gmail.com</p>
            </ButtonLink>
          </li>
        </ul>

        
      </section>
      
      <Projects  />
      
      <section className="h-screen flex flex-col justify-center items-center">
        <AboutMe />
      </section>
    </main>
    
  );
}


