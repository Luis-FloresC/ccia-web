
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
            <div class="card" style={{width: 'auto' , height:'370px'}}>
                <img class="card-img-top" height={150} src={product.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Capacidad</p>
                    <a href="#" class="btn btn-primary w-auto" >{product.capacidad}</a>
                </div>
            </div>
        );
    };

    return (
        <div className="card" >
            <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" autoplayInterval={10000} verticalViewPortHeight="360px"
                itemTemplate={productTemplate} />
        </div>
    )
}
