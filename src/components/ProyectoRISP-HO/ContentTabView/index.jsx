"use client";
import {
  getCompromisos,
  getObjetivosPricipales,
  getOrganizaciones,
} from "@/services/ProyectoRISP_HO_Services";
import { useEffect, useState } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { TabView, TabPanel } from "primereact/tabview";
import { OrderListGroup } from "@/components/OrderListGroup";
import { Slider } from "@/components/Sliders";

export function ContentTabViewProyectoRISP_HO() {
  const [objetivosEspecificos, setObjetivosEspecificos] = useState([]);
  const [compromisos, setCompromisos] = useState([]);
  const [organizaciones, setOrganizaciones] = useState([]);

  useEffect(() => {
    getCompromisos().then((data) => setCompromisos(data));
    getObjetivosPricipales().then((data) => setObjetivosEspecificos(data));
    getOrganizaciones().then((data) => setOrganizaciones(data));
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <TabView>
            <TabPanel
              header=" Fase II"
              leftIcon="bi bi-file-earmark-medical-fill mx-1"
            >
              <div className="row flex-lg-row-reverse align-items-center ">
                <div className="col-10 col-sm-8 col-lg-6">
                  <img
                    src="/images/RISP-HO/5.jpg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="300"
                    height="300"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                    Fase II
                  </h1>
                  <p className="lead" style={{ textAlign: "justify" }}>
                    Proyecto Respuesta Inmediata de Salud Pública para Contener
                    y Controlar el Coronavirus (COVID-19) y Mitigar su Efecto en
                    la Prestación de Servicios en Honduras (RISP-HO).
                  </p>
                  <p className="lead " style={{ textAlign: "justify" }}>
                    El proyecto RISP-HO, forma parte integral de las acciones
                    estratégicas de la Secretaria de Salud (SESAL) y del
                    Gobierno de la República de Honduras. La Cámara de Comercio
                    e Industrias de Atlántida (CCIA) es la entidad gestora, para
                    contener y dar respuesta a los casos de covid-19 en el país,
                    está dirigido al Hospital General Atlántida de la ciudad de
                    La Ceiba, Departamento de Atlántida
                  </p>
                  <p className="lead " style={{ textAlign: "justify" }}>
                    La Fase II está siendo dirigido como apoyo a los hospitales:
                    Hospital de Tela, Hospital General Atlántida, Hospital
                    General San Isidro, así como a la Región Sanitaria del
                    departamento de Atlántida y Región Sanitaria del
                    Departamento de Colon, para atención a centros de Triaje y
                    brigadas de vacunación.
                  </p>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h1 className="display-5 fw-bold">Objetivo Principal</h1>
                    <p className="lead" style={{ textAlign: "justify" }}>
                      "Contribuir al fortalecimiento de la respuesta inmediata
                      del Sistema Nacional de Salud, desarrollando acciones
                      estratégicas y operativas en la vigilancia epidemiológica,
                      contención de la transmisión, mejora en el acceso y la
                      atención de casos sospechosos y positivos de COVID-19,
                      enmarcadas en principios de eficiencia, efectividad,
                      transparencia e igualdad".{" "}
                    </p>
                  </div>
                  <div className="col-12">
                    <h1 className="display-5 fw-bold">Objetivos Específicos</h1>
                    <OrderListGroup data={objetivosEspecificos} />
                  </div>
                  <div className="col-12">
                    <br />
                    <Splitter style={{ height: "auto" }}>
                      <SplitterPanel className="flex align-items-center justify-content-center">
                        <h5 className="fw-bold">MONTO DE INVERSIÓN</h5>
                        <div className="p-2">
                          <p
                            className="lead m-2"
                            style={{ textAlign: "justify" }}
                          >
                            28.566,351 millones de Lempiras de fondos asignados,
                            como estrategia por la SESAL y del Gobierno de la
                            República Honduras, para contribuir y fortalecer al
                            sistema de Salud en el Litoral Atlántico y
                            Departamento de Colón. Fondos obtenidos como
                            préstamo del Banco Interamericano de Desarrollo
                            (BID).
                          </p>
                        </div>
                      </SplitterPanel>
                      <SplitterPanel className="flex align-items-center justify-content-center">
                        <h5 className=" fw-bold">DURACIÓN DEL PROYECTO</h5>
                        <div className="p-2">
                          <p
                            className="lead m-2"
                            style={{ textAlign: "justify" }}
                          >
                            2 meses para la ejecución del proceso de compras,
                            adquisiciones, contratación de personal y entregas
                            del equipo e insumos.
                          </p>
                          <p
                            className="lead m-2"
                            style={{ textAlign: "justify" }}
                          >
                            Dos meses para documentación y cierre. Con la
                            posibilidad de ampliación del proyecto.
                          </p>
                        </div>
                      </SplitterPanel>
                    </Splitter>
                  </div>

                  <div className="col-12">
                    <br />
                    <br />
                    <p className="fw-bold" style={{ textAlign: "justify" }}>
                      La Cámara de Comercio e Indústrías de Atlántida, como
                      GESTOR de la Fase II del Proyecto Risp-HO estamos
                      comprometidos a:
                    </p>
                    <OrderListGroup data={compromisos} />
                  </div>

                  <div className="container-fluid">
                    <div className="px-lg-5">
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel
              header=" Quiénes Somos"
              leftIcon="bi bi-chat-square-text mx-1"
            >
              <div className="row flex-lg-row-reverse align-items-center ">
                <div className="col-lg-8">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                    Quiénes Somos
                  </h1>
                  <p className="lead" style={{ textAlign: "justify" }}>
                    Proyecto Respuesta Inmediata de Salud Pública para Contener
                    y Controlar el Coronavirus (COVID-19) y Mitigar su Efecto en
                    la Prestación de Servicios en Honduras (RISP-HO).
                  </p>
                  <p className="lead " style={{ textAlign: "justify" }}>
                    Respuesta Inmediata de Salud Pública para Contener y
                    Controlar el Coronavirus y Mitigar su Efecto en la
                    Prestación de Servicios en el Litoral Atlántico. El litoral
                    atlántico ha sido una de las zonas más afectada de contagios
                    por el coronavirus a nivel nacional. Las autoridades de
                    salud y las organizaciones agrupadas a Singer y el sector
                    privado han realizado acciones para fortalecer el sistema de
                    salud nacional, tanto en la atención temprana, centros de
                    triage como en la sala de Covid del Hospital General
                    Atlántida. Buscando fortalecer estos esfuerzos y la
                    infraestructura de respuesta durante la pandemia, La Cámara
                    de Comercio e Industrias de Atlántida (CCIA) en conjunto con
                    la Secretaria de Salud (SESAL), estarán ejecutando una
                    importante inversión como estrategia y fondos asignados por
                    la SESAL.,destinada al fortalecimiento de la respuesta
                    inmediata del Sistema Nacional de Salud, desarrollando
                    acciones estratégicas y operativas en la vigilancia
                    epidemiológica, contención de la transmisión, mejorando el
                    acceso y la atención de casos con el equipo necesario a
                    pacientes en estado crítico de la sala de COVID-19 en
                    Hospital Regional Atlántida.
                  </p>
                  <p className="lead " style={{ textAlign: "justify" }}>
                    La Fase II, está siendo dirigido como apoyo a los
                    hospitales: Hospital de Tela, Hospital General Atlántida,
                    Hospital General San Isidro, así como a la Región Sanitaría
                    del departamento de Atlántida y Región Sanitaria del
                    Departamento de Colon, para atención a centros de Triage y
                    brigadas de vacunación.
                  </p>
                </div>
                <div className="col-10 col-sm-8 col-lg-4">
                  <img
                    src="/images/RISP-HO/6.jpg"
                    className="d-block mx-lg-auto img-fluid "
                    alt="Bootstrap Themes"
                    width="auto"
                    height="auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel header=" Qué Hacemos" leftIcon="bi bi-info-circle mx-1">
              <div className="row flex-lg-row-reverse align-items-center ">
                <div className="col-lg-8">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                    Qué Hacemos
                  </h1>
                  <p className="lead " style={{ textAlign: "justify" }}>
                    Contamos con la participación ciudadana, conformada por
                    miembros de la Fundación Hondureña para el Niño con Cancer,
                    La Cámara Junior, La Iglesia Católica, Fundación Pro Cancer,
                    Comisionado Nacional de Derechos Humanos. Mediante esta
                    veeduría, los ciudadanos y ciudadanas vigilan, fiscalizan y
                    controlan la administración y gestión del recursos humano
                    como financiero, con facultad y responsabilidad de observar,
                    inspeccionar y controlar para determinar lo establecido en
                    las normas, y así contribuir a la transparencia y eficacia
                    de las acciones.
                  </p>
                  <p className="fw-bold text-black">
                    ORGANIZACIONES QUE FORMAN PARTE DE LA VEEDURÍA:
                  </p>
                  <Slider
                    data={organizaciones}
                    orientacion="horizontal"
                    numScroll={1}
                    numVisible={6}
                    width={"auto"}
                    height={200}
                  />
                </div>
                <div className="col-10 col-sm-8 col-lg-4">
                  <img
                    src="/images/RISP-HO/8.jpg"
                    className="d-block mx-lg-auto img-fluid "
                    alt="Bootstrap Themes"
                    width="auto"
                    height="auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
