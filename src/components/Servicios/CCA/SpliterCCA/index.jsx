"use client";

import { Splitter, SplitterPanel } from 'primereact/splitter';

export function SplitterCCA() {

    return (
        <div className="row">
            <br />
            <Splitter style={{ height: 'auto', background: "white" }}>
                <SplitterPanel className="flex align-items-center justify-content-center">

                    <div className="container">
                        <br />
                        <h6 className=" fw-bold">CONCILIACIÓN</h6>
                        <p className="lead text-black" style={{ textAlign: 'justify' }}>
                            Es un mecanismo o forma de resolver problemas legales a traves del cual dos o mas personas o empresas tratan de lograr por si mismas la solucion de los mismos con la ayuda de una persona neutral y calificada que se llama conciliador.  Resolver un conflicto a traves de la conciliacion puede tardar horas o dias, a bajo costo y con la misma fuerza legal que las Sentencias emitidas por los Juzgados de la Republica.
                        </p>
                    </div>
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center">

                    <div className="container">
                        <br />
                        <h6 className="fw-bold">ARBITRAJE</h6>
                        <p className="lead text-black" style={{ textAlign: 'justify' }}>
                            Es un mecanismo o forma de resolver problemas legales a traves del cual dos o mas personas o empresas le conceden el poder de resolver el conflicto a una o varias personas expertas, llamadas Tribunal Arbitral.  Nuestro Centro cuenta con tres tipos de arbitraje:
                        </p>
                        <div className="list-group">
                            <ul className="list-group list-group-flush list-group-numbered text-start">
                                <li className="list-group-item">Arbitraje en Derecho, en donde se decide el conflicto de acuerdo a la ley aplicable</li>
                                <li className="list-group-item">
                                    Arbitraje Tecnico, en donde se decide en base a conocimientos tecnicos, como ser la mala construccion de una edificacion, la mala administracion de una empresa, y tantos otros temas;
                                </li>
                                <li className="list-group-item">
                                    Arbitraje en Equidad, en donde las personas en conflicto nombran a otra quienes consideran justa, para que decida por ellas.
                                </li>

                            </ul>
                        </div>
                        <p className="lead text-black" style={{ textAlign: 'justify' }}>
                            Al igual que la Conciliacion, lo decidido en un proceso de arbitraje tiene la misma fuerza legal de las Sentencias emitidas por los Juzgados de la Republica.
                            <br />
                            <br />
                            Un proceso de arbitraje es rápido (5-6 meses), teniendo Usted oportunidad de escoger quién resolvera su conflicto.
                        </p>
                    </div>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}
