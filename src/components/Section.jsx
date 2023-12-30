
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';
import "./Section.css"

const Section =()=>{
    return(
        <>
            <div className="dflex">
                <div className='card'>
                    <FontAwesomeIcon icon={faWindowMaximize} className='icon' />
                    <h2>Fully Responsive</h2>
                    <p>This theme will look great on any device,no matter the size!</p>
                </div>
                <div className='card'>
                    <FontAwesomeIcon icon={faLayerGroup} className='icon' />
                    <h2>Bootstrap 5 ready</h2>
                    <p>Featuring the latest build of the new bootstrap 5!</p>
                </div>
                <div className='card'>
                    <FontAwesomeIcon icon={faGreaterThanEqual} className='icon' />
                    <h2>Easy to use</h2>
                    <p>Ready to use with your own content,or customize the source files!</p>
                </div>
                
            </div>
        </>
    )
}

export default Section 