import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { Carrusel } from '@/components/Carrusel'
import { SlideVertical } from '@/components/Servicios/Sliders/SliderVertical'
import Image from 'next/image'


import { Slider } from '@/components/Sliders'
import { getEmprendedoresImages } from '@/services/FortaleciendoMiPymeServices'
import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'
import { getTalleres } from '@/services/TalleresServices'

export default async function FormacionEmpresarial() {
    const talleres = await getTalleres();
    return (
        <main>
            <section className=" text-center container">

                <dic className="row">


                    <div className="col-md-12">
                        <br />
                        <HeroeConFoto title={"Formación Empresarial"}
                            content={"La formación empresarial ofrecida por la Cámara de Comercio es una valiosa oportunidad para aquellos que desean mejorar sus habilidades y conocimientos en el ámbito empresarial. Ya sea que estén comenzando un nuevo negocio o buscando mejorar uno existente, estos talleres brindan un camino claro hacia el éxito empresarial al proporcionar educación, recursos y conexiones que pueden marcar la diferencia en su camino hacia el éxito. "}
                            image={"/images/inicio/Cards/2.jpg"}
                            links={[]} />
                    </div>
                    <div className="col-md-12">
                        <br />
                        <HeroeSinFoto title={"Talleres"} content={"Formación Empresarial"} />
                    </div>
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">
                                            #
                                        </th>
                                        <th scope="col" className="text-center">
                                            Nombre del Taller
                                        </th>
                                        <th scope="col" className="text-center">
                                            Duración
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {talleres.map((taller, key) => (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{taller.nombre}</td>
                                            <td>{taller.horas} horas</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </dic>
            </section>
        </main>
    );
}

