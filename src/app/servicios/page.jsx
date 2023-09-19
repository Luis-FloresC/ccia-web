
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { Carrusel } from '@/components/Carrusel'
import { SlideVertical } from '@/components/Servicios/Sliders/SliderVertical'
import Image from 'next/image'





export default async function Servicios() {


    return (
        <main>
            <section className=" text-center container">
                <br />

                <Carrusel
                   pictures={[
                    "/images/inicio/Slide/1.jpg",
                    "/images/inicio/Slide/2.jpg",
                    "/images/inicio/Slide/3.jpg",
                    "/images/inicio/Slide/4.jpg",
                    "/images/inicio/Slide/5.jpg",
                    "/images/inicio/Slide/6.jpg",
                    "/images/inicio/Slide/7.jpg",
                    "/images/inicio/Slide/8.jpg",
                    "/images/inicio/Slide/9.jpg",
                  ]}
                />
                <br />

                <div className="row">
                    <div className="col-md-12">
                        <HeroeSinFoto title={'Servicios'} content={'Camara de Comercio e Industrias de Atlántida'} />
                    </div>
                    <div className="col-md-12">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Fortalecimiento Mi Pyme</button>
                                    <button className="nav-link" id="v-pills-profile-tab nav-tabs-link-active-bg-warning" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Formación Empresarial</button>

                                    <button className="nav-link " id="v-pills-messages-tab nav-tabs-link-active-bg-warning" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Asesorías</button>
                                    <button className="nav-link " id="v-pills-messages-tab nav-tabs-link-active-bg-warning" data-bs-toggle="pill" data-bs-target="#v-pills-salones" type="button" role="tab" aria-controls="v-pills-salones" aria-selected="false">Alquiler de Salones</button>

                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <Image src="/images/inicio/Cards/1.jpg" width={300} height={300} className="img-fluid  rounded my-5" alt="..." />
                                                </div>
                                                <div className="col-md-8 px-4">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Fortalecimiento Mi Pyme</h5>
                                                        <p className="card-text text-start ">
                                                            La Cámara de Comercio ofrece un servicio fundamental conocido como "Fortalecimiento Mi Pyme", diseñado específicamente para brindar apoyo y recursos a las pequeñas y medianas empresas (Pymes).                        </p>
                                                        <p className="card-text"><a href="servicios/fortaleciendo-mi-pyme" className="btn btn-primary bg-primary w-auto">Leer Más</a></p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" >
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <Image src="/images/inicio/Cards/2.jpg" width={300} height={300} className="img-fluid  rounded my-5" alt="..." />
                                                </div>
                                                <div className="col-md-8 px-4">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Formación Empresarial</h5>
                                                        <p className="card-text text-start mx-1">
                                                            La Cámara de Comercio ofrece una amplia variedad de temas en sus programas de formación empresarial, que van desde la gestión financiera y el marketing hasta la planificación estratégica y el desarrollo de habilidades de liderazgo. Estos talleres son impartidos por expertos en cada campo, lo que garantiza que los participantes reciban información actualizada y relevante.

                                                        </p>
                                                        <p className="card-text"><a href="/servicios/formacion-empresarial" className="btn btn-primary bg-primary w-auto">Leer Más</a></p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4 ">
                                                    <Image src="/images/inicio/Cards/4.jpg" width={300} height={400} className=" img-fluid  rounded my-5" alt="..." />
                                                </div>
                                                <div className="col-md-8 px-4">
                                                    <div className="card-body">
                                                        <h5 className="card-title">ASESORÍAS</h5>
                                                        <p className="card-text text-start">
                                                            La Cámara de Comercio ofrece una gama de servicios destinados a ayudar a las personas que desean formar parte del mundo empresarial en aspectos cruciales de formalización y protección legal de sus negocios. Estos servicios incluyen:
                                                        </p>

                                                        <ol className="list-group list-group-numbered text-start">
                                                            <li className="list-group-item">Asesorías en Formalización de Empresas</li>
                                                            <li className="list-group-item">Licenciamiento y Permisos Sanitarios</li>
                                                            <li className="list-group-item">Registro de Marcas y Patentes</li>
                                                            <li className="list-group-item">Registro de Marcas y Patentes</li>
                                                        </ol>
                                                        <br />
                                                        <p className="card-text"><a href="/servicios/asesorias" className="btn btn-primary bg-primary w-auto">Leer Más</a></p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-pills-salones" role="tabpanel" aria-labelledby="v-pills-salones-tab">
                                        <div className="card mb-3">
                                            <div className="row g-0">

                                                <div className="col-md-12">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Alquiler de Salones</h5>
                                                        <p className="card-text text-start">
                                                            La Cámara de Comercio ofrece un servicio valioso que consiste en el alquiler de salones dentro de sus instalaciones. Estos salones están diseñados para ser versátiles y adecuados para una variedad de usos, desde reuniones de negocios hasta eventos educativos, talleres, conferencias, seminarios, presentaciones y más.
                                                        </p>
                                                        <div className="row">
                                                            <div className="container text-center">
                                                                <div className="row align-items-start">
                                                                    <div className="col">
                                                                        <SlideVertical typeSalon={3} />
                                                                    </div>
                                                                    <div className="col">
                                                                        <SlideVertical typeSalon={2} />
                                                                    </div>
                                                                    <div className="col">
                                                                        <SlideVertical typeSalon={1} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <br />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </section>
        </main>
    )
}

