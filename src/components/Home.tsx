import React from 'react';
import { Banner } from './Banner';
import {
  Calendar,
  QrCode,
  AlertCircle,
  FileText,
  BarChart2,
  File,
  Newspaper,
  Calendar as EventIcon,
} from 'lucide-react';
import './Home.css';

export const Home = () => {
  const cards = [
    { icon: <Calendar size={24} />, title: 'Calendário de Atividades' },
    { icon: <QrCode size={24} />, title: 'QRCodes' },
    { icon: <AlertCircle size={24} />, title: 'Ocorrências e Correções' },
    { icon: <FileText size={24} />, title: 'PMOC' },
    { icon: <BarChart2 size={24} />, title: 'Relatório MTBF, MTTR e Disponibilidade' },
    { icon: <File size={24} />, title: 'Documentos' },
    { icon: <Newspaper size={24} />, title: 'Notícias Arpol' },
    { icon: <EventIcon size={24} />, title: 'Eventos' },
  ];

  return (
    <div className="home-container">
      <Banner /> {/* Adicionado o banner aqui */}
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
