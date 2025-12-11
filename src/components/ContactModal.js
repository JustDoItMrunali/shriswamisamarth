// src/components/ContactModal.js
import React from 'react';

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: 'var(--background-light)',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    color: 'var(--text-light)',
    textAlign: 'left',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '1.5em',
    cursor: 'pointer',
    color: 'var(--text-light)',
};

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={modalOverlayStyle} onClick={onClose}>
            <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
                <button style={closeButtonStyle} onClick={onClose}>&times;</button>
                <h2 style={{ color: 'var(--primary-light)', marginBottom: '20px', fontFamily: 'Great Vibes, cursive' }}>Get In Touch</h2>

                <p><strong>Address:</strong> Bhendkhal, Uran</p>
                <hr style={{ margin: '15px 0', borderTop: '1px solid var(--shadow-light)' }}/>
                
                <p><strong>Contact:</strong> +91 7977746354</p>
                <p><strong>WhatsApp:</strong> +91 7977746354</p>
                <p><strong>Instagram:</strong> shriswamisamarth_deco2515</p>

                <p style={{ marginTop: '20px', fontSize: '0.9em', textAlign: 'center' }}>
                    *Reach out for custom designs and booking enquiries!
                </p>
            </div>
        </div>
    );
};

export default ContactModal;