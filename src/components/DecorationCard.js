// // src/components/DecorationCard.js
// import React from 'react';

// const cardStyle = {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '10px',
//     width: '300px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     margin: '15px',
//     backgroundColor: 'var(--background-light)',
//     color: 'var(--text-light)',
//     transition: 'transform 0.3s',
// };

// const imageStyle = {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '6px',
//     marginBottom: '10px',
// };

// const DecorationCard = ({ decoration }) => {
//     return (
//         <div style={cardStyle}>
//             <img src={decoration.imageUrl} alt={decoration.name} style={imageStyle} />
//             <h3>{decoration.name}</h3>
//             <p>Type: {decoration.type}</p>
//             <p>Event: {decoration.event}</p>
//             <p>Theme: {decoration.team}</p>
//         </div>
//     );
// };

// export default DecorationCard;
// src/components/DecorationCard.js (UPDATED for Image Click Modal)
import React from 'react';

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '15px',
    backgroundColor: 'var(--background-light)',
    color: 'var(--text-light)',
    transition: 'transform 0.3s',
};

// Image style is modified to include a pointer cursor
const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '10px',
    cursor: 'zoom-in', // Indicate the image is clickable
};

// Component now accepts 'onImageClick' function as a prop
const DecorationCard = ({ decoration, onImageClick }) => {
    return (
        <div style={cardStyle}>
            {/* Image is now clickable and triggers the modal */}
            <img 
                src={decoration.imageUrl} 
                alt={decoration.name} 
                style={imageStyle}
                // When clicked, calls the function passed from the parent page, sending the image URL
                onClick={() => onImageClick(decoration.imageUrl)} 
            />
            <h3>{decoration.name}</h3>
            <p>Type: {decoration.type}</p>
            <p>Event: {decoration.event}</p>
            {/* NOTE: Corrected the label from "Theme" to "Team" to match decoration.team */}
            <p>Theme: {decoration.team}</p> 
        </div>
    );
};

export default DecorationCard;