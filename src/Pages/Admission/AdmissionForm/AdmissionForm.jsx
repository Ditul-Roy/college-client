import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdmissionForm = () => {
    const admission = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const collegeName = form.clgName.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const dob = form.dateOfBirth.value;
        const subject = form.subject.value;
        const photo = form.photo.value;
        console.log(collegeName ,name, email, phone, address, dob, subject, photo)
    }
    return (
        <div>
            <h1 className='text-green-600 text-2xl text-center font-bold my-4'>Admission form</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">college name</span>
                    </label>
                    <input type="text" defaultValue={admission.name} disabled name='clgName' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Student name</span>
                    </label>
                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Student email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Student phone number</span>
                    </label>
                    <input type="number" placeholder="Phone number" name='phone' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="address" name='address' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date of Birth</span>
                    </label>
                    <input type="date" name='dateOfBirth' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input type="text" placeholder="subject" name='subject' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="photo" name='photo' className="input input-bordered" />
                </div>
                <input className='btn btn-ghost' type='submit' value='submit'/>
            </form>
        </div>
    );
};

export default AdmissionForm;