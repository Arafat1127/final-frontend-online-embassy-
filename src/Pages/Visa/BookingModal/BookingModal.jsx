import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ time, selectedDate }) => {
    const date = format(selectedDate, "PP")
    return (
        <div className='text-black'>
            <input type="checkbox" id="book_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className='flex justify-between items-start'>

                        <h3 className="text-lg font-bold">{time.name}</h3>
                        <label htmlFor="book_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-primary text-white font-bold">✕</label>

                    </div>
                    <form className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Name" />
                        <label className="label">Date</label>
                        <input
                            value={date}
                            readOnly
                            type="text" className="input w-full" placeholder="Date" />
                        <label className="label">Time</label>
                        <select defaultValue="Pick a browser" className="select input w-full">
                            <option disabled={true}>Pick a browser</option>
                            <option>Chrome</option>
                            <option>FireFox</option>
                            <option>Safari</option>
                        </select>

                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Phone</label>
                        <input type="number" className="input w-full" placeholder="Phone" />

                        <input type='submit'
                            value='Pick a Time'
                            className=" btn btn-primary mt-4"
                        />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
