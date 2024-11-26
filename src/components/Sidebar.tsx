import { 
  Home as HomeIcon, 
  UserPlus, 
  Activity, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import './Sidebar.css';

export const Sidebar = ({ 
  isOpen, 
  setIsOpen, 
  currentView, 
  setCurrentView, 
  subView, 
  setSubView 
}) => {
  const mainMenuItems = [
    { id: 'home', icon: <HomeIcon size={20} />, label: 'Home' },
    { id: 'cadastro', icon: <UserPlus size={20} />, label: 'Cadastro' },
    { id: 'atividades', icon: <Activity size={20} />, label: 'Atividades' },
    { id: 'ocorrencias', icon: <AlertCircle size={20} />, label: 'Ocorrências' }
  ];

  const subMenuItems = {
    cadastro: [
      'Usuários',
      'Unidades de Manutenção',
      'Áreas',
      'Sistemas',
      'Equipamentos'
    ],
    atividades: [
      'Atividades',
      'Planos de Atividades',
      'Atividades Agendadas'
    ],
    materiais: [
      'Cadastro de Materiais',
      'Solicitações de Materiais',
      'Almoxarifado'
    ],
    ocorrencias: [
      'Lista de Ocorrências'
    ]
  };

  const handleMainMenuClick = (itemId) => {
    if (currentView === itemId) {
      // If clicking the same item, just toggle the subview visibility
      setSubView('');
    } else {
      // If clicking a different item, switch to it and clear subview
      setCurrentView(itemId);
      setSubView('');
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="primary-menu">
        {mainMenuItems.map(item => (
          <button
            key={item.id}
            className={`menu-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => handleMainMenuClick(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
            {item.id !== 'home' && <ChevronRight className="chevron" />}
          </button>
        ))}
      </div>

      {currentView !== 'home' && (
        <div className="secondary-menu">
          {subMenuItems[currentView]?.map(item => (
            <button
              key={item}
              className={`submenu-item ${subView === item ? 'active' : ''}`}
              onClick={() => setSubView(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}