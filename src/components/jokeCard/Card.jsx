import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className=" mx-auto my-auto bg-gray-600 w-80 h-80 shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2 w-4/5 h-1/4">{title}</h2>
            <p className="">{content}</p>
        </div>
    );
};

export default Card;
