
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { Carrusel } from '@/components/Carrusel'
import { SlideVertical } from '@/components/Servicios/Sliders/SliderVertical'
import Image from 'next/image'

import { getRazonesList, getRazonesVisitas, getImagesExpo } from '@/services/ExpoServices'
import { OrderListGroup } from '@/components/OrderListGroup'
import { Slider } from '@/components/Sliders'
import GaleriaModerna from '@/components/Galeria/GaleriaModerna'





export default async function Expo() {
    const razones = await getRazonesVisitas();
    const razonesList = await getRazonesList();
    const imagesExpo = await getImagesExpo();
    return (
        <main>
            <section className=" text-center container">
                <br />

                <div className="row">
                    <div className="col-md-12">
                        <HeroeSinFoto
                            title={'Expo del Atlántico'}
                            content={'Una expo feria de emprendimiento con el objetivo de integrar a emprendedores de la zona Nor Atlántica en un solo lugar'} />
                    </div>
                </div>

                <div className="row flex-lg-row-reverse align-items-center ">
                    <div className="col-10 col-sm-8 col-lg-4">
                        <Slider data={razones} width={300} height={300} numScroll={1} numVisible={1} />
                    </div>
                    <div className="col-lg-8">
                        <h4 className=" fw-bold text-body-emphasis lh-1 mb-3">Razones Para Visitar Expo del Atlántico: </h4>
                        <OrderListGroup data={razonesList} />

                    </div>
                </div>
                <br />
                <hr />
                <div className="clearfix">
                    <img src="/images/EXPO/Requisitos/1.jpg" width={'auto'} height={'500'} alt="Hola" className="col-md-6 float-md-end mb-3 ms-md-3" />
                    <h2>Requisitos para participar en la expo del atlántico</h2>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Llena el registro en línea</li>
                        <li className="list-group-item">Presenta tus productos en la CCIA</li>
                        <li className="list-group-item">Debes estar formalizado o en proceso de formalización</li>
                        <li className="list-group-item">Cumple con la capacitación olicitada.</li>
                        <li className="list-group-item">Haz el pago correspondiente de tu inscripción</li>
                        <li className="list-group-item">Confirma el depósito realizado</li>
                    </ul>


                    <p>
                        <a className="btn btn-primary w-auto" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScrrIzr6Bj48IBDl950STT5tEy2QNLv8RhN3ihUSAQq55N-rQ/viewform" >Realize su Inscripcion</a>  </p>


                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <HeroeSinFoto
                            title={'Expo del Atlántico'}
                            content={'Expo Ferias del Atlántico 2023'} />
                    </div>
                    <div className="col-md-12 ">
                        <GaleriaModerna data={imagesExpo} />

                    </div>
                </div>


            </section>
        </main>
    )
}

