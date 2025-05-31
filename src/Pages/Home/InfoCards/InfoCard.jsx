import React from 'react';

const InfoCard = ({ info }) => {
    const { name, description, image, bgClass } = info
    return (
        <div className={`${bgClass} flex text-white shadow-sm rounded-2xl p-4 items-center`}>
            <figure>
                <img
                    className=''
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;