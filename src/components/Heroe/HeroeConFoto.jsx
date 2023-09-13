"use client";
import './heroe.css'
export function HeroeConFoto({ title, content, links, image ,width="700",height="500"}) {

    return (
        <div className="container col-xxl-8  aqua-gradient w-auto">
            <div className="row flex-lg-row-reverse align-items-center">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={width} height={height} loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">{title}</h5>
                    <p className="lead text-white">{content}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        {links.map((link, key) => (
                            <a key={key} type="button" href={link.href} className="btn btn-success btn-lg px-4 me-md-2">{link.title}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}