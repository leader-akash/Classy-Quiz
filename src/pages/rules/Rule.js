import React from 'react';
import "./Rule.css";
import { Link } from 'react-router-dom';

const Rule = () => {
  return (
    <div className='rule-flex'>
    <div className='rule-container'>
        <div className='rule-heading'>
            <span className='trophy'>🏆</span>

            <br />
                Rules to be followed
        </div>
        <ul className='rule-content'>
            <li className='rule-item'>💪   You will face 5 Questions</li>
            <li className='rule-item'>💎   The right answer will give you 10 points</li>
            <li className='rule-item'>😄   There is no negative marking</li>
            <li className='rule-item'>🏆   Score atleast 70% to win.</li>
        </ul>
        <Link className="goto-ques" to="/question"><button className='start-btn'>Let's Start</button></Link>
    </div>
    </div>
  )
}

export default Rule