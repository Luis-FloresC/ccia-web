import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { getCapitales } from '@/services'
import './socios.css'
import { Carrusel3D } from '@/components/Carrusel/Carrusel3D'

export default async function Inscripcion() {
  const capitales = await getCapitales();
  const formatCurrency = (value) => {
    return value.toLocaleString('es-HN', { style: 'currency', currency: 'HNL' });
  };
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

          <div className="col-md-12 pb-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <HeroeSinFoto title={'Cuotas de Afiliacion'} content={'Camara de Comercio e Industria de Honduras'} />
          </div>
          <div className="col-md-12">
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
        </div>
      </section>
    </main>
  )
}
