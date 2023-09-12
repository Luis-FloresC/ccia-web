'use client'
import { Splitter, SplitterPanel } from 'primereact/splitter';
export async function InscripcionSplitterPanel() {
    return (
        <>
            <Splitter style={{ height: 'auto', background: "white" }}>
                <SplitterPanel className="flex align-items-center justify-content-center">

                    <div className="container">
                        <br />
                        <h6 className=" fw-bold">REQUISITOS DE INSCRIPCIÓN</h6>
                        <div className="list-group">
                            <ul className="list-group list-group-flush list-group-numbered text-start">
                                <li className="list-group-item">Escritura Original</li>
                                <li className="list-group-item">Fotocopia de la Escritura de Constitución</li>
                                <li className="list-group-item">Fotocopia de la Cédula de Identidad (Propietario o Socios)</li>
                                <li className="list-group-item">Fotocopia del RTN (Propietario, Socios o Empresa)</li>
                                <li className="list-group-item">Llenar la Solicitud de Registro</li>
                                <li className="list-group-item">Pago de Inscripción de acuerdo al Capital Mínimo establecido en su Escritura de Constitución </li>
                                <li className="list-group-item">Pago de la Mensualidad (en caso de Afiliación) de acuerdo al Capital Mínimo establecido en su escritura y a la tasa estipulada por la CCIA.</li>

                            </ul>
                        </div>
                    </div>
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center">

                    <div className="container">
                        <br />
                        <h6 className="fw-bold">REQUISITOS DE REINSCRIPCIÓN</h6>
                        <div className="list-group">
                            <ul className="list-group list-group-flush list-group-numbered text-start">
                                <li className="list-group-item">Escritura Original</li>
                                <li className="list-group-item">Llenado de Formulario</li>
                                <li className="list-group-item">Pago de Reinscripción</li>

                            </ul>
                        </div>
                    </div>
                </SplitterPanel>
            </Splitter>
        </>
    );
}