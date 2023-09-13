"use client";



export function Acordion() {

    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Antecedentes
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body text-start">
                        Cámara de Comercio e Industrias de Atlántida, fue constituida el 21 de Marzo de 1936 y reorganizada de conformidad con el Decreto Legislativo No.26 del 24 de Enero de 1946, cambiando su nombre inicial por el actual.
                        <br></br>
                        <br></br>
                        La Cámara de Comercio e Industrias de Atlántida es una entidad de Derecho Publico, reconocida por el Estado, con Personalidad Jurídica propia y cuyo domicilio es la ciudad de La Ceiba, Departamento de Atlántida.
                        <br></br>
                        <br></br>
                        La Cámara está y deberá estar afiliada a la Federación de las Cámaras de Comercio e Industrias de Honduras (FEDECAMARA), y al CONSEJO HONDUREÑO DE LA EMPRESA PRIVADA (COHEP).
                        <br></br>
                        <br></br>
                        De acuerdo a la Ley de Cámaras de Comercio de Honduras y su Reglamento, se entiende:
                        <br></br>
                        <ol className="list-group list-group-numbered text-font text-black">
                            <li className="list-group-item">Por la Cámara o “La Corporación”: Cámara de comercio e Industrias de Atlántida;</li>
                            <li className="list-group-item">Por “Comerciante”: Las personas naturales titulares de una empresa mercantil y las sociedades constituidas en forma mercantil;</li>
                            <li className="list-group-item">Por “Capital en Giro”: La diferencia del total de su activo, menos el total de su pasivo.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Misión
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body text-start">
                        Ser los lideres y constructores del desarrollo empresarial, comercial e industrial de la zona nororiental del pais, proporcionando apoyo, representatividad y un servicio de calidad a nuestros agremiados; a la vez que contribuimos al desarrollo economico de la población y contrarrestamos la pobreza mediante el fortalecimiento de empresa privada.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Visión
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body text-start">
                        Convertirnos en una camara de comercio e industria de calidad mundial que contribuya al desarrollo total de la zona nororiental, mediante el crecimiento de nuestros agremiados y por ende el de toda la empresa privada.
                    </div>
                </div>
            </div>
        </div>
    );
}
