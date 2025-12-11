// import React from 'react';

// const OfferCard = ({ imageSrc, title }) => {
//   return (
//     <div className="offer-card">
//       <img src={imageSrc} alt={title} className="card-image" />
//       <p className="card-text">{title}</p>
//     </div>
//   );
// };

// export default OfferCard;
// src/components/OfferCard.js (CORRECTED for Linking)
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

// Ensure your destination prop is passed in from LandingPage.js
const OfferCard = ({ imageSrc, title, destination }) => { 
  
  // Base styling for the card container (should ideally be moved to App.css)
  const cardLinkStyle = {
    textDecoration: 'none', // Remove link underline
    display: 'block', // Ensures Link wraps the whole card
    cursor: 'pointer',
    // Hover styles are handled by the .offer-card class in App.css, 
    // but we need to ensure the Link uses that class.
  };

  return (
    // 2. Wrap the entire card content in the Link component
    <Link to={destination} className="offer-card" style={cardLinkStyle}>
      <img src={imageSrc} alt={title} className="card-image" />
      <p className="card-text">{title}</p>
    </Link>
  );
};

export default OfferCard;