import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { Slider } from '@/components/Sliders'
import { getCuartaAsesoria, getPrimeraAsesoria,getSegundaAsesoria, getTerceraAsesoria } from '@/services/AsesoriasServices';



export default async function Asesorias() {
    const primeraAsesoria = await getPrimeraAsesoria();
    const segundaAsesoria = await getSegundaAsesoria();
    const terceraAsesoria = await getTerceraAsesoria();
    const cuartaAsesoria = await getCuartaAsesoria();
    return (
        <main>
            <section className="text-center container">
                <br />

                <div className="row">
                    <div className="col-md-12">
                        <HeroeSinFoto
                            title={'Licenciamientos, permisos y formalización de MIPYMEs'}
                            content={'Cámara de Comercio e Industrias de Atlántida'} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mx-auto">


                        <ul className="list-group shadow">


                            <li className="list-group-item">

                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">Asesorías en Formalización de Empresas</h5>

                                        <p className="text-muted mb-0 " style={{ textAlign: "justify" }}>
                                            La formalización de una empresa es un paso fundamental para operar de manera legal y segura. La Cámara de Comercio brinda asesoramiento experto para guiar a los emprendedores a través de los procesos de registro, estructura empresarial y cumplimiento de requisitos legales. Esto es esencial para evitar posibles problemas legales y fiscales en el futuro.
                                        </p>
                                        <br />
                                        <a href="https://www.miempresaenlinea.org/" target='_blank' className="btn btn-success w-auto">Visitar</a>
                                        <br />
                                        <br />
                                        <Slider data={primeraAsesoria} orientacion='horizontal' numScroll={1} numVisible={1} width={'auto'} height={300} />
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item">

                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">Licenciamiento y Permisos Sanitarios</h5>

                                        <p className="text-muted mb-0 " style={{ textAlign: "justify" }}>
                                        En muchas industrias, obtener los permisos y licencias adecuadas es un requisito legal antes de poder operar. La Cámara de Comercio puede ayudar a las personas a comprender qué licencias y permisos son necesarios para su tipo de negocio, cómo obtenerlos y cómo mantenerse en conformidad con las regulaciones sanitarias. 
                                        </p>
                                        <br />
                                        <a href="https://www.gs1hn.org/index.html" target='_blank' className="btn btn-success w-auto">Visitar</a>
                                        <br />
                                        <br />
                                        <Slider data={segundaAsesoria} orientacion='horizontal' numScroll={1} numVisible={1} width={'auto'} height={300} />
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item">

                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">Registro de Marcas y Patentes</h5>

                                        <p className="text-muted mb-0 " style={{ textAlign: "justify" }}>
                                        La protección de la propiedad intelectual es esencial para resguardar las ideas y productos únicos de una empresa. La Cámara de Comercio ofrece servicios de registro de marcas y patentes para ayudar a los empresarios a proteger sus creaciones y a evitar que otros las copien o utilicen sin autorización.
                                        </p>
                                        <br />
                                        <a href="https://arsa.gob.hn/requisitos-para-licencia-sanitaria-de-establecimientos-para-dispositivos-medicos/" target='_blank' className="btn btn-success w-auto">Visitar</a>
                                        <br />
                                        <br />
                                        <Slider data={terceraAsesoria} orientacion='horizontal' numScroll={1} numVisible={1} width={'auto'} height={300} />
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item">

                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">Derechos de Autor y Propiedad Intelectual</h5>

                                        <p className="text-muted mb-0 " style={{ textAlign: "justify" }}>
                                        En un mundo cada vez más digital, la protección de los derechos de autor y la propiedad intelectual es crucial. La Cámara de Comercio brinda asesoramiento sobre cómo proteger obras creativas, como música, arte, software y más, para que los creadores puedan beneficiarse de su trabajo de manera justa y legal. 
                                        </p>
                                        <a href="https://www.ip.gob.hn/direcciones/propiedad-intelectual/menu-propiedad-intelectual/derechos-de-autor" target='_blank' className="btn btn-success w-auto">Visitar</a>
                                        <br />
                                        <br />
                                        <Slider data={cuartaAsesoria} orientacion='horizontal' numScroll={1} numVisible={1} width={'auto'} height={300} />
                                    </div>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>

            </section>
        </main>
    )
}

