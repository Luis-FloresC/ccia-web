import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import { EscrollPanel } from '@/components/Inscripciones/ScrollPanel'
import { InscripcionSplitterPanel } from '@/components/Inscripciones/SpliterPanel'
import { getCapitales } from '@/services'


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
            <HeroeConFoto
              title={'¿POR QUÉ LAS EMPRESAS DEBEN REGISTRARSE/INSCRIBIRSE EN LA CÁMARA DE COMERCIO E INDUSTRAS DE LA CEIBA?'}
              content={'¿Deseas Afiliarte a la Cámara de Comercio?'}
              image={'/images/inscripciones/banner.jpg'}
              links={[
                {
                  'href': '#',
                  'title': 'Mira los Beneficios'
                }
              ]}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-8">
            <EscrollPanel />
          </div>
          <div className="col-md-4">
            <img src="/images/inscripciones/cod-comercio.png" className="img-fluid rounded-circle w-auto border bg-primary" style={{ borderBlockColor: 'black' }} alt="..." />
          </div>
          <div className="col-md-12">
            <br />
            <InscripcionSplitterPanel />
          </div>
          <div className="col-md-12">
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
