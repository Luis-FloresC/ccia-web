"use client";
import { useState } from "react";
import Image from 'next/image'
import './card.css'
export function Cards({ data = [] }) {
    const [images, setImages] = useState(data);
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                {images.map((image, index) => (
                    <div className="col-4" key={index}>
                        <div className="container">
                            <section className="mx-auto my-5" >

                                <div className="card testimonial-card mt-2 mb-3" style={{height:"auto"}}>
                                    <div className="card-up aqua-gradient"></div>
                                    <div className="avatar mx-auto white">
                                        <img src={image.img} className="rounded-circle img-fluid"
                                            alt="woman avatar" />
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-title font-weight-bold">{image.title}</h6>
                                        <hr />
                                        <p style={{textAlign:'justify'}}>{image.caption}</p>
                                        <hr />
                                        <a className="btn  aqua-gradient text-white w-auto fw-bold"  href={image.link}>Ver Más</a>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}