"use client";
import './heroe.css'
export function HeroeSinFoto({ title, content }) {

    return (
        <div className=" text-secondary text-center aqua-gradient rounded " style={{ height: 'auto', }}>
            <div >
                <h1 className="display-5 fw-bold text-white">{title}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4 text-white">{content}</p>
                </div>
            </div>
        </div>
    );
}