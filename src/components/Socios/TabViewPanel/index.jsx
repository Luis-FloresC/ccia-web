'use client'
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';


import "primereact/resources/primereact.min.css";

export function TabViewSocios({Capitales_}) {
    const capitales = Capitales_;
    const tab1HeaderTemplate = (options) => {
        return (
            <button type="button" onClick={options.onClick} className='btn w-auto '>
                <i className="pi pi-prime mr-2" />
                {options.titleElement}
            </button>
        );
    };

   

    const formatCurrency = (value) => {
        return value.toLocaleString('es-HN', { style: 'currency', currency: 'HNL' });
      };

    return (
        <div className="card">
            <TabView >
                <TabPanel  header="REQUISITOS DE AFILIACIÓN"  headerTemplate={tab1HeaderTemplate}>
                    <br />

                    <div className="container">
                        <br />
                        <h6 className=" fw-bold">REQUISITOS DE AFILIACIÓN</h6>
                        <div className="list-group">
                            <ul className="list-group list-group-flush list-group-numbered text-start">
                                <li className="list-group-item">Haberse inscrito en la Cámara de Comercio de conformidad al artículo N. 384 del Código de Comercio.</li>
                                <li className="list-group-item">Llenar y firmar solicitud de Afiliación.</li>
                                <li className="list-group-item">Acepatada la afiliación del miembro, este deberá pagar las cuotas que la Cámara señale según tablas de pagos vigente deberá pagar la inscripión (couta única) y la 1era. couta de membresía (cuota mensual).</li>
                                <li className="list-group-item">Llenar Formulario</li>

                            </ul>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel  header="BENEFICIOS QUE RECIBES AL AFILIARTE" headerTemplate={tab1HeaderTemplate} headerClassName='ms-1' >
                    <br />

                    <div className="container" id="panel">
                        <br />
                        <h6 className=" fw-bold">BENEFICIOS QUE RECIBES AL AFILIARTE</h6>
                        <p className="lead text-start">
                        Estos son solo algunos de los beneficios que recibes al formar parte del grupo de socios de la Cámara de Comercio e Industrias de Atlántida.
                        </p>
                        <div className="list-group">
                            <ul className="list-group list-group-flush list-group-numbered text-start">
                                <li className="list-group-item">
                                ​Asistir a las Asambleas Generales con voz y voto en los asuntos que se discutan en ellas;  Elegir y ser electo en la Junta Directiva;  Integrar comisiones y comités especiales;
                                </li>
                                <li className="list-group-item">
                                Servicios de organización y representación de la empresa y sus propietario(s).
                                </li>
                                <li className="list-group-item">
                                Participacion en  actividades gremiales: asambleas, capacitación, ferias comerciales, reuniones empresariales, eventos sociales, etc.
                                </li>
                                <li className="list-group-item">
                                Extensión gratuita e inmediata de Constancias de Afiliación e Inscripción, para participar en Licitaciones, concursos, en instituciones de Gobierno, Proyectos, Empresas Privadas, Organismos Internacionales.
                                </li>
                                <li className="list-group-item">
                                Extensión de Carnet Gratuito que lo certifica como miembro de la Camara
                                </li>
                                <li className="list-group-item">
                                Gestión y Obtención de información empresarial, comercial, técnica, legal, etc., con otras Cámaras u organismos empresariales: Nacionales e Internacionales.
                                </li>
                                <li className="list-group-item">
                                Capacitación empresarial en diversos temas, gratuita ó a costos preferenciales para afiliados.
                                </li>
                                <li className="list-group-item">
                                Acreditación de la empresa afiliada ante otras empresas, organizaciones privadas y públicas, embajadas, etc., en la ciudad,  nacional e internacional.
                                </li>
                                <li className="list-group-item">
                                Selección entre nuestros proveedores, al ejecutarse proyectos de inversión.
                                </li>
                                <li className="list-group-item">
                                Uso de los salones para eventos y salas del edificio, a precios especiales, para realizar reuniones: empresariales, socios, capacitación, trabajadores, rueda de negocios, convivios, etc.
                                </li>
                                <li className="list-group-item">
                                El prestigio, privilegio y reconocimiento de la participación en proyectos colectivos hacia la comunidad.
                                </li>
                                <li className="list-group-item">
                                Participación en la red empresarial FEDECAMARA (Federación de Cámaras de Comercio e Industrias de Honduras) y demás organizaciones empresariales.
                                </li>
                                <li className="list-group-item">
                                Registro en el directorio comercial y empresarial para sus contactos comerciales.
                                </li>
                                <li className="list-group-item">
                                Autorización de los Certificados de origen para exportación de productos: industriales, elaborados, muestras, artesanales, naturales, etc.
                                </li>
                                <li className="list-group-item">
                                Enlace de la empresa con: clientes, proveedores, gobierno, e instituciones de apoyo a la comunidad y empresa privada.
                                </li>
                                <li className="list-group-item">
                                Acceso  a la base de datos de Hojas de Vida de recurso humano disponible en la Cámara de Comercio: Universitarios,  Educación Media, Técnicos, Servicios generales.
                                </li>


                            </ul>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel header="CUOTAS DE AFILIACIÓN" headerTemplate={tab1HeaderTemplate} headerClassName='ms-1' >
                    <br />
                    <div className="container">
                    <h6 className=" fw-bold">CUOTAS DE AFILIACIÓN</h6>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">
                                        Rango
                                    </th>
                                    <th scope="col" className="text-center">
                                        Pago por Inscripción
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {capitales.map((capital) => (
                                    <tr key={capital.capital_id}>
                                        <td>{capital.capital_descripcion}</td>
                                        <td>{formatCurrency(capital.capital_pago_por_inscripcion)}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    </div>
                  


                </TabPanel>
            </TabView>
        </div>
    )
}
