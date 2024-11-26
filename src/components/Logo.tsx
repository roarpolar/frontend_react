import logo from '../assets/image/logo_arpol.png';

export const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src={logo}
        alt="Logo Arpol"
        className="logo-image"
        width={32}
        height={32}
      />
    </div>
  );
};
