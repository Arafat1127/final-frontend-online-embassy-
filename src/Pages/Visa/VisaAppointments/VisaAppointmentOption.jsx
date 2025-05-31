import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const VisaAppointmentOption = ({ appointmentOption, setTime }) => {
    const { name, slots, } = appointmentOption;

    return (
        <div className="text-center rounded-2xl px-4 py-2 text-white  shadow-sm  bg-gradient-to-r from-primary to-secondary">
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <label htmlFor="book_modal" className="border-2  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg   text-white bg-gradient-to-r from-primary to-secondary shadow-xl w-full" onClick={() => setTime(appointmentOption)}>Pick A Time</label>
            </div>
        </div>
    );
};

export default VisaAppointmentOption;