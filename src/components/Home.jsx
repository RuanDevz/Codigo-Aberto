import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tema } = useParams(); // Obtém o tema da URL

  const noticias = [
    {
      id: 1,
      title: 'Eleições 2024: tudo que você precisa saber',
      description: 'Resumo das principais pautas das eleições de 2024',
      slug: 'eleicoes-2024',
      image: 'https://via.placeholder.com/600x400',
      date: '2024-09-12',
      tema: "politica"
    },
    {
      id: 2,
      title: 'Mercado financeiro reage à crise global',
      description: 'Impacto da crise nas principais bolsas de valores',
      slug: 'mercado-financeiro-crise',
      image: 'https://via.placeholder.com/600x400',
      date: '2024-09-11',
      tema: "economia"
    },
    {
      id: 3,
      title: 'Novas tecnologias que vão mudar o mundo',
      description: 'Uma análise das inovações tecnológicas que estão por vir',
      slug: 'novas-tecnologias',
      image: 'https://via.placeholder.com/600x400',
      date: '2024-09-10',
      tema: "tecnologia"
    }
  ];

  // Filtra as notícias com base no tema selecionado
  const noticiasFiltradas = tema ? noticias.filter(noticia => noticia.tema === tema) : noticias;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">{tema ? `Notícias sobre ${tema.charAt(0).toUpperCase() + tema.slice(1)}` : 'Últimas Notícias'}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticiasFiltradas.map((noticia) => (
          <div key={noticia.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={noticia.image} alt={noticia.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{noticia.title}</h2>
              <p className="text-gray-600">{noticia.description}</p>
              <p className="text-sm text-gray-500 mt-2">{noticia.date}</p>
              <Link to={`/noticia/${noticia.slug}`} className="text-blue-500 mt-4 block">Leia mais</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
