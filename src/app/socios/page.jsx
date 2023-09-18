import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { getCapitales } from '@/services'
import './socios.css'
import { Carrusel3D } from '@/components/Carrusel/Carrusel3D'
import { TabViewSocios } from '@/components/Socios/TabViewPanel'
import { Slider } from '@/components/Sliders'
import { getSocios } from '@/services/SociosServices'



export default async function Inscripcion() {
  const capitales = await getCapitales();
  const socios = await getSocios();
  return (
    <main>
      <section className=" text-center container">
        <br />
        <div className="row">
          <div className="col-lg-12">
            <HeroeSinFoto title={'Nuestros Socios'} content={'Cámara de Comercio e Industrias de Atlántida'} />
            <Slider data={socios} numScroll={3} numVisible={3} width={200} orientacion='horizontal' height={200} />
            <br />
          </div>
        </div>

        <div className="row">


          <div className="col-md-12">
          
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
            <br />
          </div>
        </div>
      </section>
    </main>
  )
}

