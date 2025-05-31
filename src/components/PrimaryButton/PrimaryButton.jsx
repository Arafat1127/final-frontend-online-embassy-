import React from 'react';
const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='border-2  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg   text-white bg-gradient-to-r from-primary to-secondary shadow-xl w-full'>{children}</button>
        </div>
    );
};

export default PrimaryButton;


// flex justify - center btn border - 0  bg - gradient - to - r from - primary to - secondary text - white 