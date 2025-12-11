// // import React, { useState } from 'react';
// // import Header from './components/Header';
// // import OfferCard from './components/OfferCard';
// // import './App.css';

// // // --- Image Imports (Assuming you placed them in src/images) ---
// // // Note: You must save your actual images in src/images/ for these paths to work.
// // import flowerImage from './images/flower-decor.png'; 
// // import balloonImage from './images/balloon-decor.png';
// // // This image is the primary background visual with swirls/balloons
// // import heroVisualBg from './images/_.jpeg'; 
// // // This image is the logo/deity image that sits inside the content area
// // import heroContentImage from './images/image.png'; 


// // const App = () => {
// //   // State for Dark/Light Theme
// //   const [theme, setTheme] = useState('light');

// //   const toggleTheme = () => {
// //     setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
// //     // This toggles the class on the main div, triggering the CSS variables in App.css
// //   };

// //   return (
// //     // Apply the theme class to the main container
// //     <div className={`App ${theme}-theme`}>
      
// //       {/* NEW: The entire top section (Header + Tagline/Image) is wrapped in 'hero-wrapper'. 
// //         The background visual (heroVisualBg) is applied to this wrapper in App.css.
// //       */}
// //       <div 
// //         className="hero-wrapper" 
// //         style={{
// //           // We apply the background image directly here, or via App.css (preferred)
// //           // Using style to ensure the image path is handled correctly if you don't use the CSS method
// //           backgroundImage: `url(${heroVisualBg})` 
// //         }}
// //       > 
        
// //         {/* 1. Header with Logo, Nav Links, and Theme Toggle (Now an overlay) */}
// //         <Header theme={theme} toggleTheme={toggleTheme} />

// //         {/* 2. Hero Content Section: Tagline and Decorative Image */}
// //         <section className="hero-section">
// //           <div className="tagline-container">
// //             <h1 className="tagline">Crafting Divine Experiences</h1>
// //             <button style={{ 
// //               padding: '20px 40px', 
// //               backgroundColor: '#971570', 
// //               color: 'white', 
// //               border: 'none', 
// //               borderRadius: '50px',
// //               cursor: 'pointer',
// //               transition: 'background-color 0.3s',
// //               marginTop: '20px'
// //             }}>
// // Contact us            </button>
// //           </div>
          
// //           {/* This image is the content element on the right */}
// //           <img src={heroContentImage} alt="Event Design" className="hero-image-content" /> 
// //         </section>
// //       </div>

// //       {/* 3. What We Offer Section: Two Cards with Hover Animation */}
// //       <section className="offer-section">
// //         <h2 className="offer-title">WHAT WE OFFER</h2>
// //         <div className="offer-cards-container">
// //           <OfferCard 
// //             imageSrc={flowerImage} 
// //             title="Flower Decoration" 
// //           />
// //           <OfferCard 
// //             imageSrc={balloonImage} 
// //             title="Balloon Decoration" 
// //           />
// //         </div>
// //       </section>

// //       {/* 4. Contact & Location Section (The new footer-like block) */}
// //       <section className="contact-section" id="contact">
// //         {/* Placeholder for a Google Map Embed (or a static image of a map) */}
// //         <div className="map-placeholder">
// //           Map Placeholder (Insert Google Maps Embed Here)
// //         </div>
// //         <p className="contact-info">
// //           To reach us, contact: **+91-XXXXX-XXXXX**
// //         </p>
// //       </section>

// //     </div>
// //   );
// // };

// // export default App;
// // src/App.js (Updated with Routing and Auth State)
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase'; // Import Firebase Auth

// // Import Components
// import Header from './components/Header';
// import LandingPage from './pages/Client/LandingPage'; // NEW: Separate Landing Page content
// import FlowerDecorations from './pages/Client/FlowerDecorations';
// import BalloonDecorations from './pages/Client/BalloonDecorations';
// import Gallery from './pages/Client/Gallery';
// import AdminLogin from './pages/Admin/AdminLogin';
// import AdminDashboard from './pages/Admin/AdminDashboard';
// import AddDecoration from './pages/Admin/AddDecoration';

