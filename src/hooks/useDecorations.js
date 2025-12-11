// src/hooks/useDecorations.js
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const useDecorations = (type = null) => {
    const [decorations, setDecorations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDecorations = async () => {
            try {
                let q;
                const decorationsRef = collection(db, 'decorations');

                if (type) {
                    // Query for a specific type (e.g., "Flower Decoration")
                    q = query(decorationsRef, where('type', '==', type));
                } else {
                    // Query for all decorations (for the Gallery)
                    q = query(decorationsRef);
                }

                const querySnapshot = await getDocs(q);
                const fetchedDecorations = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                setDecorations(fetchedDecorations);
            } catch (err) {
                setError("Failed to fetch decorations.");
                console.error("Firestore fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDecorations();
    }, [type]); // Refetch if type changes

    return { decorations, loading, error };
};

export default useDecorations;