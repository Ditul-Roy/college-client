import React, { useEffect, useState } from 'react';
import CollegeCart from '../CollegeCart/CollegeCart';

const Collage = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-center my-4 font-bold text-green-600'>Our college</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    colleges.slice(0, 3).map(college => <CollegeCart key={college._id} college={college}></CollegeCart>)
                }
            </div>
        </div>
    );
};

export default Collage;