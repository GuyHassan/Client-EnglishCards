import React, { useState } from 'react';
import './style.css'

const Card = ({ word, wordTranslate }) => {
    const [translate, setTranslate] = useState(false);
    return (
        <div className="card-container">
            <div className={!translate ? 'element-card' : 'element-card open'} onClick={() => setTranslate(p => !p)}>
                <div className="front-facing">
                    <p className="title">{word}</p>
                </div>
                <div className="back-facing" >
                    <div className='content-back'>
                        <p>{word}</p>
                        <hr style={{ width: '8vw' }} />
                        <p>{wordTranslate}</p>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Card;

