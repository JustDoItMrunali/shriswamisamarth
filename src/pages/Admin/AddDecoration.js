// src/pages/Admin/AddDecoration.js
import React, { useState } from 'react';
import axios from 'axios';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from '../../config/cloudinary';

const AddDecoration = () => {
    const [type, setType] = useState('Flower Decoration');
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [event, setEvent] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
            formData
        );
        return response.data.secure_url; // Returns the public URL of the uploaded image
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageFile) {
            setMessage('Please select an image file.');
            return;
        }

        setLoading(true);
        setMessage('Uploading image and saving data...');

        try {
            // 1. Upload Image
            const imageUrl = await uploadImageToCloudinary(imageFile);

            // 2. Save Data to Firestore
            await addDoc(collection(db, "decorations"), {
                type: type,
                name: name,
                team: team,
                event: event,
                imageUrl: imageUrl,
                createdAt: new Date()
            });

            setMessage('Decoration added successfully!');
            // Clear form
            setName(''); setTeam(''); setEvent(''); setImageFile(null);
            document.getElementById('image-upload').value = null; // Clear file input
        } catch (error) {
            setMessage(`Error adding decoration: ${error.message}`);
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '50px', maxWidth: '600px', margin: '50px auto' }}>
            <h2>Add New Decoration</h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div>
                    <label>Type of Decoration:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} required style={{ width: '100%', padding: '10px' }}>
                        <option>Flower Decoration</option>
                        <option>Balloon Decoration</option>
                    </select>
                </div>
                <div>
                    <label>Decoration Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '10px' }} />
                </div>
                <div>
                    <label>Theme:</label>
                    <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} required style={{ width: '100%', padding: '10px' }} />
                </div>
                <div>
                    <label>Event Type:</label>
                    <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} required style={{ width: '100%', padding: '10px' }} />
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input type="file" id="image-upload" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required />
                </div>
                <button type="submit" disabled={loading} style={{ padding: '10px 20px', backgroundColor: '#7cb342', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    {loading ? 'Submitting...' : 'Submit Decoration'}
                </button>
                {message && <p style={{ color: loading ? 'blue' : (message.startsWith('Error') ? 'red' : 'green') }}>{message}</p>}
            </form>
        </div>
    );
};

export default AddDecoration;