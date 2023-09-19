
"use client"
import React, { useState, useEffect } from 'react';

import { Carousel } from 'primereact/carousel';

import { getImagesSalonEventos, getImagesSalonSesiones, getImagesSalonJuntas } from '@/services/Salones';




export function SlideVertical({ typeSalon }) {
    const [products, setProducts] = useState([]);



    useEffect(() => {

        if (typeSalon === 1) {
            getImagesSalonEventos().then((data) => setProducts(data));
        }
        else if (typeSalon === 2) {
            getImagesSalonSesiones().then((data) => setProducts(data));
        }
        else {
            getImagesSalonJuntas().then((data) => setProducts(data));
        }

    }, [typeSalon]);

    const productTemplate = (product) => {


        return (
            <div className="card" style={{width: 'auto' , height:'auto'}}>
                <img className="img-card-top rounded " height={"150px"} src={product.image} alt="Card image cap " />
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:"15px"}}>{product.name}</h5>
                    <p className="card-text">Capacidad</p>
                    <a href="#" className="btn btn-primary w-auto" >{product.capacidad}</a>
                </div>
            </div>
        );
    };

    return (
        <div className="" >
            <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" autoplayInterval={10000} verticalViewPortHeight="360px"
                itemTemplate={productTemplate} />
        </div>
    )
}
