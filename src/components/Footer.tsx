import 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#" className="social-link">
          <Facebook size={20} />
        </a>
        <a href="#" className="social-link">
          <Twitter size={20} />
        </a>
        <a href="#" className="social-link">
          <Linkedin size={20} />
        </a>
        <a href="#" className="social-link">
          <Instagram size={20} />
        </a>
      </div>
      <p className="copyright">© 2024 Sistema de Manutenção. Todos os direitos reservados.</p>
    </footer>
  );
}