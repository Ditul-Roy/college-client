import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colleges.map(college => <tr>
                                <td className='flex justify-evenly'>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={college.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{college.name}</td>
                                <th>
                                    <Link to={`/book/${college._id}`}><button className="btn btn-ghost btn-xs">enroll now</button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;