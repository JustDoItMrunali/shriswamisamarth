// // // src/pages/Client/Gallery.js
// // import React, { useState } from 'react';
// // import useDecorations from '../../hooks/useDecorations';
// // import DecorationCard from '../../components/DecorationCard';

// // const Gallery = () => {
// //     const { decorations, loading, error } = useDecorations();
// //     const [filter, setFilter] = useState('All');

// //     const filteredDecorations = decorations.filter(d => 
// //         filter === 'All' || d.type === filter
// //     );
    
// //     const buttonStyle = (currentFilter) => ({
// //         padding: '10px 20px',
// //         margin: '5px',
// //         borderRadius: '5px',
// //         cursor: 'pointer',
// //         border: '1px solid #ccc',
// //         backgroundColor: filter === currentFilter ? '#7cb342' : 'var(--background-light)',
// //         color: filter === currentFilter ? 'white' : 'var(--text-light)',
// //         transition: 'background-color 0.3s, color 0.3s'
// //     });

// //     if (loading) return <p style={{textAlign: 'center', padding: '100px'}}>Loading Gallery...</p>;
// //     if (error) return <p style={{textAlign: 'center', padding: '100px', color: 'red'}}>{error}</p>;

// //     return (
// //         <div style={{ padding: '80px' }}>
// //            <center><h2>Our Full Gallery</h2></center> 

// //             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
// //                 <button style={buttonStyle('All')} onClick={() => setFilter('All')}>All Decorations</button>
// //                 <button style={buttonStyle('Flower Decoration')} onClick={() => setFilter('Flower Decoration')}>Flower</button>
// //                 <button style={buttonStyle('Balloon Decoration')} onClick={() => setFilter('Balloon Decoration')}>Balloon</button>
// //             </div>

// //             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
// //                 {filteredDecorations.length > 0 ? (
// //                     filteredDecorations.map(d => <DecorationCard key={d.id} decoration={d} />)
// //                 ) : (
// //                     <p>No decorations match the filter "{filter}".</p>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Gallery;
// // src/pages/Client/Gallery.js (UPDATED with Image Modal Logic)
// import React, { useState } from 'react';
// import useDecorations from '../../hooks/useDecorations';
// import DecorationCard from '../../components/DecorationCard';
// import ImageModal from '../../components/ImageModal'; // NEW Import

// const Gallery = () => {
//     const { decorations, loading, error } = useDecorations();
//     const [filter, setFilter] = useState('All');
    
//     // NEW: State for the modal
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [currentImageUrl, setCurrentImageUrl] = useState('');

//     const handleImageClick = (imageUrl) => {
//         setCurrentImageUrl(imageUrl);
//         setIsModalOpen(true);
//     };

//     const filteredDecorations = decorations.filter(d => 
//         filter === 'All' || d.type === filter
//     );
    
//     // ... (buttonStyle function remains the same) ...

//     if (loading) return <p style={{textAlign: 'center', padding: '100px'}}>Loading Gallery...</p>;
//     if (error) return <p style={{textAlign: 'center', padding: '100px', color: 'red'}}>{error}</p>;

//     return (
//         <div style={{ padding: '75px' }}>
//            <center> <h2 style={{textAlign: 'center', color: 'red'}} >Our Full Gallery</h2></center>
//           <center> <h7>To view the image in full size, click on the image.</h7></center> 

//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//                 {/* ... (Filter buttons remain the same) ... */}
//             </div>

//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//                 {filteredDecorations.length > 0 ? (
//                     filteredDecorations.map(d => (
//                         <DecorationCard 
//                             key={d.id} 
//                             decoration={d} 
//                             onImageClick={handleImageClick} // Pass the click handler
//                         />
//                     ))
//                 ) : (
//                     <p>No decorations match the filter "{filter}".</p>
//                 )}
//             </div>

//             {/* NEW: Render the Image Modal globally on this page */}
//             <ImageModal
//                 imageUrl={currentImageUrl}
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//             />
//         </div>
//     );
// };

// export default Gallery;
// src/pages/Client/Gallery.js (Complete with Filter Buttons and Modal Logic)
import React, { useState } from 'react';
import useDecorations from '../../hooks/useDecorations';
import DecorationCard from '../../components/DecorationCard';
import ImageModal from '../../components/ImageModal'; // Image Modal Import

const Gallery = () => {
    const { decorations, loading, error } = useDecorations();
    const [filter, setFilter] = useState('All');
    
    // State for the image modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState('');

    const handleImageClick = (imageUrl) => {
        setCurrentImageUrl(imageUrl);
        setIsModalOpen(true);
    };

    const filteredDecorations = decorations.filter(d => 
        filter === 'All' || d.type === filter
    );
    
    // Define the buttonStyle function here (PRESERVED LOGIC)
    const buttonStyle = (currentFilter) => ({
        padding: '10px 20px',
        margin: '5px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        // Note: Using theme variables and local state for styling
        backgroundColor: filter === currentFilter ? 'var(--primary-light)' : 'var(--background-light)', 
        color: filter === currentFilter ? 'white' : 'var(--text-light)',
        transition: 'background-color 0.3s, color 0.3s'
    });


    if (loading) return <p style={{textAlign: 'center', padding: '100px'}}>Loading Gallery...</p>;
    if (error) return <p style={{textAlign: 'center', padding: '100px', color: 'red'}}>{error}</p>;

    return (
        <div style={{ padding: '75px' }}>
           <center> <h2 style={{textAlign: 'center', color: 'red'}} >Our Full Gallery</h2></center>
           <center> <h5 >To view the image in full size, click on the image.</h5></center> 
            
            <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '30px' }}>
                {/* *** RESTORED FILTER BUTTONS *** */}
                <button style={buttonStyle('All')} onClick={() => setFilter('All')}>All Decorations</button>
                <button style={buttonStyle('Flower Decoration')} onClick={() => setFilter('Flower Decoration')}>Flower</button>
                <button style={buttonStyle('Balloon Decoration')} onClick={() => setFilter('Balloon Decoration')}>Balloon</button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredDecorations.length > 0 ? (
                    filteredDecorations.map(d => (
                        <DecorationCard 
                            key={d.id} 
                            decoration={d} 
                            onImageClick={handleImageClick} // Pass the click handler for the modal
                        />
                    ))
                ) : (
                    <p>No decorations match the filter "{filter}".</p>
                )}
            </div>

            {/* Render the Image Modal globally on this page */}
            <ImageModal
                imageUrl={currentImageUrl}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Gallery;