import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { getCapitales } from '@/services'
import './socios.css'
import { Carrusel3D } from '@/components/Carrusel/Carrusel3D'
import { TabViewSocios } from '@/components/Socios/TabViewPanel'



export default async function Inscripcion() {
  const capitales = await getCapitales();

  return (
    <main>
      <section className="py-5 text-center container">
        <br />
        <div className="row">
          <div className="col-lg-12">
            <HeroeSinFoto title={'Nuestros Socios'} content={'Camara de Comercio e Industria de Honduras'} />
            <Carrusel3D pictures={[
              '/images/inscripciones/1.jpg',
              '/images/inscripciones/2.jpg',
              '/images/inscripciones/3.jpg',
              '/images/inscripciones/4.jpg',
              '/images/inscripciones/5.jpg',
              '/images/inscripciones/6.jpg',
              '/images/inscripciones/7.jpg',
              '/images/inscripciones/8.jpg',
              '/images/inscripciones/9.jpg',
              '/images/inscripciones/10.jpg',
            ]} />
          </div>
        </div>

        <div className="row">


          <div className="col-md-12">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <HeroeConFoto
              title={"¿QUIÉNES PUEDEN AFILIARSE?"}
              content={"Toda persona natural o jurídica que ejerce una actividad comercial, industrial o de servicio y todas las personas que por la naturaleza de su profesión u oficio tengan relaciones con el comercio en cualquiera de sus formas."}
              image={"/images/inscripciones/banner2.jpg"}
              links={[]}
            />
          </div>
          <div className="col-md-12" id="beneficio">
            <br />
            <TabViewSocios Capitales_={capitales} />
          </div>
        </div>
      </section>
    </main>
  )
}