// import './App.css';

// // Component to hold the original landing page content
// const LandingPageContent = () => {
//     // ... (Your existing Hero, Offer, and Contact sections go here)
//     // For brevity, let's keep it simple and redirect to the full page later
//     return (
//         <LandingPage />
//     );
// };

// // Admin Route Protection Component
// const PrivateRoute = ({ children, user }) => {
//     return user ? children : <Navigate to="/admin/login" />;
// };

// const App = () => {
//     const [theme, setTheme] = useState('light');
//     const [user, setUser] = useState(null); // Firebase User State
//     const [loading, setLoading] = useState(true);

//     const toggleTheme = () => {
//         setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
//     };

//     // Firebase Auth State Listener
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return unsubscribe;
//     }, []);

//     if (loading) {
//         return <div style={{textAlign: 'center', padding: '100px'}}>Loading Application...</div>;
//     }

//     // Wrap the entire app in the theme provider class
//     return (
//         <div className={`App ${theme}-theme`}>
//             <Router>
//                 <Header theme={theme} toggleTheme={toggleTheme} user={user} />
//                 <main>
//                     <Routes>
//                         <Route path="/" element={<LandingPageContent />} />
//                         <Route path="/flower-decorations" element={<FlowerDecorations />} />
//                         <Route path="/balloon-decorations" element={<BalloonDecorations />} />
//                         <Route path="/gallery" element={<Gallery />} />
                        
//                         {/* Admin Routes */}
//                         <Route path="/admin/login" element={<AdminLogin />} />
//                         <Route path="/admin" element={
//                             <PrivateRoute user={user}><AdminDashboard /></PrivateRoute>
//                         } />
//                         <Route path="/admin/add" element={
//                             <PrivateRoute user={user}><AddDecoration /></PrivateRoute>
//                         } />
//                     </Routes>
//                 </main>
//             </Router>
//         </div>
//     );
// };

// export default App;
// src/App.js (Complete Final Version)
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 

// Import Components
import Header from './components/Header';
import ContactModal from './components/ContactModal'; // For the Contact Us Pop-up
import LandingPage from './pages/Client/LandingPage'; 
import About from './pages/Client/About'; // The new About Us Page

// Admin/Dynamic Imports
import FlowerDecorations from './pages/Client/FlowerDecorations';
import BalloonDecorations from './pages/Client/BalloonDecorations';
import Gallery from './pages/Client/Gallery';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddDecoration from './pages/Admin/AddDecoration';

import './App.css';

// Admin Route Protection Component
const PrivateRoute = ({ children, user }) => {
    return user ? children : <Navigate to="/admin/login" />;
};

const App = () => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);
    // State for the Contact Modal
    const [isContactModalOpen, setIsContactModalOpen] = useState(false); 

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if (loading) {
        return <div style={{textAlign: 'center', padding: '100px'}}>Loading Application...</div>;
    }

    return (
        <div className={`App ${theme}-theme`}>
            <Router>
                <Header 
                    theme={theme} 
                    toggleTheme={toggleTheme} 
                    user={user} 
                    // Pass the function to open the modal to the Header
                    openContactModal={() => setIsContactModalOpen(true)} 
                />
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<About />} /> {/* NEW ABOUT ROUTE */}
                        
                        <Route path="/flower-decorations" element={<FlowerDecorations />} />
                        <Route path="/balloon-decorations" element={<BalloonDecorations />} />
                        <Route path="/gallery" element={<Gallery />} />
                        
                        {/* Admin Routes */}
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin" element={
                            <PrivateRoute user={user}><AdminDashboard /></PrivateRoute>
                        } />
                        <Route path="/admin/add" element={
                            <PrivateRoute user={user}><AddDecoration /></PrivateRoute>
                        } />
                    </Routes>
                </main>
            </Router>
            
            {/* Contact Modal Component (Renders globally) */}
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)} 
            />
        </div>
    );
};

export default App;