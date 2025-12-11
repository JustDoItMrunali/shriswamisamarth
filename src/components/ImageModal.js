// src/components/ImageModal.js
import React from 'react';

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark background overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000, // Higher than other modals
    cursor: 'pointer',
};

const modalContentStyle = {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100vh',
    borderRadius: '8px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '-30px', // Positioned outside the image area
    right: '0px',
    background: 'none',
    border: 'none',
    fontSize: '2.5em',
    color: '#ffffff', // White color for visibility against dark background
    cursor: 'pointer',
    zIndex: 2001,
};

const ImageModal = ({ imageUrl, isOpen, onClose }) => {
    if (!isOpen || !imageUrl) return null;

    return (
        // Clicking the overlay closes the modal
        <div style={modalOverlayStyle} onClick={onClose}>
            <div style={modalContentStyle}>
                {/* Close button positioned on top of the image container */}
                <button style={closeButtonStyle} onClick={onClose}>&times;</button>
                
                {/* Image itself */}
                <img 
                    src={imageUrl} 
                    alt="Enlarged Decoration View" 
                    style={imageStyle} 
                    onClick={e => e.stopPropagation()} // Prevent click inside from closing modal
                />
            </div>
        </div>
    );
};

export default ImageModal;