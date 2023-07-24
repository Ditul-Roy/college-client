import React, { useEffect, useState } from 'react';
import GalleryCart from '../GalleryCart/GalleryCart';

const Gallery = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-4xl text-center my-4 font-bold text-green-600'>Our college gallery</h1>
                <div className=' gap-6'>
                   <GalleryCart></GalleryCart>
                </div>
            </div>
        </div>
    );
};

export default Gallery;