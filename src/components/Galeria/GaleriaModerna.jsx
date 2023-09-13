"use client"
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import './galeria.css'

export default function GaleriaModerna({data,MaxWidth}) {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
       setImages(data);
    }, [data]);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} className="rounded"  alt={item.alt} style={{ width: '100%', display: 'block', height: '450px' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt}  style={{ width:'100px',display: 'block',height: '50px' , background:'#0086CD' }} />;
    }

   

   
    const caption = (item) => {
        return (
            <React.Fragment>
                <div className=''>
                    <div className="text-xl mb-2 font-bold text-white">{item.title}</div>
                    <p className="text-black font-bold text-white">{item.alt}</p>
                </div>

            </React.Fragment>
        );
    }

  

    return (
        <div className="card " style={{width:MaxWidth}}>
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular autoPlay 
                item={itemTemplate} thumbnail={thumbnailTemplate}   caption={caption} style={{backgroundColor:'#0086CD !important'}} />
        </div>
    )
}
