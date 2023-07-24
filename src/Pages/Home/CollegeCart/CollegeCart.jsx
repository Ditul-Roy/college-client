import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCart = ({ college }) => {
    const {_id, image, name, admission_date, research_history, sports, events } = college;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-xl'>{research_history}</p>
                <p><span className='font-bold'>Admission date: </span>{admission_date}</p>
                <span className='font-bold'>Sports:</span> 
                <p className='grid grid-cols-3 gap-4'>{sports.map(sport => <p>{sport.name}</p>)}</p>
                <p><span className='font-bold'>Events:</span> {events.map(event => <p>{event.name}</p>)}</p>
                <div className="card-actions">
                    <Link to={`/college/${_id}`}><button className="btn btn-primary"> view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCart;