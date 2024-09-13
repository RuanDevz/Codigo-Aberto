import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const temas = [
    { slug: 'politica', name: 'Política' },
    { slug: 'economia', name: 'Economia' },
    { slug: 'tecnologia', name: 'Tecnologia' },
    { slug: 'esportes', name: 'Esportes' },
    { slug: 'entretenimento', name: 'Entretenimento' },
    { slug: 'ciencia', name: 'Ciência' }
  ];

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-500">Código Aberto</Link>
        </div>

        <nav className="hidden lg:flex lg:space-x-6 text-lg">
          <ul className="flex flex-row space-x-6">
            <li><Link to="/" className="hover:text-yellow-500">Início</Link></li>
            {temas.map(tema => (
              <li key={tema.slug}>
                <Link to={`/tema/${tema.slug}`} className="hover:text-yellow-500">{tema.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
