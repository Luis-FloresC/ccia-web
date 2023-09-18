
import { Carrusel } from '@/components/Carrusel'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { getCardsServicioInicio } from '@/services/ServiciosCCIA'
import { Cards } from '@/components/Cards'
import { OrderListGroup } from '@/components/OrderListGroup'
import { getLogros } from '@/services/Logros'

export default async function Home() {
  const servicios = await getCardsServicioInicio();
  const logros = await getLogros();
  return (
    <main>
      <section className="text-center container">
        <Carrusel
          pictures={[
            "/images/inicio/Slide/1.jpg",
            "/images/inicio/Slide/2.jpg",
            "/images/inicio/Slide/3.jpg",
            "/images/inicio/Slide/4.jpg",
            "/images/inicio/Slide/5.jpg",
            "/images/inicio/Slide/6.jpg",
            "/images/inicio/Slide/7.jpg",
            "/images/inicio/Slide/8.jpg",
            "/images/inicio/Slide/9.jpg",
          ]}
        />
        <br />
        <HeroeSinFoto title={'Nuestros Proyectos'} content={'Cámara de Comercio e Industrias de Atlántida'} />
        <br />
        <Cards data={servicios} />
        <br />
        <HeroeSinFoto title={'Logros Obtenidos'} content={'Cámara de Comercio e Industrias de Atlántida'} />
        <br />
        <OrderListGroup data={logros} />
        <br />
      </section>
    </main>
  )
}
