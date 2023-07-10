import React from 'react';
import "./Homepage.css"
import Card from '../../component/card/Card';

import {cardData} from "../../data/card.data"
const Homepage = () => {
  return (
    <>
    <div className='info-container'>

        <div className='info-content'>Unlocking knowledge at Fast speed !</div>
        
        <div className='info-content-2'>Choose your quiz category</div>

      <div className="card-flex">
        {
        cardData.map((el,i) => {
          return(
            <Card 
              image={el.image}
              name={el.name}
              description={el.description}
            />
          )
        })
        }
        </div>
        
        
    </div>
    </>
  )
}

export default Homepage