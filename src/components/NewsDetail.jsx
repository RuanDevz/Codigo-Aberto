import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { slug } = useParams();
  
  const noticias = [
    {
      id: 1,
      title: 'Eleições 2024: tudo que você precisa saber',
      content: 'Aqui está o conteúdo completo sobre as eleições de 2024...',
      slug: 'eleicoes-2024',
      image: 'https://via.placeholder.com/600x400',
      date: '2024-09-12'
    },
    {
      id: 2,
      title: 'Mercado financeiro reage à crise global',
      content: 'Análise completa sobre a crise global e seus impactos no mercado financeiro...',
      slug: 'mercado-financeiro-crise',
      image: 'https://via.placeholder.com/600x400',
      date: '2024-09-11'
    },
    {
      id: 3,
      title: 'Novas tecnologias que vão mudar o mundo',
      content: 'Discussão sobre as inovações tecnológicas que podem transformar o futuro...',
      slug: 'novas-tecnologias',
      image: 'https://via.placeholder.com/600x400',
      date: '2024-09-10'
    }
  ];

  // Encontrar a notícia com o slug correspondente
  const noticia = noticias.find(noticia => noticia.slug === slug);

  if (!noticia) {
    return <h2>Notícia não encontrada</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <img src={noticia.image} alt={noticia.title} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-3xl font-bold mb-4">{noticia.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{noticia.date}</p>
      <p className="text-lg">{noticia.content}</p>
    </div>
  );
};

export default NewsDetail;
