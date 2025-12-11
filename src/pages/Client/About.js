// src/pages/Client/About.js
import React from 'react';

const containerStyle = {
    padding: '50px',
    maxWidth: '900px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'var(--background-light)',
    color: 'var(--text-light)',
    minHeight: '60vh',
};

const titleStyle = {
    fontSize: '3em',
    color: 'var(--primary-light)',
    marginBottom: '20px',
    fontFamily: 'Great Vibes, cursive',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
};

const textStyle = {
    fontSize: '1.1em',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'left',
};

const signatureStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginTop: '40px',
    color: 'var(--text-light)',
    fontFamily: 'Pacifico, cursive',
};

const About = () => {
    return (
        <div style={containerStyle}>

            <h1 style={signatureStyle}>OUR MISSION....</h1>
            
            <p style={textStyle}>
                Welcome to <b>Sri Swami Samarth Decorations</b>, where we specialize in creating truly memorable and beautiful settings for your special occasions. 
                Based in Bhendkhal, Uran, we proudly offer expert Balloon Decoration and stunning Flower Decoration services across the region.
            </p>
            
            <p style={textStyle}>
                We believe every event is unique. While our portfolio showcases our creative flair and high standards, we are dedicated to bringing your vision to life. 
                We don't just offer pre-set designs; we give our clients the option to select and customize their own designs, ensuring a personal touch that truly reflects your celebration.
            </p>
            
            <p style={textStyle}>
                Our commitment is to deliver divine elegance and meticulous execution, making your event a joyous and hassle-free experience.
            </p>

            <p style={signatureStyle}>— Swapnil Gharat</p>
        </div>
    );
};

export default About;