"use client";

import { useState } from 'react';
import './Carrusel.css'

export function Carrusel3D({ pictures = [] }) {

    const [images, setImages] = useState(pictures);

    return (
        <div class="content-all">
            <div class="content-carrousel">
                {pictures.map((picture, key) => (
                    <figure key={key}><img src={picture} /></figure>
                ))}
            </div>
        </div>
    );
}
