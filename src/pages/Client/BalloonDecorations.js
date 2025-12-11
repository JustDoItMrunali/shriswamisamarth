// src/pages/Client/BalloonDecorations.js
import React, { useState } from 'react'; // ADDED useState
import useDecorations from '../../hooks/useDecorations';
import DecorationCard from '../../components/DecorationCard';
import ImageModal from '../../components/ImageModal'; // ADDED Modal Import

const BalloonDecorations = () => {
    const { decorations, loading, error } = useDecorations("Balloon Decoration");

    // ADDED: State for the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState('');

    // ADDED: Handler function to open the modal
    const handleImageClick = (imageUrl) => {
        setCurrentImageUrl(imageUrl);
        setIsModalOpen(true);
    };
    
    // PRESERVED: Existing loading and error checks
    if (loading) return <p style={{textAlign: 'center', padding: '100px'}}>Loading Balloon Decorations...</p>;
    if (error) return <p style={{textAlign: 'center', padding: '100px', color: 'red'}}>{error}</p>;

    return (
        <div style={{ padding: '75px' }}>
                       <center><h2 style={{textAlign: 'center', color: 'red'}} >Balloon Decoration Portfolio</h2></center> 
          <center> <h7>To view the image in full size, click on the image.</h7></center> 

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {decorations.length > 0 ? (
                    decorations.map(d => (
                        <DecorationCard 
                            key={d.id} 
                            decoration={d} 
                            onImageClick={handleImageClick} // ADDED: Pass the click handler
                        />
                    ))
                ) : (
                    <p>No balloon decorations added yet.</p>
                )}
            </div>
            
            {/* ADDED: Render the Image Modal */}
            <ImageModal
                imageUrl={currentImageUrl}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default BalloonDecorations;