import './Banner.css';

import banner from '../assets/image/banner.jpeg';

export const Banner = () => {
  return (
    <div className="banner-container">
      <img 
        src={banner}
        alt="Banner Arpol"
        className="banner-image"
      />
    </div>
  );
};
