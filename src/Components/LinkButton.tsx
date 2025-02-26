import React from 'react';

interface LinkButtonProps {
  href: string; // Define el tipo de la prop href
  children: React.ReactNode; // Define el tipo de los hijos
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer" // Agregado por razones de seguridad
      href={props.href}
      role="link"
      
    >
      {props.children}
    </a>
  );
};

export default LinkButton;