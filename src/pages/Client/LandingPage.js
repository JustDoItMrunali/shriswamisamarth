import React from 'react';
import OfferCard from '../../components/OfferCard'; 

// Import images needed for the landing page content
import flowerImage from '../../images/flower-decor.png'; 
import balloonImage from '../../images/balloon-decor.png';
// Assuming 'image.png' is the hero content image (e.g., logo, deity)
import heroContentImage from '../../images/image.png'; 
// Assuming '_.jpeg' is the full-width background visual (swirls, balloons)
import heroVisualBg from '../../images/_.jpeg'; 

const LandingPage = () => {
    
    return (
        <>
            {/* 1. Hero Wrapper: Contains the full-width background and content */}
            <div 
                className="hero-wrapper" 
                style={{
                    // Apply the full-width background image path via inline style
                    backgroundImage: `url(${heroVisualBg})` 
                }}
            > 
                {/* Header is excluded here as it's defined globally in App.js */}
                
                {/* 2. Hero Content Section: Tagline and Decorative Image */}
                <section className="hero-section">
                    <div className="tagline-container">
                        {/* Primary Tagline */}
                        <h1 className="tagline">Crafting Divine Experiences,<br></br> Celebrating Life's Blessings.</h1>
                        {/* Secondary Tagline */}
                        <h3>Where Devotion Meets Design......</h3>
                        
                        {/* Contact Button (Styled for visibility and boldness) */}
                        <button style={{ 
                            padding: '20px 40px', 
                            backgroundColor: '#8f1d6fff', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '25px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                            marginTop: '20px',
                            fontWeight: 'bold',
                            fontSize: '15px'
                        }}>
                            Contact: +91 7977746354
                        </button>
                    </div>
                    
                    {/* Hero Content Image */}
                    <img src={heroContentImage} alt="Event Design" className="hero-image-content" /> 
                </section>
            </div>

            {/* 3. What We Offer Section: Two Cards with Hover Animation */}
          <section className="offer-section">
              <br><br><br>
                <h2 className="offer-title">WHAT WE OFFER</h2>
                <div className="offer-cards-container">
                    
                    {/* Flower Decoration Card: Links to /flower-decorations */}
                    <OfferCard 
                        imageSrc={flowerImage} 
                        title="Flower Decoration" 
                        destination="/flower-decorations" // Directs to the dynamic page
                    />
                    
                    {/* Balloon Decoration Card: Links to /balloon-decorations */}
                    <OfferCard 
                        imageSrc={balloonImage} 
                        title="Balloon Decoration" 
                        destination="/balloon-decorations" // Directs to the dynamic page
                    />
                </div>
            </section>
            {/* 4. Contact & Location Section (Heading, Map, and Contact Info) */}
            <section className="contact-section" id="contact">
                
                {/* Heading and Contact Info container (styled to be above the map) */}
                <div className="contact-details-container"> 
                    <h3 className="section-subtitle">Our Location</h3>
                </div>
                
                {/* Map Placeholder */}
                <div className="map-placeholder">
                    <iframe 
                        title="Business Location Map"
                        // NOTE: This URL is placeholder and needs to be replaced with your actual Google Maps embed URL 
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d235.94649990823135!2d72.98273835044023!3d18.88069192670457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sganpati%20mandir%20bhendkhal!5e0!3m2!1sen!2sin!4v1765446007302!5m2!1sen!2sin"
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                
                {/* Contact Number (Centered by the parent .contact-section text-align: center) */}
                <p className="contact-info">
                    To reach us, contact: **+91 7977746354**
                </p>
                
            </section>
        </>
    );
};

export default LandingPage;
