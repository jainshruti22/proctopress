import React from 'react';

const Card = (props) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${props.cardExtraClasses} hover:shadow-lg transition duration-200 ease-in-out`}>
      {props.children}
    </div>
  );
};

export default Card;
