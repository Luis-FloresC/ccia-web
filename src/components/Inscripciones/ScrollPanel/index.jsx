'use client'
import { ScrollPanel } from 'primereact/scrollpanel';
export  function EscrollPanel() {
    return (
        <>
            <ScrollPanel style={{ width: '100%', height: '450px' }}>

               
                <div className="text-sm text-black">
                  
                    <h6 className="fw-bold text-start text-normal">
                        CÓDIGO DE COMERCIO
                    </h6>
                  
                    <p className="text-start">
                        <span className="fw-bold">Artículo 30.</span> Toda persona natural o jurídica que se dedique a ejercer el comercio, que se haya declarado como comerciante individual o constituido como sociedades mercantiles, deberán estar inscritos en la Cámara de su domicilio, de conformidad con el art. 384 del código de Comercio. Igual Obligación tendrán las sociedades extranjeras, autorizadas para operar en Honduras.
                    </p>
                    <div className="d-grid gap-2 p-1">
                        <a href="https://preregistro.cciahn.com" target="_blank" className="btn bg-info text-white" style={{ width: "auto" }} type="button">SOLICITUD DE INSCRIPCIÓN EN LÍNEA</a>
                        <a href="https://cciahn.org/downloads/formulario-de-inscripcion-para-comerciantes-individuales.pdf" target="_blank" className="btn bg-warning text-white" style={{ width: "auto" }} type="button">DESCARGAR FORMULARIO  COMERCIANTE INDIVIDUAL</a>
                        <a href="https://cciahn.org/downloads/formulario-de-inscripcion-para-sociedades-mercantiles.pdf" target="_blank" className="btn bg-success text-white" style={{ width: "auto" }} type="button">DESCARGAR FORMULARIO  SOCIEDAD MERCANTIL</a>
                    </div>

                </div>

                <div className="text-black">
                    <br />
                    <h6 className="fw-bold text-start text-normal">
                        LEY DE CÁMARAS DE COMERCIO E INDUSTRIAS DE HONDURAS
                    </h6>
                    <br />
                    <p className="text-start">
                        <span className="fw-bold">Artículo 384.</span>
                        Es obligación del registro de todo comerciante en la Cámara de Comercio e Industrias correspondiente.
                    </p>
                    <br />
                    <p className="text-start ">
                        <span className="fw-bold">Artículo 31.</span>
                        La Secretaria de Estado en los Despachos de Industria y Comercio, previa notificación de la Cámara, impondrá al comerciante una multa equivalente hasta de diez (10) veces el valor de la cuota de inscripción que debe cubrir cuando este, estando obligado a registrarse en la Cámara respectiva, no lo efectué dentro de los tres meses (3), después de la fecha de su inscripción en el Registro Mercantil.
                    </p>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item fw-bold">Los registros se renovarán obligatoriamente todos los años terminados en cero (0) y en cinco (5).</li>
                    </ul>
                    <br />
                    <p className="text-start">
                        Las Alcaldías Municipales no autorizarán los permisos de operación a todo comerciante individual, persona natural o jurídica, que no se inscriba o renueve el Registro previamente en la Cámara respectiva de su municipio o departamento.
                    </p>
                    <br />
                    <h6 className="fw-bold text-start text-normal">
                        PLAN DE ARBITRIOS 2013
                    </h6>
                    <br />
                    <p className="text-start">
                        <span className="fw-bold">Artículo 40. </span>
                        Literal H. Además, para extenderle el Permiso de Operación de Negocios, las empresas naturales y jurídicas, legalmente constituidas, deben presentar una constancia de registro de la Cámara de Comercio e Industrias de Atlántida según lo exige el Decreto 57-58 del 27 de noviembre del 2000.
                    </p>
                </div>

            </ScrollPanel>
        </>
    );
}