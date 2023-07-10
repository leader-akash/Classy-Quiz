import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = ({image, name, description}) => {
  return (
  
  <Link className="goto-rule" to="/rule">
    <div className='card-container'>
        <div className='img-container'>
            <img className='card-img' src={image} alt="img"/>
        </div>
        <p className='quiz-name'>{name}</p>
        <hr className='card-line' />
        <p className='description'>
        {description}
        </p>
    </div>
    </Link>
  
  )
}

export default Card