import React from 'react';
import "./Question.css";

const Question = () => {
  return (
    <div className='ques-section'>
    <div className="ques-container">
    <h2 className='ques-topic'>Science</h2>
        <div className='ques-start'>
            <p className=' ques-nav'>Question: <span className='ques-no'>1</span></p>
            <p className=' ques-nav'>Score: <span className='ques-score'>0/10</span></p>
        </div>

        
        <h3 className='ques-heading'>1 The lens used in a simple microscope is :</h3>
        <div className='ques-options'>
        <div className='option-section'>Concave</div>
        <div className='option-section'>Convex</div>
        <div className='option-section'>Inverted</div>
        <div className='option-section'>None of the above</div>
        </div>

        <button className='next-btn'>Next</button>
    </div>
    </div>
  )
}

export default Question