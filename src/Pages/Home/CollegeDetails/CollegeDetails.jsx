import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const colleges = useLoaderData();
    console.log(colleges)
     const {_id, image, name, admission_date, research_history, sports, events, research_work, events_details, admission_process,  } = colleges;
    return (
        <div className="">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl mx-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-xl'>{research_history}</p>
                <p>{research_work}</p>
                <p><span className='font-bold text-xl'>Admission date: </span>{admission_date}</p>
                <p><span className='text-xl font-bold'>Admission process: <br></br> </span>{admission_process}</p>
                <span className='font-bold'>Sports:</span> 
                <p className='grid grid-cols-3 gap-4'>{sports.map(sport => <p>{sport.name}</p>)}</p>
                <p><span className='font-bold'>Events:</span> {events.map(event => <p className=''>{event.name} <br></br> <small className=''>{event.details}</small></p>)}</p>
                <div className="card-actions">
                    <Link to='/home'><button className="btn btn-primary"> back to home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;