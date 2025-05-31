import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import visaBannerImg from '../../../assets/images/education.jpg'
import "react-day-picker/style.css";

const VisaBanner = ({ setSelectedDate, selectedDate }) => {
    return (
        <div className="">
            <div className="hero py-5 md:py-10">
                <div className=" md:flex justify-center items-center md:gap-5 md:px-5">
                    <div className="w-[300px] md:w-2/5 mb-5 shadow-2xl rounded-xl p-3 md:p-10 flex justify-center">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            footer={
                                selectedDate ? `Selected: ${selectedDate.toLocaleDateString()}` : "Pick a day."
                            }
                        />

                    </div>
                    <div className="w-[300px] md:w-3/5 md:flex justify-end">
                        <img
                            src={visaBannerImg}
                            className="mt-5 md:mt-0 p-2 md:p-0 md:w-4/6 md:h-[500px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaBanner;