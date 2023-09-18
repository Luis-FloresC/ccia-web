"use client";

import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto';
import Image from 'next/image'
import { ScrollPanel } from 'primereact/scrollpanel';
import { Splitter, SplitterPanel } from 'primereact/splitter';

export function ContentCEV() {

    return (
        <div className="container-fluid">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">

                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 ">
                    <br />
                    <br />
                    <ScrollPanel style={{ width: '100%', height: '450px' }}>

                        <h5 className="fw-bold">
                            Reseña ​Historica
                        </h5>
                        <div className="text-sm text-black">
                            <br />
                            <h6 className="fw-bold text-start text-normal">
                                !El Centro de Educación Vocacional La Ceiba tiene abierta las puerta para ti!
                            </h6>
                            <br />
                            <p className="text-start">
                                Como resultado de un convenio firmado en el año 2001 por la Cámara de Comercio e Industrias de Atlántida (CCIA) y el programa DEVTECH/USAID, fue construido y equipado el Centro de Educación Vocacional “La Ceiba”, en un terreno de dos manzanas donado por el Gobierno de Honduras a través de la Secretaría de Agricultura y Ganadería (SAG), ubicado en la colonia “El Confite” en la ciudad de La Ceiba.
                            </p>


                        </div>

                        <div className="text-black">



                            <p className="text-start">
                                El CEV “La Ceiba” dio inicio a sus operaciones a finales del mes de mayo del año 2002, gracias a las gestiones acertadas de la CCIA, a través de las cuales se equipó para que inicialmente se ofrecieran cursos en tres áreas técnicas: Corte y Confección, Mecánica Automotriz y Refrigeración.
                            </p>

                            <p className="text-start">
                                El proyecto tuvo un costo aproximado en sus inicios de 11 millones de lempiras, fondos obtenidos en su mayor parte de USAID ($500,000.00).
                                Actualmente funciona con tres (3) áreas técnicas: Mecánica Automotriz, Refrigeración y Computación, además del programa EDUCATODOS.

                                Han egresado aproximadamente 2,260 alumnos hasta el 2014. Actualmente hay una matrícula de 170 alumnos.
                            </p>



                        </div>

                    </ScrollPanel>
                </div>
                <div className="col-lg-4  p-0 overflow-hidden shadow-lg">
                    <Image className="rounded-lg-3 rounded" src="/images/inicio/Cards/CEVLC.jpg" alt="" width="300" height={300} />
                </div>
            </div>

            <div className="row">
                <br />
                <Splitter style={{ height: 'auto', background: "white" }}>
                    <SplitterPanel className="flex align-items-center justify-content-center">

                        <div className="container">
                            <br />
                            <h6 className=" fw-bold">Objetivos Institucionales</h6>
                            <div className="list-group">
                                <ul className="list-group list-group-flush list-group-numbered text-start">
                                    <li className="list-group-item">
                                        Elevar el nivel de calidad de la educación vocacional que brinda, mediante la implementación de servicios educativos integrados que garanticen la formación tecnológica de los participantes de acuerdo con los niveles y necesidades del país
                                    </li>
                                    <li className="list-group-item">
                                        Lograr la formación integral de los participantes en armonía con sus capacidades así como los requerimientos de la comunidad.
                                    </li>
                                    <li className="list-group-item">
                                        ograr el mejoramiento y óptima utilización de la capacidad instalada en términos que garanticen un adecuado y racional servicio educativo.
                                    </li>
                                    <li className="list-group-item">
                                        Estimular la cooperación de la comunidad en la promoción y gestión de los servicios educativos que requieren
                                    </li>
                                    <li className="list-group-item">
                                        Integrar el trabajo educativo con el sistema productivo, ligando la educación a las necesidades y realidad socio-económica de la región y contribuyendo a su transformación y desarrollo integral.
                                    </li>
                                    <li className="list-group-item">
                                        Certificar a los estudiantes que alcancen los objetivos previstos en cada una de las áreas técnicas en las que se brinda capacitación.
                                    </li>
                                    <li className="list-group-item">
                                        Orientar a los estudiantes para ocupar puestos de trabajo en diferentes empresas de la comunidad.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">

                        <div className="container">
                            <div className="col-lg-12  p-0 overflow-hidden shadow-lg justify-content-center">
                                <Image className="rounded-lg-3 rounded" style={{maxWidth:'auto'}} src="/images/CEV/2.jpg" alt="" width="600" height={400} />
                            </div>
                        </div>
                    </SplitterPanel>
                </Splitter>
                <div className="col-md-12">
                    <br />
                    <HeroeSinFoto title={"Nuestra Ubicación"} content={"Cámara de Comercio e Industrias de Atlántida"} />
                </div>
                <div className="col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.0554316675393!2d-86.8562956!3d15.7482066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6901cca1c6f2a7%3A0x106c0e2ba0e90ed7!2sCev%20La%20Ceiba!5e0!3m2!1ses-419!2shn!4v1695009664470!5m2!1ses-419!2shn" width="800" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <br />
                </div>
                <br />
            </div>

        </div>
    );
}
