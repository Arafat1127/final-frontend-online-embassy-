import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Service = ({ data }) => {
    const { name, img, description } = data
    return (
        <div className="rounded-2xl p-5  text-white  shadow-sm  bg-gradient-to-r from-primary to-secondary">
            <img
                className='w-full h-[350px] rounded-2xl '
                src={img}
                alt='visa image' />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
            <div className='flex justify-center my-3 items-center'>
                <Link to='/visa'> <PrimaryButton >Get Your Service</PrimaryButton></Link>
            </div>
        </div>
    );
};

export default Service;