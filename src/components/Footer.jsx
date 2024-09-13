import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Seção de Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Links Úteis</h4>
            <ul>
              <li><Link to="/" className="hover:text-yellow-500">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-yellow-500">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-yellow-500">Contato</Link></li>
              <li><Link to="/politica-privacidade" className="hover:text-yellow-500">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Seção de Contato */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Contato</h4>
            <p>Email: <a href="mailto:contato@noticiashoje.com" className="hover:text-yellow-500">contato@noticiashoje.com</a></p>
            <p>Telefone: (11) 1234-5678</p>
          </div>

          {/* Seção de Redes Sociais */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Redes Sociais</h4>
            <ul className="flex space-x-4">
              <li><a href="https://facebook.com" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Notícias Hoje. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
