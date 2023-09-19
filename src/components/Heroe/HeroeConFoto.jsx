"use client";
import './heroe.css'
export function HeroeConFoto({ title, content, links, image, width = "700", height = "500", tipoFondo = "degradado" }) {
    const clases = "container col-xxl-8  aqua-gradient w-auto rounded-2";

    return (
        <div className={tipoFondo !== "solid" ? "container col-xxl-8  aqua-gradient w-auto rounded-2 border" : "container col-xxl-8  bg-white w-auto rounded-2 border"}>
            <div className="row flex-lg-row align-items-center">
                <div className="col-10 col-sm-8 col-lg-6 m-0 p-0">
                    <img src={image} className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width={width} height={height} loading="lazy" />
                </div>
                <div className="col-lg-6 ">
                    <h5 className=" fw-bold text-body-emphasis  text-white" style={{ fontSize: "30px" }}>{title}</h5>
                    <p className="lead text-black">{content}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        {links.map((link, key) => (
                            <div key={key}>
                                {link.href == "#" ? (
                                    <button type="button" class="btn btn-success btn-lg px-4 me-md-2">{link.title}</button>
                                ) : (
                                    <a type="button" href={link.href} className="btn btn-success btn-lg px-4 me-md-2">{link.title}</a>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}