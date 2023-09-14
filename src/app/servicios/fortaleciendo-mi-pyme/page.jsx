import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { Carrusel } from '@/components/Carrusel'
import { SlideVertical } from '@/components/Servicios/Sliders/SliderVertical'
import Image from 'next/image'


import { Slider } from '@/components/Sliders'
import { getEmprendedoresImages } from '@/services/FortaleciendoMiPymeServices'
import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'

export default async function FortaleciendoMiPyme() {
    const emprendedores = await getEmprendedoresImages();
    return (
        <main>
            <section className="py-5 text-center container">
                <div class="clearfix">
                    <img src="/images/inicio/Cards/1.jpg" class="col-md-6 float-md-end mb-3 ms-md-3 rounded border" alt="..." />

                    <p className="" style={{ textAlign: "justify" }}>
                        Este programa tiene como objetivo impulsar el crecimiento, la competitividad y la sostenibilidad de las Pymes, que representan una parte significativa de la economía y desempeñan un papel crucial en la generación de empleo y el desarrollo empresarial.
                    </p>
                    <p className="" style={{ textAlign: "justify" }}>
                        Este servicio proporciona acceso a programas de capacitación y formación diseñados para fortalecer las habilidades empresariales y la gestión. Estos programas abordan temas como marketing, finanzas, estrategia empresarial, recursos humanos y tecnología, entre otros. La formación es esencial para que las Pymes se mantengan al día con las tendencias del mercado y mejoren su competitividad.    La Cámara brinda un taller llamado “Negocios Conscientes”.
                    </p>

                    <p className="" style={{ textAlign: "justify" }}>
                        El taller de negocios conscientes, se enfoca en la enseñanza de la metodología de un modelo de negocios conscientes, el cual está diseñado para guiar a los emprendedores hacia la creación y gestión de negocios éticos, sostenibles y conscientes.
                    </p>
                </div>

                <dic className="row">
                    <div className="col-md-12">
                        <HeroeSinFoto
                            title={"Módulos"}
                            content={"Fortaleciendo Mi Pyme"}
                        />
                    </div>
                    <div className="col-md-12">
                        <div class="row">
                            <div class="col-4">
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-modulo-0" role="tab" aria-controls="list-home">Introducción de un Negocio Consciente y Cuál es Mi Potencial como Emprendedor</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-modulo-1" role="tab" aria-controls="list-profile">¿Por Qué Existe Mi Negocio?</a>
                                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-modulo-2" role="tab" aria-controls="list-messages">¿A Quién le Vendo?</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-modulo-3" role="tab" aria-controls="list-settings">¿Quién Más Vende?</a>
                                    <a class="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-modulo-4" role="tab" aria-controls="list-home">¿Qué Vendo?</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-modulo-5" role="tab" aria-controls="list-profile">¿Cómo Vendo?</a>
                                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-modulo-6" role="tab" aria-controls="list-messages">¿Cuánto Gasto?</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-modulo-7" role="tab" aria-controls="list-settings">¿Cuándo Alcanzaré las Metas?</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-modulo-8" role="tab" aria-controls="list-settings">¿Qué Impacto Genero?</a>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="list-modulo-0" role="tabpanel" aria-labelledby="list-home-list">
                                        <div className="row flex-lg-row-reverse align-items-center ">
                                            <div className="col-10 col-sm-8 col-lg-4">
                                                <Slider data={emprendedores} width={300} height={300} numScroll={1} numVisible={1} />
                                            </div>
                                            <div className="col-lg-8">
                                                <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">Negocio Consistente </h5>
                                                <p className="lead">
                                                    Este módulo se centra en la comprensión del concepto de negocio consciente y cómo este enfoque puede beneficiar a las empresas y a la sociedad en general.
                                                </p>
                                                <hr />
                                                <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">Mi Potencial como Emprendedor</h5>
                                                <p className="lead">
                                                    Aquí se abordan temas relacionados con el desarrollo de habilidades emprendedoras, la identificación de talentos personales y el reconocimiento del potencial individual para emprender.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-1" role="tabpanel" aria-labelledby="list-profile-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">¿Por Qué Existe Mi Negocio?</h5>
                                        <p className="lead">
                                            Se profundiza en la razón de ser del negocio, su misión, visión y valores, y cómo estos elementos fundamentales guían las decisiones empresariales.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-2" role="tabpanel" aria-labelledby="list-settings-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">¿A Quién le Vendo?</h5>
                                        <p className="lead">
                                            En este módulo se explora la segmentación del mercado y la identificación de los clientes ideales para el negocio.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-3" role="tabpanel" aria-labelledby="list-settings-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">¿Quién Más Vende?</h5>
                                        <p className="lead">
                                            Se analiza la competencia y se estudian estrategias para destacar en un mercado competitivo.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-4" role="tabpanel" aria-labelledby="list-messages-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">¿Qué Vendo?</h5>
                                        <p className="lead">
                                        Este módulo se enfoca en definir claramente los productos o servicios que ofrece el negocio y cómo se diferencian de la competencia.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-5" role="tabpanel" aria-labelledby="list-settings-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">¿Cómo Vendo?</h5>
                                        <p className="lead">
                                        Se abordan estrategias de marketing y ventas para llegar a los clientes de manera efectiva.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-6" role="tabpanel" aria-labelledby="list-home-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">¿Cuánto Gasto?</h5>
                                        <p className="lead">
                                        En este módulo se aborda la gestión financiera del negocio, incluyendo la identificación y control de los costos y gastos.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-7" role="tabpanel" aria-labelledby="list-profile-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">¿Cuándo Alcanzaré las Metas?</h5>
                                        <p className="lead">
                                        Establecimiento de objetivos claros y medibles para el negocio y planificación de metas a corto, mediano y largo plazo.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="list-modulo-8" role="tabpanel" aria-labelledby="list-messages-list">
                                        <h5 className=" fw-bold text-body-emphasis lh-1 mb-3">
                                        ¿Qué Impacto Genero?
                                        </h5>
                                        <p className="lead">
                                        El último módulo se enfoca en la importancia de generar un impacto positivo en diferentes esferas, incluyendo lo personal, empresarial, familiar y socioambiental.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <br />
                        <HeroeConFoto title={"Acerca de los Módulos para el Fortalecimiento de Mi Pymes"} 
                        content={"Estos módulos, en conjunto, proporcionan a los participantes las herramientas y los conocimientos necesarios para crear y gestionar un negocio de manera consciente, teniendo en cuenta no solo el aspecto económico, sino también el impacto social y ambiental de sus operaciones."}
                        image={"/images/Fortaleciendo-Mi-Pyme/1.jpg"}
                        links={[]}/>
                    </div>
                </dic>
            </section>
        </main>
    );
}

