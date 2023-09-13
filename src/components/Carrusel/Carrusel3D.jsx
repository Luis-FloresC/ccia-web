"use client";

import { useState } from 'react';
import './Carrusel.css'

export function Carrusel3D({ pictures = [] }) {

    const [images, setImages] = useState(pictures);

    return (
        <div className="content-all">
            <div className="content-carrousel">
                {pictures.map((picture, key) => (
                    <figure key={key}><img src={picture} /></figure>
                ))}
            </div>
        </div>
    );
}
