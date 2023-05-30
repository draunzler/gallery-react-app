import React from 'react';

import img1 from './img/img1.jpg';
import img2 from './img/img1.jpg';
import img3 from './img/img1.jpg';
import img4 from './img/img1.jpg';
import img5 from './img/img1.jpg';
import img6 from './img/img1.jpg';
import img7 from './img/img1.jpg';
import img8 from './img/img1.jpg';
import img9 from './img/img1.jpg';
import img10 from './img/img1.jpg';
import img11 from './img/img1.jpg';

const Gallery = () => {
    
    let data =[
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        }
    ]
    return(
        <>
        <div className="gallery">
            {
                data.map((item, index)=>{
                    return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Gallery;