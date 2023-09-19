import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { Slider } from '@/components/Sliders'
import { getPrimeraConferencia, getSegundaConferencia, getTerceraConferencia } from '@/services/OlaServices';


export default async function Ola() {
  const primeraConferencia = await getPrimeraConferencia();
  const segundaConferencia = await getSegundaConferencia();
  const terceraConferencia = await getTerceraConferencia();
  return (
    <main>
      <section className=" text-center container">
        <br />

        <div className="row">
          <div className="col-md-12">
            <HeroeSinFoto
              title={'Conferencias Empresariales'}
              content={'Oportunidades en el Litoral Atlántico'} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto">


            <ul className="list-group shadow">


              <li className="list-group-item">

                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">Primera Conferencia Empresarial del 2022 - Cena y Conferencia Empresarial</h5>
                    <p className="font-italic text-muted mb-0 small">
                      OLA 25 de agosto de 2022
                    </p>
                    <p className="text-muted mb-0  text-start">
                      La Cámara de Comercio hizo historia en el año 2022 con su primera conferencia empresarial, que se llevó a cabo el 25 de agosto de 2022. Bajo el título "Oportunidades en el Litoral Atlántico", esta noche excepcional tuvo lugar en el elegante salón Majestic.
                    </p>
                    <p className="text-muted mb-0  text-start">
                      Los destacados expositores que iluminaron esta noche fueron:
                    </p>
                    <br />
                    <ul className="list-group text-start">
                      <li className="list-group-item">Arturo Lopez Malumbres: Conferencista Internacional</li>
                      <li className="list-group-item">Eduardo Facusse: Presidente de la Cámara de Comercio e Industrias de Cortés</li>
                    </ul>
                    <br />
                    <p className="text-muted mb-0  text-start">
                      Este evento marcó el inicio de un año lleno de inspiración y perspectivas empresariales. ¡Mantente informado sobre futuros eventos emocionantes en nuestra página web!
                    </p>
                    <br />
                    <Slider data={primeraConferencia} orientacion='horizontal' numScroll={1} numVisible={1} width={'auto'} height={300} />
                  </div>
                </div>

              </li>

              <li className="list-group-item">

                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">Segunda Conferencia Empresarial del 2022 - Cena y Conferencia Empresarial</h5>
                    <p className="font-italic text-muted mb-0 small">
                      OLA 8 de diciembre de 2022
                    </p>
                    <p className="text-muted mb-0  text-start">
                      En el apogeo del año 2022, celebramos la segunda Conferencia Empresarial el 8 de diciembre, nuevamente bajo el emocionante tema "Oportunidades en el Litoral Atlántico". Esta vez, el evento se llevó a cabo en el prestigioso Salón Majestic del Hotel Quinta Real.                    </p>
                    <p className="text-muted mb-0  text-start">
                      Nuestros distinguidos expositores que compartieron sus conocimientos y perspectivas fueron:                    </p>
                    <br />
                    <ul className="list-group text-start">
                      <li className="list-group-item">Alden Rivera: Director de Asociación, con una visión única.</li>
                      <li className="list-group-item">Gerardo Meraz: Presidente de la Cámara de Comercio Villanueva, un líder visionario que inspiró a todos.</li>
                    </ul>
                    <br />
                    <p className="text-muted mb-0  text-start">
                      Esta noche mágica proporcionó aún más conocimientos y oportunidades para nuestros participantes. Aunque este evento ya es parte del pasado, las valiosas lecciones y perspectivas que se presentaron siguen siendo una fuente de inspiración. ¡Mantente atento a futuros eventos emocionantes en nuestra página web!
                    </p>
                    <br />
                    <Slider data={segundaConferencia} orientacion='horizontal' numScroll={1} numVisible={1} width={'auto'} height={300} />
                  </div>
                </div>

              </li>

              <li className="list-group-item">

                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">Tercera Cena Empresarial del 2023 - Conferencia Empresarial OLA</h5>
                    <p className="font-italic text-muted mb-0 small">
                      OLA 17 de agosto de 2023
                    </p>
                    <p className="text-muted mb-0  text-start">
                      El 17 de agosto de 2023, continuamos nuestra tradición de ofrecer una experiencia empresarial inolvidable en la tercera Cena Empresarial del año. Bajo el título "Oportunidades en el Litoral Atlántico", este evento tuvo lugar en el prestigioso Hotel Quinta Real.
                    </p>
                    <p className="text-muted mb-0  text-start">
                      Nuestros distinguidos expositores en esta ocasión fueron:
                    </p>
                    <br />
                    <ul className="list-group text-start">
                      <li className="list-group-item">
                        Mario Canahuati: Presidente de la Asociación de Maquiladoras de Honduras.
                      </li>
                      <li className="list-group-item">
                        Mateo Yibrin: Presidente del COHEP
                      </li>
                    </ul>
                    <br />
                    <p className="text-muted mb-0  text-start">
                      Esta conferencia fue una oportunidad única para explorar las perspectivas empresariales en el Litoral Atlántico. Las ideas y perspectivas compartidas por estos líderes continúan siendo una fuente de inspiración y conocimiento. ¡Mantente atento a futuros eventos emocionantes en nuestra página web!
                    </p>
                    <br />
                    <Slider data={terceraConferencia} orientacion='horizontal' numScroll={1} numVisible={1} width={'auto'} height={300} />
                  </div>
                </div>

              </li>

            </ul>

          </div>
        </div>
        <br />
        <br />
      </section>
    </main>
  )
}

