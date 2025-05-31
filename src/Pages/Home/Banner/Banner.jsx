import React from 'react';
import bannerImage from '../../../assets/images/banner.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (

        <div className="">
            <div className="px-5 my-10">
                <div className=" md:flex justify-between items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-2xl md:text-5xl  font-bold text-black">
                            Discover the world across key areas!
                        </h1>
                        <p className="py-6">
                            Make 2024 the year you discover word open community – where you
                            can live, learn, create and innovate at the heart of world. the
                            year you discover word open community – where you can live, learn,
                            create and innovate at the heart of world. Make 2024 the year you
                            discover word open community  where you can live, learn, create
                            and innovate at the heart of world. the year you discover word
                            open community  where you can live, learn, create and innovate at
                            the heart of world.
                        </p>
                        <div className='w-[300px]'>
                            <Link to='/visa'><PrimaryButton>Get Started</PrimaryButton></Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:flex justify-end">
                        <img
                            src={bannerImage}
                            className="mt-5 md:mt-0 p-2 md:p-0 md:w-4/6 md:h-[500px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

