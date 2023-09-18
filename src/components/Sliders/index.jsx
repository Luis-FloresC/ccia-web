'use client'
import React, { useState, useEffect } from 'react';

import { Carousel } from 'primereact/carousel';
//import { getOrganizaciones } from '@/services/sliderOrganizaciones';



export function Slider({ data, numVisible, numScroll, width, height, orientacion = 'vertical' }) {
    const [organizaciones, setOrganizaciones] = useState(data);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: numVisible,
            numScroll: numScroll
        },
        {
            breakpoint: '991px',
            numVisible: numVisible,
            numScroll: numScroll
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];





    const productTemplate = (organin) => {
        return (
            <div className="card w-auto">
                <div className="">
                    <img src={`${organin.image}`} alt={organin.name} width={width} height={height} className=" shadow-lg" />
                </div>
            </div>
        );
    };

    return (
        <div className="">
            <Carousel value={organizaciones} className='' autoplayInterval={5000} orientation={orientacion} circular numScroll={numScroll} numVisible={numVisible} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
