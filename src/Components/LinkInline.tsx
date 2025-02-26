import React from 'react';

interface LinkInlineProps {
  href: string; // Define el tipo de la prop href
  children: React.ReactNode; // Define el tipo de los hijos
}

const LinkInline: React.FC<LinkInlineProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"
    >
      {children}
    </a>
  );
};

export default LinkInline;